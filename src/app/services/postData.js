import { httpAxios } from "../dbConfig/axiosConfig";

export const loginUser = async({username,password})=>{
    try {
        const respones = await httpAxios.post('/api/first',{
            username,password
        }).then((res)=>res.data)

        return respones;
    } catch (error) {
        console.log(error)
        throw new Error("something wrong in sending data")
    }
}

