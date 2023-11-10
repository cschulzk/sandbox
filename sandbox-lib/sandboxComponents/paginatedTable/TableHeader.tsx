import type { DemoData } from "@/types/demoData";
import { flexRender, type Table } from "@tanstack/react-table";

const TableBody = ({table}: {table: Table<DemoData>}) => {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                )}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
};

export default TableBody;
