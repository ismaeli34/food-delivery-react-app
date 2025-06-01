import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import UserContext, { dataContext } from '../context/UserContext';
import {useContext,useEffect} from 'react'
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
    let {input,setInput,Cate,setCate,showCart,setShowCart} = useContext(dataContext);
    useEffect(()=>{
       let newList = food_items.filter((item)=>
            item.food_name.toLowerCase().includes(input))
            setCate(newList)

    },[input])
    let items = useSelector(state=> state.cart)
    console.log(items);

    return (
        <div className="w-full h-[100px]  flex justify-between items-center px-5 md:px-8 ">
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <IoFastFood className="w-[30px] h-[30px] text-blue-500" />
            </div>

            <form onSubmit={(e)=> e.preventDefault()} className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%]">
                <IoSearch className="text-blue-500 w-[20px] h-[20px] " />
                <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Search Items..." className="w-[100%] outline-none text-xl text-[16px] md:text-[20px]" />
            </form>

            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer relative" onClick={()=>{
                    setShowCart(true)
                }}>
                <span className="absolute top-0 right-2 text-blue-500 font-bold text-[18px]" >{items.length}</span>
                <FaShoppingBag  className="w-[30px] h-[30px] text-blue-500" />
            </div>

        </div>

    )
}

export default Nav