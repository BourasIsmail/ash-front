import { SideBar } from "@/app/components/SideBar";
import { BreadCrumb } from "@/app/components/ui/BreadCrumb";
import { DataTable } from "@/app/components/ui/data-table";
import { Etablissement, etablissements } from "@/app/data/Etablissement";
import { columns } from "./columns";

async function getData(): Promise<Etablissement[]> {
  // Fetch data from your API here.
  return etablissements;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">
          المؤسسات التابعة للجمعية
        </h1>
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
}
