import { useState } from "react";
import { createContext } from "react";


const Context = createContext({})

// const { Provider } = Context

export const ContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    return (
        <Context.Provider value={{
            counter,
            setCounter
        }} >

            { children }

        </Context.Provider>
    )
}