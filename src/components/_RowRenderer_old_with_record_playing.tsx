// import { TableStyle } from "../styles";

// import { useEffect } from "react";
import { FC, useState } from "react";
import { Trow } from "../styles";
import { ValueRenderer } from "./ValueRenderer";
import { CallType } from "../types/types";
import { headers } from "../cofiguration/config";
// import axios from "axios";

type RowRendererPropsType = { item: CallType; headers: typeof headers };
export const _RowRenderer_old_with_record_playing: FC<RowRendererPropsType> = ({
  item,
  headers,
}) => {
  const [showRecord, setShowRecord] = useState<boolean>(false);
  // const state = useState<any>();
  // useEffect(() => {
  //   const params: {
  //     record: string;
  //     partnership_id: string;
  //   } = {
  //     record: item["record"],
  //     partnership_id: item["partnership_id"],
  //   };

  //   if (item["record"] !== "") {
  //     axios
  //       .post(
  //         `https://api.skilla.ru/mango/getRecord`,
  //         {},
  //         {
  //           headers: {
  //             Authorization: "Bearer testtoken",
  //             "Content-type":
  //               "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
  //             "Content-Transfer-Encoding": "binary",
  //             "Content-Disposition": `filename="record.mp3"`,
  //           },
  //           params,
  //         }
  //       )
  //       .then((result) => {
  //         setData(result?.data);
  //       });
  //   }
  // }, [item]);

  return (
    <Trow
      onClick={() => {
        setShowRecord((e: boolean) => !e);
      }}
    >
      {headers.map(({ accessor }) => (
        <ValueRenderer
          key={accessor}
          item={item}
          header={accessor}
          // record={state[0]}
          record={undefined}
          showRecord={showRecord}
        />
      ))}
    </Trow>
  );
};
