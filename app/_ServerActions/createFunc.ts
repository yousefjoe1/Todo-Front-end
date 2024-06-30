"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

interface UserInfo {
    name: string;
    email: string;
    password:string
}

const createUser = async (data: UserInfo): Promise<any | ErrorResponse>  => {

  try {
    const resp = await axios.post(`http://localhost:5000/api/auth/register`,data);
    return {data:resp.data,status: true}
  } catch (er:any) {
    console.log(er.response.data,'err in create.ts');
    return {er: `Error create`,isError:true}
  }
};

export default createUser;