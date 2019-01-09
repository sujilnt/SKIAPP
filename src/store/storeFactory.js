import appReducer from "./reducers.js";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// store => next => action
const consoleMessages= store => next=> action=>{
	let result;
	console.groupCollapsed(`dispatching action => ${action.type}`);
	console.log("SKI DAYS",store.getState().allSkiDays.length);
	result=next(action);
	let {goal,allSkiDays,errors,resortNames}=store.getState();
	console.log(`
        ski Days: ${allSkiDays.length}
        errors: ${errors.length}
        fetching:${resortNames.fetching}
        suggesstion: ${resortNames.suggestions}
        goals: ${goal}
  `);
	console.groupEnd();
	return result;
};

// applying middleware
export default (intialState={})=>{
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer,intialState);
}
