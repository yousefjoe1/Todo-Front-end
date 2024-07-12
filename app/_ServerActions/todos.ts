"use server";
import axios from "axios";
import { cookies } from "next/headers";

interface ErrorResponse {
  message: string; // Define the error response structure
}


const todos = async (api:string): Promise<any | ErrorResponse> => {
  let cookie = cookies().get('todoUsertk')?.value;

  if(!cookie){
    return { data: [], status: true };
  }

  try {
    const resp = await axios.get(`http://localhost:5000/api/${api}`,{
      headers: {
        Authorization: 'Bearer ' + cookie
      }
    });
    
    return { data: resp.data, status: true };
  } catch (er: any) {
    return { er: `Error ${er?.response?.data.msg}`, isError: true,data: {current_user: ''} };
  }
};

export default todos;