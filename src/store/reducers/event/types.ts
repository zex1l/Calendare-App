import { IEvent } from "../../../models/IEvent";

export interface EventState {
    events : IEvent[]
}


export enum EventActionEnum  {
    SET_EVENT = "SET_EVENT"
}

export interface SetEventAction {
    type: EventActionEnum.SET_EVENT
    payload: IEvent[]
}

export type EventAction = SetEventAction