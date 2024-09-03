import { fetcher } from ".";
import { Correction } from "../types";

export const postCorrection = async (correction: Omit<Correction, "id">) => {
  console.log("correction", correction);
  return await fetcher(`/Correction`, "post", correction);
};

export const putCorrection = async (
  correction: Pick<Correction, "id" | "comment" | "correctedText">
) => {
  fetcher(`/Correction/${correction.id}`, "put", correction);
};

export const deleteCorrection = async (id: number) => {
  fetcher(`/Correction/${id}`, "delete");
};
