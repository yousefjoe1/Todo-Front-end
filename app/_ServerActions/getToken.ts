"use server";
import axios from "axios";
import { cookies } from "next/headers";

interface ErrorResponse {
  message: string; // Define the error response structure
}


const getToken = async (): Promise<any | ErrorResponse> => {
  let cookie = cookies();

  try {
    const resp = await axios.get(`http://localhost:5000/api/auth/check-user`,{
        headers:{
            Authorization: 'Bearer '+ cookie.get('todoUsertk')?.value
        }
    });
    return { data: resp.data, status: true };
  } catch (er: any) {
    console.log(er?.response?.data, "err in gettoken.ts");
    return { er: `Error ${er?.response?.data.msg}`, isError: true,data: {current_user: ''} };
  }
};

export default getToken;
