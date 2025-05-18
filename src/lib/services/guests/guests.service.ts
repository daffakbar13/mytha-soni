import InstanceAxios from "@inv/configs/axios";
import createMutation from "@inv/lib/helpers/createMutation";
import createQuery from "@inv/lib/helpers/createQuery";

import GuestsDto from "./guests.dto";

namespace GuestsService {
  const baseURL = "api/guests";
  const service = InstanceAxios({ baseURL });

  export async function GetGuests(groupId: string) {
    return service.get<null, GuestsDto.Guest[]>("", { params: { groupId } });
  }

  GetGuests.useQuery = createQuery(GetGuests, { enabled: false });

  export async function GetGuestDetail(name: string) {
    return service.get<null, GuestsDto.Guest>(`/${name}`);
  }

  GetGuestDetail.useQuery = createQuery(GetGuestDetail);

  export async function CreateGuest(payload: GuestsDto.CreateGuest) {
    return service.post<null>("/", payload);
  }

  CreateGuest.useMutation = createMutation(CreateGuest);

  export async function UpdateGuest(
    id: string,
    payload: Partial<GuestsDto.CreateGuest>
  ) {
    return service.put<null>(`/${id}`, payload);
  }

  UpdateGuest.useMutation = createMutation(UpdateGuest);

  export async function DeleteGuest(id: string) {
    return service.delete<null>(`/${id}`);
  }

  DeleteGuest.useMutation = createMutation(DeleteGuest);
}

export default GuestsService;
