import React from "react";

var TwittStateContext = React.createContext();
var TwittDispatchContext = React.createContext();

function TwittReducer(state, action) {
  switch (action.type) {
    case "SET_TWITT_TEXT":
      return {...state, TwittText: action.payload};
    case "SET_TWITT_List":
      return {...state, TwittList: action.payload};
    case "SET_TWITT_REPLAY":
      return {...state, TwittText: action.payload};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TwittProvider({children}) {
  var [state, dispatch] = React.useReducer(TwittReducer, {
    TwittText: '',
    TwittList: []
  });
  return (
    <TwittStateContext.Provider value={state}>
      <TwittDispatchContext.Provider value={dispatch}>
        {children}
      </TwittDispatchContext.Provider>
    </TwittStateContext.Provider>
  );
}

function useTwittState() {
  var context = React.useContext(TwittStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useTwittDispatch() {
  var context = React.useContext(TwittDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {TwittProvider, useTwittState, useTwittDispatch, setTwittText, setTwittList , setTwittReplay , minusTwitt, multiple2, plusNumber};

// ###########################################################
function setTwittText(dispatch , twittText) {
  dispatch({
    type: "SET_TWITT_TEXT",
    payload: twittText
  });
}

function setTwittList(dispatch , list) {
  dispatch({
    type: "SET_TWITT_List",
    payload: list
  });
}

function setTwittReplay(dispatch , twittText) {
  dispatch({
    type: "SET_TWITT_REPLAY",
    payload: twittText
  });
}

function minusTwitt(dispatch) {
  dispatch({
    type: "DEC",
  });
}

function multiple2(dispatch) {
  dispatch({
    type: "MUL",
  });
}

function plusNumber(dispatch, number) {
  dispatch({
    type: "plusNum",
    payload: number
  });
}
