"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
  
interface ErrorResponse {
  message: string; // Define the error response structure
}

interface TodoItem {
    title: string;
    details: string;
    done:boolean
}

const update = async (id:string, data: TodoItem): Promise<any | ErrorResponse>  => {

  try {
    const resp = await axios.put(`http://localhost:3000/api/update/${id}`,data);
    revalidatePath('/')
    return {data:resp.data,status: true}
  } catch (er:any) {
    console.log(er.response.data,'err in udpate.ts');
    
    return {er: `Error udpate`,isError:true}
  }
};

export default update;