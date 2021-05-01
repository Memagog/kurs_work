import {makeAutoObservable} from 'mobx'
export default class EventsStore {
    constructor(){
        this._events=[
            {id: 1, title: "EventsTitle", description: "Event DESCRIPTION", author: "author.id" },
            {id: 2, title: "EventsTitle2", description: "Event DESCRIPTION 2", author: "author.id2" },
            {id: 3, title: "EventsTitle", description: "Event DESCRIPTION", author: "author.id3" },
            {id: 4, title: "EventsTitle2", description: "Event DESCRIPTION 2", author: "author.id4" },
            {id: 5, title: "EventsTitle", description: "Event DESCRIPTION", author: "author.id5" },
            {id: 6, title: "EventsTitle2", description: "Event DESCRIPTION 2", author: "author.id6" }
        ]
        makeAutoObservable(this)
    }
    setEvents(events){
        this._events = events
    }
    get isEvents(){
        return this._events
    }
};
