import { EVENTS_LIST, EMPLOYERS, EVENTSINFO, HOME_ROUTES, LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE } from "../../utils/config-routs"
import EmployersEvent from "../../Pages/Employers/EmployersEvent";
import EventsConteiner from '../../Pages/Events/EventsConteiner';
import Home from "../../Pages/Home/Home";
import Login from "../Login";
import Register from "../Register";
import EventInfo from "../../Pages/Events/EventInfo";
import Profile from "../../Pages/User/Profile";
export const authRoutes = [
    {
        path: EMPLOYERS,
        Component: EmployersEvent,
    },
    
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Register,
    }, 
    {
        path: HOME_ROUTES,
        Component: Home,
    },
    {
        path: EVENTS_LIST,
        Component: EventsConteiner
    },
    {
        path: EVENTSINFO,
        Component: EventInfo,
    },
    {
        path: PROFILE,
        Component: Profile
    }
   
]

