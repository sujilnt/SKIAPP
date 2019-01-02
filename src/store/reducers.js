import C from "../constants";
export const goal=(state=10,action)=>(action.type=== C.SEt_GOAL) ?
		parseInt(action.payload) :
        state;

export const skiDay=(state=null,action)=> (action.type === C.ADD_DAY) ?
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
	switch(action.payload){
		case C.ADD_DAY:
			return [...state,skiDay(null,action.payload)];
		default:
			return state;
	}
	
};
