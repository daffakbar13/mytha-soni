import InstanceAxios from "@inv/configs/axios";
import createQuery from "@inv/lib/helpers/createQuery";

import UsersDto from "./users.dto";

namespace UsersService {
  const baseURL = "api/users";
  const service = InstanceAxios({ baseURL });

  export async function GetBride() {
    return service.get<null, { cpp: UsersDto.User; cpw: UsersDto.User }>(
      "/bride"
    );
  }

  GetBride.useQuery = createQuery(GetBride);
}

export default UsersService;
