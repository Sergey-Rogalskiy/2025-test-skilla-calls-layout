import { BadMark, ExcelentMark, GoodMark, NoUsageMark } from "../styles";
import type { FC } from "react";

export const RandomMarkRenderer = () => {
  return items[~~(Object.keys(items).length * Math.random()) | 0];
};

const Good: FC = () => {
  return <GoodMark>Хорошо</GoodMark>;
};
const Excelent: FC = () => {
  return <ExcelentMark>Отлично</ExcelentMark>;
};
const Bad: FC = () => {
  return <BadMark>Плохо</BadMark>;
};
const Empty: FC = () => {
  return <div></div>;
};
const NoUsage: FC = () => {
  return <NoUsageMark>Скрипт не использован</NoUsageMark>;
};

const items: { [key: number]: FC } = {
  0: Good,
  1: Excelent,
  2: Bad,
  3: Empty,
  4: NoUsage,
};
