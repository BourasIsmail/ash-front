import { SideBar } from "../components/SideBar";
import { BreadCrumb } from "../components/ui/BreadCrumb";
import { DataTable } from "../components/ui/data-table";
import { Association, associations } from "../data/Association";
import { columns } from "./columns";

async function getData(): Promise<Association[]> {
  // Fetch data from your API here.
  return associations;
}

export default async function () {
  const data = await getData();

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">الجمعيات</h1>
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
}
