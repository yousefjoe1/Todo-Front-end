
import { db } from "@/app/page";
import axios from "axios";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: any) {
  const { params } = context;
  const { updatetodo } = params;

  let updatedData = await req.json()

  try {
  const { data } = await axios.put(
    `${db}/api/todos/${updatetodo}`,updatedData
  );
  return NextResponse.json({
    data: data,
    todoData: "Your todo updated",
  });
} catch (er: any) {
  return NextResponse.json(
    {
      error: true,
      message: "An Error",
    },
    {
      status: 500, // Set an appropriate status code
    }
  );
}

}
