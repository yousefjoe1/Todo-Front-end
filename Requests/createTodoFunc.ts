"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

interface TodoItem {
    title: string;
    details: string
}

const createTodoFunc = async (data: TodoItem): Promise<any | ErrorResponse>  => {
  
  let checkCookie = cookies().get('todoUsertk')

    if(!checkCookie){
      return {"msg":'Your need to login first'}
    }

  try {
    const resp = await axios.post(`http://localhost:5000/api/todos`,data);
    revalidatePath('/')
    return {data:resp.data,status: true}
  } catch (er:any) {
    // console.log(er,'err in createtdfunc.ts');
    
    return {er: `Error`,isError:true}
  }
};

export default createTodoFunc;