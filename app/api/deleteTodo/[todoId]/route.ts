
import { db } from "@/app/page";
import axios from "axios";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: any) {
  const { params } = context;
  const { todoId } = params;

  try {
  const { data } = await axios.delete(`${db}/api/todos/${todoId}`);
  return NextResponse.json({
    data: data,
    todoData: "Your todo deleted",
  });
} catch (er: any) {
  return NextResponse.json(
    {
      error: true,
      message: "An Error in delete route.ts",
    },
    {
      status: 500, // Set an appropriate status code
    }
  );
}

}
