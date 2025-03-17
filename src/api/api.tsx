import axios from "axios";
import { useCallback } from "react";

import type { AxiosResponse } from "axios";
import { CallResponse, ParamsType } from "../types/types";

export const useGetUniversal = (
  apiEndpoint: string = `https://api.skilla.ru/mango/getList`
) => {
  return useCallback(
    (
      params: ParamsType
    ): Promise<AxiosResponse<CallResponse, CallResponse>> => {
      return axios.post(
        apiEndpoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_BEARER}`,
          },
          params,
        }
      );
    },
    [apiEndpoint]
  );
};
