import {get} from "@/api/http";
import {Response} from "@/models/Response";

export async function getQuote(): Promise<Response<string>>{
    return get<string>("/quote");
}
