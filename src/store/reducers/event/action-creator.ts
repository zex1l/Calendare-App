import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { EventActionEnum, SetEventAction } from "./types";


export const EventActionCreator =  {
    setEvents : (event: IEvent[]) : SetEventAction => ({type: EventActionEnum.SET_EVENT, payload: event }),

    createEvent : (event : IEvent) => async(dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreator.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))

        } catch (error) {
            console.log(error);
            
        }
    },

    fetchEvents : (authorName : string) => async(dispatch: AppDispatch) => {
        const events = localStorage.getItem('events') || '[]'
        const json = JSON.parse(events) as IEvent[]
        const currentEventUser = json.filter(event => event.author === authorName)
        dispatch(EventActionCreator.setEvents(currentEventUser))
    }
}