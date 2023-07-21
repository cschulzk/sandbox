import PaginatedTable from "./paginatedTable";
import DataTable from "./paginatedTable";

const bodyPositioning = 'flex flex-col h-body w-full justify-center items-center';
const bodyStlying = ''

const PageBody = () => {
  return (
    <div className={`${bodyPositioning} ${bodyStlying}`}>
      <PaginatedTable />
    </div>
  )
};

export default PageBody;
