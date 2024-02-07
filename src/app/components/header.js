import Link from "next/link"
const Header = ({heading,to,destRoute})=>{
    return (
        <div>
           <h1 className=" bg-black
            text-white text-2xl 
             p-4 font-bold
             my-0.5 "> 
              {heading}
           </h1>
  
           <div className="my-3 mx-2">
         <Link href={destRoute}
            className="text-green-800 font-light"
           >{to}</Link>
         </div>
  
        </div>
    )
}

export default Header