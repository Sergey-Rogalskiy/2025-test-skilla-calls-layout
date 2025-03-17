export type OptionType = {
  value: number;
  label: string;
};
export type ParamsType = {
  date_start: string;
  date_end: string;
  limit: number;
  in_out?: number;
  order?: string;
  sort_by?: string;
  offset?: number;
};
export type IsMulti = false;

export type CallResponse = {
  results: Array<CallType>;
  total_rows: number;
};
// export type CallType = { [key: string]: string | number };
export type CallType = {
  value: number;
  label: string;
  abuse: [];
  candidate_id: number;
  candidate_link: string;
  candidate_name: string;
  candidate_vacancy_name: string;
  contact_company: string;
  contact_name: string;
  date: string;
  date_notime: string;
  disconnect_reason: string;
  errors: [];
  from_extension: string;
  from_number: string;
  from_site: number;
  id: number;
  in_out: number;
  is_skilla: number;
  line_name: string;
  line_number: string;
  partner_data: { id: string; name: string; phone: string };
  partnership_id: string;
  person_avatar: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  record: string;
  results: [];
  source: string;
  stages: {
    person_name: string;
    person_surname: string;
    person_mango_phone: string;
    duration: string;
  }[];
  status: string;
  time: number;
  to_extension: string;
  to_number: string;
};
