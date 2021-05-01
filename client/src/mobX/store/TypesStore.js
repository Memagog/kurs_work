import {makeAutoObservable} from 'mobx'
export default class TypesStore {
    constructor(){
        this._types=[
            {id: 1, skills:"Photograph"},
            {id: 2, skills:"Event-Manager" },
            {id: 3, skills:"Sounds Maker" },
            {id: 4, skills:"Light Shaper" },
            {id: 5, skills:"Models" },
            {id: 6, skills:"Sexy Girls" }
        ]
        this._selectedType = {}
        makeAutoObservable(this)
        
    }
    setTypes(types){
        this._types = types
    }
    get isTypes(){
        return this._types
    }
    setSelectedType(type){
        this._selectedType = type
    }
    get selectedType(){
        return this._selectedType
    }
};
