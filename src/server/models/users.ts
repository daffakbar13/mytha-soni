import database from "@inv/configs/database";

export default async function UsersModel() {
  const db = await database();
  return db.collection("users");
}
