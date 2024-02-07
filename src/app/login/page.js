"use client"
import { useState } from "react"
import Header from "../components/header"
import './style.css'
import { loginUser } from "../services/postData"
import { useRouter } from "next/navigation"

const Login =()=>{
   const router = useRouter()
   const [username,setUsername] = useState();
   const [password,setPassword]= useState();

   const handleSubmit = async(e)=>{
      e.preventDefault();
       console.log("clicked")
       const userDate = {
         username,password
       }

       try {
          const responseData = await loginUser(userDate)
          if(responseData.success){
             router.push('/welcome')
          }
          
       } catch (error) {
         console.log(error)
       }


       
   }

   return (
      <div>
        <Header heading={"This is Login Page"}
          to={"go to Home"}
          destRoute={'/'}
        />
    
         <div className="grid grid-cols-12 justify-center">
         
         <div className="col-span-6  col-start-5 p-5 ">
             <form  onSubmit={handleSubmit}>
              <h3 className="mx-1 my-2">Login</h3>
             <input
               type="text"
               placeholder="username..."
               name="username"
               className="input-class"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
               />
               <br/>
               <input
                type="password"
                autoComplete="false"
                name="password"
                placeholder="password..."
                className="input-class"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
               />
               <br/>
               <button type="submit"
                className="bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-1 px-2 border
                  border-blue-700 rounded  btn-class"
    
                >submit</button>
         
         </form>

         </div>
         </div>
      </div>
   )
}
export default Login