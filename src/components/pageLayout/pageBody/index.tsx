import DataTable from "./dataTable";

const bodyPositioning = 'flex flex-col h-body w-full justify-center items-center';
const bodyStlying = ''

const PageBody = () => {
  return (
    <div className={`${bodyPositioning} ${bodyStlying}`}>
      <DataTable />
    </div>
  )
};

export default PageBody;
