import expect from "expect";
import {
	addError,
	clearError,
	changeSuggestions,
	clearSuggestions,
	addDay,
	removeDay,
	setGoal
} from './store/actions';

export const storeAndActiontestCase=(store)=>{

// Challenge: build addError() Action Creator
	store.dispatch(
		addError("something went wrong")
	);
	expect(store.getState().errors)
		.toEqual(["something went wrong"]);
	
	console.log(`

    addError() Action Creator Works!!!

`);

// Challenge: build clearError() Action Creator
	store.dispatch(
		clearError(0)
	);
	
	expect(store.getState().errors)
		.toEqual([]);
	
	console.log(`

    clearError() Action Creator Works!!!

`);

//
// Challenge: build changeSuggestios() Action Creator
	store.dispatch(
		changeSuggestions(['One', 'Two', 'Three'])
	);
	expect(store.getState().resortNames.suggestions)
		.toEqual(['One', 'Two', 'Three']);
	console.log(`

    changeSuggestions() Action Creator Works!!!
    
`);
// Challenge: build SetGoals() Action Creator
	store.dispatch(
		setGoal(5)
	);
	expect(store.getState().goal)
		.toEqual(5);
	console.log(`

    setGoal() Action Creator Works!!!
    
    
`);
// Challenge: build clearSuggestions() Action Creator
	store.dispatch(clearSuggestions());
	expect(store.getState().resortNames.suggestions).toEqual([]);
	console.log(`

    clearSuggestions() Action Creator Works!!!
    
	`);
// challenge : build addDay() Action Creator
	const totalskiDays = store.getState().allSkiDays.length;
	console.log(store.getState());
	store.dispatch(
		addDay("Squaw Valley","2016-3-28",true,false)
	);
	expect(store.getState().allSkiDays.length).toEqual(totalskiDays+1);
	console.log(`

    addDay() Action Creator Works!!!
    
	`);
	// challenge : build RemoveDay() Action Creator
	const currrenttotalskiDays = store.getState().allSkiDays.length;
	console.log("data....",currrenttotalskiDays);
	store.dispatch(
		removeDay("2016-3-28".toString())
	);
	expect(store.getState().allSkiDays.length).toEqual(0);
	console.log(`

    RemoveDay() Action Creator Works!!!
    
	`);
};
