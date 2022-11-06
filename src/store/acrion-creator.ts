import { AuthActionCreators } from "./reducers/auth/action-creator";
import { EventActionCreator } from "./reducers/event/action-creator";

export const AllActions = {
    ...AuthActionCreators,
    ...EventActionCreator
}