import {makeAutoObservable} from 'mobx'
export default class ParametersStore {
    constructor(){
        this._param=[
            {id: 1, price:"1000", date: "13-12-2000"},
            {id: 2, price:"2000", date: "13-12-2000"},
            {id: 3, price:"3000", date: "13-12-2000"},
            {id: 4, price:"4000", date: "13-12-2000"},         
        ]
        this._selectedParam = {}
        makeAutoObservable(this)
        
    }
    setParam(param){
        this._types = param
    }
    get isParam(){
        return this._param
    }
    setSelectedParam(param){
        this._selectedParam = param
    }
    get selectedParam(){
        return this._selectedParam
    }
};
