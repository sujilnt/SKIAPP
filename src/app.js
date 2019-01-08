import C from "./constants.js";
import appReducer from "./store/reducers";
import storeFactory from "./store/index.js";



const intialState= (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']):
    {}

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store']=state;
};
const store = storeFactory(intialState);
store.subscribe=(saveState);

// dispatching the store
store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": true,
		"backcountry": true
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Squaw Valley",
		"date": "2016-3-28",
		"powder": true,
		"backcountry": false
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "The Canyons",
		"date": "2016-1-2",
		"powder": false,
		"backcountry": true
	}
})


