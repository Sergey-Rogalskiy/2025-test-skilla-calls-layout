import { RandomMarkRenderer } from "./RandomMarkRenderer";

import IncomingIcon from "../assets/incoming.svg";
import OutgoingIcon from "../assets/outgoing.svg";
import MissedIcon from "../assets/missed.svg";
import OutmissedIcon from "../assets/outmissed.svg";

import type { FC } from "react";
import type { CallType } from "../types/types";

type ValueRendererPropsType = {
  item: CallType;
  header: string;
  record: undefined;
  showRecord: boolean;
};

export const ValueRenderer: FC<ValueRendererPropsType> = ({
  item,
  header,
  record,
  showRecord,
}) => {
  if (header === "partner_data") {
    return <td>{item[header]["name"]}</td>;
  }

  if (header === "in_out") {
    let icon = null;
    switch (
      (item[header] === 0 ? "In" : "Out") +
      (item["status"] === "Дозвонился" ? "+" : "-")
    ) {
      case "In+":
        icon = IncomingIcon;
        break;
      case "In-":
        icon = MissedIcon;
        break;
      case "Out+":
        icon = OutgoingIcon;
        break;
      case "Out-":
        icon = OutmissedIcon;
        break;
      default:
        break;
    }
    return <td>{icon && <img src={icon} alt={"icon"} />}</td>;
  }
  if (header === "person_avatar" && item[header] !== "") {
    return (
      <td>
        <img src={item[header]} alt="person_avatar" />
      </td>
    );
  }
  if (header === "duration") {
    return (
      <td style={{ textAlign: "right", position: "relative" }}>
        {item["record"] !== "" && (
          <figure style={{ visibility: !showRecord ? "hidden" : "visible" }}>
            <audio
              controlsList="nofullscreen noremoteplayback noplaybackrate"
              controls
              src={record}
            ></audio>
          </figure>
        )}

        <span
          style={{
            visibility: showRecord ? "hidden" : "visible",
            position: "absolute",
            top: "1.5rem",
            right: "1rem",
          }}
        >
          {/* {item["duration"]} */}
          {item["record"] !== "" &&
            `${~~(item["time"] / 60)}:${
              9 >= item["time"] - ~~(item["time"] / 60) * 60 ? "0" : ""
            }${item["time"] - ~~(item["time"] / 60) * 60}`}
        </span>
      </td>
    );
  }
  if (header === "random") {
    return <td>{RandomMarkRenderer()({})}</td>;
  }
  if (header === "source") {
    return <td style={{ color: "inherit" }}>{item[header]}</td>;
  }
  if (header === "date") {
    const fullTimeArray = item[header].split(" ")[1].split(":");
    return (
      <td>
        {fullTimeArray[0]}:{fullTimeArray[1]}
      </td>
    );
  }
  return null;
};
