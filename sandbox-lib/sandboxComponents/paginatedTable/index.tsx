import React, { useMemo, useState } from 'react'
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table'
import useColumns from './UseColumns'
import Pagination from './Pagination'
import TableBody from './TableHeader'
import TableHeader from './TableHeader'
import { QueryData } from '@/types/data'

const PaginatedTable = () => {
  const columns = useColumns();

  const [{ pageIndex, pageSize }, setPagination] =
    useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const dataQuery: QueryData = {data: {
    rows: [],
    pageCount: 0,
  }} // Write a use memo that uses an api request


  const defaultData = useMemo(() => [], [])

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return (
    <div>
      <table>
        {/* Display loading indicators */}
        <TableHeader table={table} />
        <TableBody table={table} />
      </table>
      <Pagination table={table} />
    </div>
    )
}

export default PaginatedTable;
