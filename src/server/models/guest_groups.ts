import database from "@inv/configs/database";

export default async function GuestGroupsModel() {
  const db = await database();
  return db.collection("guest_groups");
}
