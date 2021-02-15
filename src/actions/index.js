export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_TO_VALUE = "SET_MEMORY_TO_VALUE";
export const ADD_TOTAL_TO_MEMORY = "ADD_TOTAL_TO_MEMORY";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({type:CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const setMemoryToValue = () => {
    return ({type:SET_MEMORY_TO_VALUE})
}

export const addTotalToMemory = () => {
    return ({type:ADD_TOTAL_TO_MEMORY})
}

export const memoryClear = () => {
    return ({type:MEMORY_CLEAR})
}