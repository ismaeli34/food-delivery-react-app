import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";
import { TiThSmallOutline } from "react-icons/ti";
import { MdFoodBank } from "react-icons/md";



export const Categories =[
    {
        id:1,
        name:"All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-blue-600" />

    },
        {
        id:2,
        name:"breakfast",
        icon: <MdFreeBreakfast className="w-[60px] h-[60px] text-blue-600"  />

    },
        {
        id:3,
        name:"soups",
        icon: <LuSoup className="w-[60px] h-[60px] text-blue-600"  />

    },
        {
        id:4,
        name:"pasta",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-blue-600"  />

    },
        {
        id:5,
        name:"main_course",
        icon: <MdFoodBank className="w-[60px] h-[60px] text-blue-600"  />

    },
        {
        id:6,
        name:"pizza",
        icon: <CiPizza className="w-[60px] h-[60px] text-blue-600"  />

    },
        {
        id:7,
        name:"burger",
        icon: <FaHamburger className="w-[60px] h-[60px] text-blue-600"  />

    }
]

export default Categories;