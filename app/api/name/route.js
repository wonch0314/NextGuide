"use server";

import useMyStore from "@/lib/stores/myStore";
import { revalidatePath } from "next/cache";

export const GET = () => {
  const { name, setName } = useMyStore.getState();
  setName("Mesg from SERVER ACTION");
  revalidatePath("/data-fetching/cache");
  return Response.json("OKAY");
};
