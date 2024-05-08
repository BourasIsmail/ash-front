import { SideBar } from "../components/SideBar";

export default function () {
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Welcome back!
          </p>
        </div>
      </main>
    </>
  );
}
