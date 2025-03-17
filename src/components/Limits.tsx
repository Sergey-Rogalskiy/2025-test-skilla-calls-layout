import Select from "react-select";
import { useEffect } from "react";
import { useAtomState } from "@zedux/react";
import { limitAtom, dateStartAtom, dateEndAtom } from "../zedux/atoms";

import { mapLimit, optionsLimits } from "./constants";

import { Button, FlexContainer } from "../styles";
import CalendarIcon from "../assets/calendar.svg";

import type { IsMulti, OptionType } from "../types/types";
import type { StylesConfig } from "react-select";

const customStyles: StylesConfig<OptionType, IsMulti> = {
  control: (provided) => ({
    ...provided,
    border: "none",
    height: ".5rem",
    color: "#005FF8",
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:focus": {
      border: "none",
    },
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#005FF8",
  }),
  container: (base) => ({
    ...base,
    display: "inline-block",
    width: 100,
    margin: "0 0 0 1rem",
    minHeight: ".1rem",
    color: "#005FF8",
  }),
  valueContainer: (base) => ({
    ...base,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: "none",
  }),
  option: (base) => ({
    ...base,
    cursor: "pointer",
  }),
};

export const Limits = () => {
  const [limit, setLimit] = useAtomState(limitAtom);
  const setDateStart = useAtomState(dateStartAtom);
  const setDateEnd = useAtomState(dateEndAtom);

  useEffect(() => ProcessDates());

  const onChange = (selected: OptionType) => {
    setLimit(selected);
    ProcessDates();
  };
  const RollLimit = (dir: number) => {
    setLimit((prevLimit) => {
      const newLimit = prevLimit.value + dir;
      return optionsLimits[newLimit < 0 ? 4 : newLimit > 4 ? 0 : newLimit];
    });
    ProcessDates();
  };

  const ProcessDates = () => {
    let newDate = new Date();
    setDateEnd[1](newDate.toISOString().split("T")[0]);

    newDate.setDate(newDate.getDate() - mapLimit[limit.value]);
    setDateStart[1](newDate.toISOString().split("T")[0]);
  };
  return (
    <FlexContainer>
      <Button onClick={() => RollLimit(-1)}>{"<"}</Button>
      <div style={{ margin: "0 1rem" }}>
        <img src={CalendarIcon} alt="oops" />

        <Select
          isSearchable={false}
          isClearable={false}
          defaultValue={optionsLimits[0]}
          options={optionsLimits}
          styles={customStyles}
          value={limit}
          onChange={(e) => onChange(e || optionsLimits[0])}
        />
      </div>
      <Button onClick={() => RollLimit(1)}>{">"}</Button>
    </FlexContainer>
  );
};
