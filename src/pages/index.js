import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})

export const List = Loadable({
    loader: _=> import("./list"),
    loading: Loading
})
export const Detail = Loadable({
    loader: _=> import("./detail"),
    loading: Loading
})

export const Doctor = Loadable({
    loader: () => import("./doctor"),
    loading: Loading
})
export const Sort = Loadable({
    loader: () => import("./sort"),
    loading: Loading
})
export const Cart = Loadable({
    loader: () => import("./cart"),
    loading: Loading
})

export const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

export const Ticket = Loadable({
    loader:_=> import("./ticket"),
    loading: Loading
})

export const Activity = Loadable({
    loader:_=> import("./activity"),
    loading:Loading
})

export const Seacrh = Loadable({
    loader:_=> import("./search"),
    loading:Loading
})

export const ticketList = Loadable({
    loader:_=> import("./ticketlist"),
    loading:Loading
})