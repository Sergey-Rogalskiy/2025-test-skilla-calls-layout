import { useState } from "react";
import { ValueRenderer } from "./ValueRenderer";

import { headers } from "../cofiguration/config";
import { Trow } from "../styles";

import type { FC } from "react";
import type { CallType } from "../types/types";

type RowRendererPropsType = { item: CallType; headers: typeof headers };
export const RowRenderer: FC<RowRendererPropsType> = ({ item, headers }) => {
  const [showRecord, setShowRecord] = useState<boolean>(false);

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
          record={undefined}
          showRecord={showRecord}
        />
      ))}
    </Trow>
  );
};
