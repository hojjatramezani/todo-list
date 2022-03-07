import React from 'react';

var TodoStateContext = React.createContext();
var TodoDispatchContext = React.createContext();


function TodoReducer(state, action) {
    switch (action.type) {
        case "SET_DONE_TASK_COUNT":
            return { ...state, DoneTasksCount: action.payload };
        case "SET_TODO_List":
            return { ...state, TodoList: action.payload };
        case "SET_TODO_List_DELETED":
            return { ...state, TodoListDeleted: [...state.TodoListDeleted , action.payload]  };
        default: {
            throw new Error('Unhandled action type:');
        }
    }
}

function TodoProvider({ children }) {
    var [state, dispatch] = React.useReducer(TodoReducer, {
        // TodoText: '',
        DoneTasksCount: 0,
        TodoList: [],
        TodoListDeleted: []
    });

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

function useTodoState() {
    var context = React.useContext(TodoStateContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

function useTodoDispatch() {
    var context = React.useContext(TodoDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

export { TodoProvider, useTodoState, useTodoDispatch, setDoneTasksCount, setTodoList , setTodoListDeleted };
// ########################################

function setDoneTasksCount(dispatch, num) {
    dispatch({
        type: "SET_DONE_TASK_COUNT",
        payload: num
    });
}

function setTodoList(dispatch, list) {
    dispatch({
        type: "SET_TODO_List",
        payload: list
    });
}

function setTodoListDeleted(dispatch, list) {
    dispatch({
        type: "SET_TODO_List_DELETED",
        payload: list
    });
}
