import C from "./constants.js";
import appReducer from "./store/reducers.js";
import initialState from "./initialState.json";
let state = initialState;
console.log(`
  initial State
  goals: ${state.goal},
  error: ${state.errors},
  resotNames: ${JSON.stringify(state.resortNames)}
  allSkiDays: ${JSON.stringify(state.allSkiDays)}
`);
state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

