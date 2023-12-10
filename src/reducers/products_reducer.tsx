    import {
        SIDEBAR_OPEN,
        SIDEBAR_CLOSE,
        GET_PRODUCTS_BEGIN,
        GET_PRODUCTS_SUCCESS,
        GET_PRODUCTS_ERROR,
        GET_SINGLE_PRODUCT_BEGIN,
        GET_SINGLE_PRODUCT_SUCCESS,
        GET_SINGLE_PRODUCT_ERROR,
    } from '../actions'
    import {SidebarActions, SidebarState} from '../utils/interfaces'

    const products_reducer = (state: SidebarState, action: SidebarActions) => {
        const {type, payload} = action
        switch (type) {
            case SIDEBAR_OPEN:
                return {...state, value: true}
            case SIDEBAR_CLOSE:
                return {...state, value: false}
            default:
                return state
        }
        
        throw new Error(`No Matching "${action.type}" - action type`)
    }
    
    export default products_reducer
  