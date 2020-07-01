class State{
    constructor(){
        this._state = 'invalide';
        this._oldState = this._state;
        this._register = {};
    }
    setState(state){
        if (state == this._state){
            return;
        }
        if (this._register[state]){
            
            let handlerList = this._register[state];
            for (let i = 0 ; i < handlerList.length ; i ++){
                let args = [];
                for (let j = 1 ; j < arguments.length ; j ++){
                    args.push(arguments[j]);
                }

                let handler = handlerList[i];
                handler.call(this, args);
            }
        }
        this._oldState = this._state;
        this._state = state;
        
    }
    addState(state, cb){
        if (this._register[state]){
            this._register[state].push(cb)
        }else{
            this._register[state] = [cb];
        }
    }
    getState(state){
        if (state && state === this._state){
            return true;
        }
        return this._state;
    }
    getOldState(){
        return this._oldState;
    }
    setOldState(state){
        this._state = state;
    }
}
export default State;