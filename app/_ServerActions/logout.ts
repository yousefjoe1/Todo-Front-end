"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface ErrorResponse {
  message: string; // Define the error response structure
}


const logout = async (): Promise<any | ErrorResponse> => {
  let cookie = cookies();
  cookie.delete('todoUsertk')
  revalidatePath('/')
  return { data: 'loged out', status: true };
};

export default logout;
