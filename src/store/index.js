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
import ticket from "./reducers/ticket";
import ticketlist from "./reducers/ticketlist";
import cart from "./reducers/cart";
import login from "./reducers/login";
const reducers = combineReducers({
    home,
    activity,
    doctor,
    search,
    list,
    sort,
    detail,
    ticket,
    ticketlist,
    cart,
    login
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;