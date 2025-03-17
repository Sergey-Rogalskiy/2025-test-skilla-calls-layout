import { atom } from "@zedux/react";
import { optionsFilters, optionsLimits } from "../components/constants";

export const filtersAtom = atom("filters", optionsFilters[0]);
export const limitAtom = atom("limit", optionsLimits[0]);
export const dateStartAtom = atom(
  "dateStart",
  new Date(Date.now()).toISOString().split("T")[0]
);
export const dateEndAtom = atom(
  "dateEnd",
  new Date(Date.now()).toISOString().split("T")[0]
);
