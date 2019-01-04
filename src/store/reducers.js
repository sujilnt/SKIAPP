import C from "../constants";
export const goal=(state=10,action)=>(action.type=== C.SEt_GOAL) ?
		parseInt(action.payload) :
        state;

export const skiDay=(state=null,action)=>(action.type === C.ADD_DAY) ?
	action.payload :
	state ;

export const errors=(state=null,action)=>{
	switch(action.type){
		case C.ADD_DAY:
			return [...state,action.payload];
		case C.CLEAR_ERROR:
			return [state.filter((row,index)=> index !== action.payload)];
		default:
			return state
	}
};
export const allskyDays=(state,action)=>{
	switch(action.type){
		case C.ADD_DAY:
			const hasDay=state.some(skiDay=>skiDay.date=== action.payload.date);
			return (hasDay) ?
				state :
				[...state,skiDay(null,action.payload)].sort((a,b)=>new Date(b.date)- new Date(a.date));
		case C.REMOVE_DAY:
			state= [state.filter(skiDay=>skiDay.date !== action.payload.date)];
			return state;
		default:
			return state;
	}
	
};
