import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import activity from "./reducers/activity";
import doctor from "./reducers/doctor";
import search from "./reducers/search";
import list from "./reducers/list";
import sort from "./reducers/sort";
import detail from "./reducers/detail";
import cart from "./reducers/cart"
import cartCommand from "./reducers/cartCommand"
const reducers = combineReducers({
    home,
    activity,
    doctor,
    search,
    list,
    sort,
    detail,
    cart,
    cartCommand
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;