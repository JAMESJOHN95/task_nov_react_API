import { commonApi } from "./CommonApi"
import { SERVER_URL } from "./ServerUrl"

export const getalldetailsApi = async ()=> {
    return  await commonApi("GET",`${SERVER_URL}/users`,"")
  }