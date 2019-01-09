import storeFactory from "./store/storeFactory";
import {storeAndActiontestCase} from "./app.test";


const intialState= (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']):
    {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store']=state;
};
const store = storeFactory(intialState);
store.subscribe=(saveState);

const testCases = storeAndActiontestCase(store);

