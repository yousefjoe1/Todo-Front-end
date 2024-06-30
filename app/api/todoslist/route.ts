
import { db } from "@/app/page";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const {data} = await axios.get(`${db}/api/todos`);
    return NextResponse.json({data: data,todoData: 'Success from route'});
  } catch (er: any) {
    return NextResponse.json({
      error: true,
      message: 'An Error',
    }, {
      status: 500, // Set an appropriate status code
    })
  }
}