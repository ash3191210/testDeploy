import {connectDb} from "@/app/dbConfig/dbConnect"
// import { User } from "@/app/models/usermodel"
import { User } from "@/app/models/usermodel";
import { NextResponse } from "next/server";


export async  function GET(request){
  try {
     const dbResponse = await connectDb();
     return NextResponse.json("aniket sharma is trying")


  } catch (error) {
     console.log(error)
      throw new Error("something wrong in Get route")
  }
}

export async function POST(request){
     const userData = await request.json();
     try {
         const dbResponse = await connectDb();
        
         const newUser = await User.create({
          username:userData.username,
          password:userData.password
        })
        return NextResponse.json({
           success:true,
           msg:"yes it is created"
        })
     NextResponse.redirect(new URL('/welcome', request.url))
     } catch (error) {
      console.log(error)
        throw new Error("something wrong in user creaetion ")
     }
}

