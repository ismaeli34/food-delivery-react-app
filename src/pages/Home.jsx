import React, { useState } from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Categories from '../Categories'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { useContext } from 'react'
import { ImCross } from "react-icons/im";
import OrderCard from '../components/OrderCard'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';



function Home() {
  let { Cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }
  }

  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);
  console.log(subtotal);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {
          Categories.map((item) => {
            return <div className="w-[150px] h-[150px]
             bg-white flex flex-col 
             items-start gap-5 p-8 justify-start
             text-gray-600 rounded-lg shadow-xl hover:bg-blue-200
             cursor-pointer transition-all duration-200
             text-[20px] " onClick={() => filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          })
        }

      </div> : null
      }

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">

        {Cate.length > 1 ? Cate.map((item) => (
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )): <div className="text-2xl text-center text-blue-500 font-semibold pt-5">No Dish Found</div>}
     
      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white 
        shadow-xl p-6 flex flex-col items-center overflow-auto  duration-500 transition-all 
        ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-blue-500 text-[18px] font-semibold">Order Items</span>
          <ImCross className="text-blue-500 text-[18px] font-semibold w-[20px] h-[20px] 
          cursor-pointer hover:text-blue-300"
            onClick={() => setShowCart(false)} />
        </header>
        {items.length > 0 ? <>


          <div className="w-full mt-9 flex flex-col gap-8">
            {items?.map((item) => (
              <OrderCard name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty} />
            ))}
          </div>

          <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col border-b-2  gap-4 p-8">
            <div className="w-full flex justify-between  gap-2">
              <span className="text-md text-gray-600 font-semibold">Subtotal</span>
              <span className="text-md text-blue-400">{subtotal}</span>
            </div>

            <div className="w-full flex justify-between  gap-2">
              <span className="text-md text-gray-600 font-semibold">Delivery Fee</span>
              <span className="text-md text-blue-400">{deliveryFee}</span>
            </div>
            <div className="w-full flex justify-between  gap-2">
              <span className="text-md text-gray-600 font-semibold">Taxes</span>
              <span className="text-md text-blue-400">{taxes}</span>
            </div>
          </div>
          <div className="w-full flex justify-between  gap-2 items-center p-9">
            <span className="text-md text-gray-600 font-semibold">Total</span>
            <span className="text-md text-blue-400">Rs {total} </span>
          </div>
          <button className="w-[80%] p-4 rounded-lg bg-blue-500
           text-white hover:bg-blue-300 transition-all" onClick={()=>{
            toast.success("Order Placed")
           }}>Place Order</button>
        </> : <div className="text-center text-2xl text-blue-500 font-semibold pt-5">

          Empty Cart
        </div>}

      </div>

    </div>
  )
}

export default Home