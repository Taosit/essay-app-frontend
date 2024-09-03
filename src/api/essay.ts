import { fetcher } from ".";
import { Essay } from "../types";

export const postEssay = async (
  essay: Pick<Essay, "question" | "essayText">
) => {
  return await fetcher(`/Essay`, "post", essay);
};

export const deleteEssay = async (id: number) => {
  await fetcher(`/Essay/${id}`, "delete");
};
