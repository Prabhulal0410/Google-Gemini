import { createContext } from "react";

export const Context = createContext()

const ContextProvider = (props) => {

    const onSent = async (propmt) => {
        await createChat(propmt)
    }
    onSent("what is react?")


    const contextValue = {

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;