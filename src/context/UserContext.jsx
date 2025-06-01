import React from 'react'
import { useState } from "react";
import { food_items } from '../food';

export const dataContext = React.createContext()

function UserContext({ children }) {
    let [Cate,setCate] = useState(food_items)
    let [input, setInput] = useState("")
    let [showCart,setShowCart]=useState(false)
    let data = {
        input,
        setInput,
        Cate,
        setCate,
        showCart,
        setShowCart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>


        </div>
    )
}

export default UserContext