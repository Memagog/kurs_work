import {makeAutoObservable} from 'mobx'
export default class resumeStore {
    constructor(){
        this._resume=[]
        makeAutoObservable(this)
    }
    setResume(resume){
        this._resume = resume
    }
    get isResume(){
        return this._resume
    }
};
