"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

const deleteTodo = async (id:string): Promise<any | ErrorResponse>  => {
  let cookie = cookies().get('todoUsertk')?.value;

  try {
    const resp = await axios.delete(`http://localhost:5000/api/todos/${id}`);
    revalidatePath('/')
    return {data:resp.data,status: true}
  } catch (er:any) {
    console.log(er.response.data,'err in delete.ts');
    return {er: `Error delete`,isError:true}
  }
};

export default deleteTodo;