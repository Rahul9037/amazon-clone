import React,{createContext,useContext,useReducer} from 'react';

//create datalayer.
export const StateContext = createContext();

//wrap the app into the data layer.
export const StateProvider = ( {reducer,intialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </StateContext.Provider>
)

//pull the datalyer whereever needed.
export const useStateValue = () => useContext(StateContext);