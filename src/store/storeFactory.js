import appReducer from "./reducers.js";
import {createStore,applyMiddleware} from "redux";

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

export default (intialState={})=>{
	return applyMiddleware(consoleMessages)(createStore)(appReducer,intialState);
}
