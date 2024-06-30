"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

const deleteTodo = async (id:string): Promise<any | ErrorResponse>  => {

  try {
    const resp = await axios.delete(`http://localhost:3000/api/deleteTodo/${id}`);
    revalidatePath('/')
    return {data:resp.data,status: true}
  } catch (er:any) {
    console.log(er.response.data,'err in delete.ts');
    
    return {er: `Error delete`,isError:true}
  }
};

export default deleteTodo;