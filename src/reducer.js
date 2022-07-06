import { createContext } from 'react';

export const initialState = []

export function reducer(state, action) {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    text: action.payloads.text,
                    completed: true
                }
            ]
        
        default:
            return state;
    }
}

export function AddTodoAction(text) {
    return { type: 'ADD_TODO', payloads: { text } }
}

export const TodoContext = createContext();

export function TodoContextProvider({ children, value }) {
    if(!value.dispatch) {
        throw Error('Not Use Todo Provider in App !');
    }

    return (
        <TodoContext.Provider value={value}> { children } </TodoContext.Provider>
    )
}
