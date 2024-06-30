
import { db } from "@/app/page";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req:Request,context: any) {

    let {params} = context
    
    try {
      const {data} = await axios.get(`${db}/api/todos/${params}`);
      return NextResponse.json({data: data,todoData: 'Success delete from route'});
    } catch (er: any) {
      return NextResponse.json({ data: er });
    }
    // return NextResponse.json({ data: 'post req' });
  
  }
  