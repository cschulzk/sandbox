import type { DemoData } from "@/types/demoData";
import { flexRender, type Table } from "@tanstack/react-table";

const TableBody = ({table}: {table: Table<DemoData>}) => {
  return (
    <tbody>
      {table.getRowModel().rows.map(row => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => {
              return (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
};

export default TableBody;
