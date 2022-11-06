import { EventAction, EventActionEnum, EventState } from "./types"


const initialState : EventState = {
    events: []
}

const eventReducer  = (state = initialState, action : EventAction) : EventState => {
    switch(action.type) {

        case EventActionEnum.SET_EVENT:
            return {...state, events: action.payload}

        default: 
            return state
    }
}

export default eventReducer