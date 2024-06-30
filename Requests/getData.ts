"use server";
import axios from "axios";

const getData = async (api: string) => {
  let response = { data:  [] || {}, status: false , err: '' };
  try {
    const {data} = await axios.get(`http://localhost:3000/api/${api}`);
      response = { data: data.data.result, status: true,err: '' };
  } catch (er:any) {
    response = { data: [] || {}, status: false , err: er.response.data.message };
  }
  return response
};

export default getData;