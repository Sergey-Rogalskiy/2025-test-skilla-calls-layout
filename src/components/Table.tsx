import { useEffect, useState } from "react";
import { useAtomValue } from "@zedux/react";
import { dateEndAtom, dateStartAtom, filtersAtom } from "../zedux/atoms";

import { RowRenderer } from "./RowRenderer";
import { useGetUniversal } from "../api/api";
import { headers } from "../cofiguration/config";

import { TableStyle, Thead } from "../styles";
import ArrowUpIcon from "../assets/arrow-up.svg";
import ArrowDownIcon from "../assets/arrow-down.svg";

import type { CallType, ParamsType } from "../types/types";

export const Table = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<CallType> | null>();

  const [sortField, setSortField] = useState("date");
  const [order, setOrder] = useState("asc");

  const filter = useAtomValue(filtersAtom);
  const startDate = useAtomValue(dateStartAtom);
  const endDate = useAtomValue(dateEndAtom);

  const [totalRows, setTotalRows] = useState<number>(5);
  const [itemsOnPage, setItemsOnPage] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getCalls = useGetUniversal();
  useEffect(() => {
    const params: ParamsType = {
      date_start: startDate.toString(),
      date_end: endDate.toString(),
      limit: itemsOnPage,
      sort_by: sortField,
      order,
      offset: currentPage * itemsOnPage,
    };
    if (filter.value > 0) params["in_out"] = filter.value - 1;
    else delete params.in_out;

    setIsLoading(true);
    getCalls(params)
      .then((result) => {
        setData(result?.data?.results);
        setTotalRows(result?.data?.total_rows);
      })
      .catch(() => setData(null))
      .finally(() => setIsLoading(false));
  }, [
    getCalls,
    filter,
    endDate,
    startDate,
    sortField,
    order,
    itemsOnPage,
    currentPage,
  ]);

  const onSort = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setOrder(sortOrder);
    setSortField(accessor);
  };
  return (
    <>
      <TableStyle>
        <Thead>
          <tr>
            {headers.map(({ label, accessor, sortable }) => {
              const arrowIndicator = sortable
                ? sortField === accessor && order === "asc"
                  ? ArrowUpIcon
                  : sortField === accessor && order === "desc"
                  ? ArrowDownIcon
                  : undefined
                : undefined;
              return (
                <th
                  onClick={sortable ? () => onSort(accessor) : undefined}
                  key={accessor}
                  style={{ cursor: sortable ? "pointer" : "default" }}
                >
                  <div style={{}}>
                    {label}
                    {sortable && (
                      <img
                        style={{
                          visibility: arrowIndicator ? "visible" : "hidden",
                        }}
                        src={arrowIndicator}
                        alt="oops"
                        height={24}
                        width={24}
                      />
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </Thead>
        <tbody>
          {data &&
            !isLoading &&
            data?.map((item) => {
              return (
                <RowRenderer key={item?.id} item={item} headers={headers} />
              );
            })}
        </tbody>
      </TableStyle>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          Is loading...
        </div>
      )}
      <div>
        {totalRows} / {itemsOnPage} = {totalRows / itemsOnPage}
      </div>
      <select
        value={itemsOnPage}
        onChange={(e) => setItemsOnPage(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      <select
        value={currentPage}
        onChange={(e) => setCurrentPage(Number(e.target.value))}
      >
        {/* @ts-ignore */}
        {[...Array(~~(totalRows / itemsOnPage) + 1).keys()].map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};
