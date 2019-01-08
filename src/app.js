import storeFactory from "./store/storeFactory";
import { addDay,removeDay,setGoal } from "./store/actions";
import C from "./constants";
const intialState= (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']):
    {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store']=state;
};
const store = storeFactory(intialState);
store.subscribe=(saveState);

// dispatching the store
store.dispatch(
	addDay("Mt Shasta","2016-10-28")
);

store.dispatch(
	addDay("Squaw Valley","2016-3-28",true,false)
);
store.dispatch(
	removeDay("2016-3-28")
);
store.dispatch(
	{
		type: C.SET_GOAL,
		payload:5
	}
);
