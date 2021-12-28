import {Response} from "@/models/Response";
import {get} from "@/api/http";
import {AllUUIDResponse} from "@/models/AllUUIDResponse";

export async function getAllOrderOverviews(): Promise<Response<AllUUIDResponse>>{
    return get<AllUUIDResponse>("/order/all");
}
