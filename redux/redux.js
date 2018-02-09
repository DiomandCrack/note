export const createStore = (reducer) => {
    let currentState = {};
    let currentListeners = [];
 
    const getState=()=>{
        return currentState
    }

    const subscribe=(listener)=>{
        currentListners.push(listener)
    }

    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        currentListeners.forEach(item=>item() )
        return action
    }

    dispatch({type:'@@INIT/REDUX '})
    return {getState,subscribe,dispatch}
}