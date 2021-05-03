import {makeAutoObservable} from 'mobx'
export default class EventsStore {
    constructor(){
        this._events=[]
        makeAutoObservable(this)
    }
    setEvents(events){
        this._events = events
    }
    get isEvents(){
        return this._events
    }
};
