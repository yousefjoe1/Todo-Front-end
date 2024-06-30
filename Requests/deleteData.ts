"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

const deleteData = async (api: string): Promise<any | ErrorResponse>  => {

  try {
    const resp = await axios.delete(`http://localhost:5000/api/${api}`);
    revalidatePath('/')
    return {data:resp.data,status: true}
  } catch (er:any) {
    return er
  }
};

export default deleteData;