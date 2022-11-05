import { bindActionCreators } from "redux"
import { AllActions } from "../store/acrion-creator"
import { useAppDispatch } from "./useTypedReduxr"


export const useActions = () => {
    const dispatch = useAppDispatch()

    return bindActionCreators(AllActions, dispatch)
}