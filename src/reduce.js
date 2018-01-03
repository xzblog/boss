const ADD = "加一";
const REMOVE  = "减一";
export function amount(state=10, action){
	switch(action.type){
		case ADD:
			return state + 1
		case REMOVE:
			return state - 1
		default:
			return 10
	}
}

export function addGun(){
	return {type: ADD };
}

export function removeGun(){
	return { type: REMOVE}
}

export function addGunAsync(){
	return dispatch => {
		setTimeout(()=>{
			dispatch(addGun())
		},2000)
	}
}