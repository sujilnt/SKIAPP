import C from "../constants";
export const addDay=(resort,date,powder=false,backcountry=false)=>{
	return {
		type:C.ADD_DAY,
		payload: {
			resort,
			date,
			powder,
			backcountry
		}
	}
};

export const removeDay=(date)=>{
	return{
		type:C.REMOVE_DAY,
		payload: date
	}
};

export const setGoal=(goal)=>{
	return{
		type: C.SET_GOAL,
		payload:goal
    }
};

export const addError =(error)=>{
	return{
		type:C.ADD_ERROR,
		payload:error
	}
};

export const clearError=(error)=>{
	return{
		type: C.CLEAR_ERROR,
		payload:error
	}
};
export const changeSuggestions=(suggestions)=>{
	return {
		type: C.CHANGE_SUGGESTIONS,
		payload:suggestions
	}
};
export const clearSuggestions= (suggestions)=>{
	return {
		type: C.CLEAR_SUGGESTIONS,
		payload:suggestions
	}
};

export const randomGoals=()=>{

};
