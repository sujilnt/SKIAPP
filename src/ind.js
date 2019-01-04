import C from "./constants.js";
import {allskyDays} from "./store/reducers.js";

const state = [{
    "resort": "Kirkwood",
	"date": "2016-12-14",
	"powder": true,
	"backcountry": false
	},{
      			"resort": "Boreal",
      			"date": "2016-12-19",
      			"powder": true,
      			"backcountry": true
      		}];
const action= {
    type:C.REMOVE_DAY,
    payload: {
            "resort": "Boreal",
            "date": "2016-12-19",
            "powder": true,
            "backcountry": true
    }
};
const nextState = allskyDays(state,action);
console.log(`
  intial goal: ${state}
  action: ${JSON.stringify(action)}
  new goal : ${nextState}

  `)
