import { createContext } from "react";

const AppContext=createContext();
const AppProvider=({childern})=>{
    return (<AppContext.Provider>{childern}</AppContext.Provider>)
}
export {AppProvider,AppContext};