import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cardSlice';
  import { ToastContainer, toast } from 'react-toastify';




function Card({name,image,id,price,type}) {
    let dispatch=useDispatch()
    return (
        <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg 
        hover:border-2 border-blue-300 cursor-pointer">
            {/* image */}
            <div className="w-[100%] h-[60%] overflow-hidden ">
                <img src={image} className="object-cover" alt="" />
            </div>

            <div className=" text-2xl font-bold">
                {name}

            </div>

            <div className="w-full flex justify-between items-center">
                <div className="text-blue-500 font-bold text-lg">
                    {price}

                </div>
                <div className="flex items-center font-bold text-blue-500 gap-2">
                    {type==="veg"?<LuLeafyGreen />: <GiChickenOven/>}
                    <span>{type}</span>

                </div>

            </div>
                <button className="w-full p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-300 transition-all"
                 onClick={()=> {dispatch(AddItem({id:id, name: name, price:price, image:image, qty:1}))
                 toast.success("Item Added")}
                 
                 }> Add to Cart</button>


        </div>
    )
}

export default Card