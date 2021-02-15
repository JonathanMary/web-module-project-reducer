# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
* The user presses the 1 button.
* The eventHandler function, in App.js executes.
    -> dispatch(addOne());
* It calls the addOne function first, from actions/index.
    -> dispatch({type:ADD_ONE})
* Then the dispatch function is called. This will activate useReducer.
    -> useReducer(reducer(state, {type:ADD_ONE}))
* This will use the appropriate switch, returning {...state, total: total.state+1} as a new state.

* TotalDisplay shows the total plus 1.
