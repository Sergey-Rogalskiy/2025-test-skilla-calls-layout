import Select from "react-select";
import { useAtomState } from "@zedux/react";
import { filtersAtom } from "../zedux/atoms";

import { optionsFilters } from "./constants";

import type { IsMulti, OptionType } from "../types/types";
import type { StylesConfig } from "react-select";

const customStyles: StylesConfig<OptionType, IsMulti> = {
  control: (provided) => ({
    ...provided,
    border: "none",
    width: "9rem",
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:focus": {
      border: "none",
    },
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
  }),
  container: (base) => ({
    ...base,
    display: "inline-block",
    width: 100,
    margin: "0 0 0 1rem",
    minHeight: ".1rem",
  }),
  valueContainer: (base) => ({
    ...base,
    minHeight: 20,
  }),

  indicatorSeparator: () => ({}),

  option: (base) => ({
    ...base,
    cursor: "pointer",
  }),
};

export const Filters = () => {
  const [filter, setFilter] = useAtomState(filtersAtom);
  return (
    <div>
      <Select
        isSearchable={false}
        isClearable={false}
        defaultValue={optionsFilters[0]}
        options={optionsFilters}
        styles={customStyles}
        value={filter}
        onChange={(e) => setFilter(e || optionsFilters[0])}
      />
    </div>
  );
};
