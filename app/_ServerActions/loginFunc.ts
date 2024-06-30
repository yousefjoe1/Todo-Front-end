"use server";
import axios from "axios";
import { cookies } from "next/headers";

interface ErrorResponse {
  message: string; // Define the error response structure
}

interface UserInfo {
  email: string;
  password: string;
}

const loginFunc = async (data: UserInfo): Promise<any | ErrorResponse> => {
  let cookie = cookies();

  try {
    const resp = await axios.post(`http://localhost:5000/api/auth/login`, data);
    cookie.set('todoUsertk',resp.data.access_token)
    return { data: resp.data, status: true };
  } catch (er: any) {
    console.log(er?.response?.data, "err in login.ts");
    return { er: `Error create`, isError: true,message: er.response.data.message };
  }
};

export default loginFunc;
