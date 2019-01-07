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


console.log(`
  current State
  goals: ${state.goal},
  error: ${state.errors},
  resotNames: ${JSON.stringify(state.resortNames)}
  allSkiDays: ${JSON.stringify(state.allSkiDays)}
`);

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

console.log(`
  current State
  goals: ${state.goal},
  error: ${state.errors},
  resotNames: ${JSON.stringify(state.resortNames)}
  allSkiDays: ${JSON.stringify(state.allSkiDays)}
`);
state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`

	Next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	allSkiDays: ${JSON.stringify(state.allSkiDays)}
	suggestions: ${state.resortNames.suggestions}

`)
