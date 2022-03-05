import React from 'react';

var TodoStateContext = React.createContext();
var TodoDispatchContext = React.createContext();


function TodoReducer(state, action) {
    switch (action.type) {
        case "SET_TODO_TEXT":
            return { ...state, TodoText: action.payload };
        case "SET_TODO_List":
            return { ...state, TodoList: action.payload };
        default: {
            throw new Error('Unhandled action type:');
        }
    }
}

function TodoProvider({children}){
    var [state , dispatch] = React.useReducer(TodoReducer , {
        TodoText: '',
        TodoList: [111,222,333]
    });

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

function useTodoState(){
    var context = React.useContext(TodoStateContext)
    if(context === undefined){
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

function useTodoDispatch(){
    var context = React.useContext(TodoDispatchContext)
    if(context === undefined){
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

export {TodoProvider , useTodoState , useTodoDispatch , setTodoText , setTodoList}
// ########################################

function setTodoText(dispatch , twittText) {
    dispatch({
      type: "SET_TODO_TEXT",
      payload: twittText
    });
  }
  
  function setTodoList(dispatch , list) {
    dispatch({
      type: "SET_TODO_List",
      payload: list
    });
  }
