import { DemoData } from "@/types/demoData";
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

const useColumns = () => {
  return useMemo<ColumnDef<DemoData>[]>(
    () => [
      {
        accessorKey: 'product_name',
        cell: info => info.getValue(),
        header: () => <span>Product Name</span>,
      },
      {
        accessorKey: 'price',
        cell: info => info.getValue(),
        header: () => <span>Price</span>,
      },
      {
        accessorKey: 'quantity',
        cell: info => info.getValue(),
        header: () => <span>Quantity</span>,
      },
      {
        accessorKey: 'order_date',
        cell: info => info.getValue(),
        header: () => <span>Order Date</span>,
      },
    ],
    []
  )};

export default useColumns;
