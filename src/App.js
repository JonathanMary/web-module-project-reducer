import React, {useReducer} from 'react';
import reducer, { initialState } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addOne, applyNumber, changeOperation, clearDisplay, setMemoryToValue, addTotalToMemory, memoryClear } from './actions'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  /*const addOneEventHandler = () => {
    dispatch(addOne());
  }*/

  const eventHandler = (evt) => {
    dispatch(applyNumber(parseInt(evt.target.textContent)));
  }
  const operationEventHandler = (evt) => {
    console.log(evt.target.textContent)
    dispatch(changeOperation(evt.target.textContent));

  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(setMemoryToValue())} />
              <CalcButton value={"MR"} onClick={() => dispatch(addTotalToMemory())} />
              <CalcButton value={"MC"} onClick={() => dispatch(memoryClear())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={/*addOneEventHandler*/ eventHandler} />
              <CalcButton value={2} onClick={eventHandler} />
              <CalcButton value={3} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler} />
              <CalcButton value={5} onClick={eventHandler} />
              <CalcButton value={6} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler} />
              <CalcButton value={8} onClick={eventHandler} />
              <CalcButton value={9} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operationEventHandler} />
              <CalcButton value={"*"} onClick={operationEventHandler} />
              <CalcButton value={"-"} onClick={operationEventHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
