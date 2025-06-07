import { ObjectId } from "mongodb";

import WishesModel from "@inv/server/models/wishes";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: { id: string };
}

export async function DELETE(_: NextRequest, context: any) {
  const { id } = await (context as Context).params;
  const wishId = new ObjectId(id);
  const wishes = await WishesModel();

  await wishes.deleteOne({ _id: wishId });

  return NextResponse.json({ status: 204 });
}
