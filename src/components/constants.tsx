import type { OptionType } from "../types/types";

export const optionsFilters: OptionType[] = [
  { value: 0, label: "Все типы" },
  { value: 1, label: "Входящие" },
  { value: 2, label: "Исходящие" },
];

export const mapLimit: { [key: number]: number } = {
  0: 3,
  1: 7,
  2: 30,
  3: 365,
  4: 700,
};
export const optionsLimits: OptionType[] = [
  { value: 0, label: "3 дня" },
  { value: 1, label: "Неделя" },
  { value: 2, label: "Месяц" },
  { value: 3, label: "Год" },
  { value: 4, label: "Укажите дату" },
];
