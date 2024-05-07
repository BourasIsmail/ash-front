import { MdOutlinePendingActions } from "react-icons/md";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Navbar } from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { formatDate } from "../lib/utils";

export default function Home() {
  type Demande = {
    codeDemande: string;
    etat: string;
    dateDemande: string;
    nomAssociation: string;
  };

  const demande: Demande = {
    codeDemande: "123456",
    etat: "قيد العمل",
    dateDemande: "2021-09-12",
    nomAssociation: "جمعية الخير",
  };

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <main className="w-full py-6 px-16">
          <h1 className="text-2xl">متابعة الطلب</h1>
          <form className="max-w-sm mx-auto">
            <div className="flex flex-row gap-3">
              <div>
                <input
                  type="text"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="رقم الطلب"
                />

                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  في حال فقدان رمز الطلب، يرجى الاتصال بالمنسقية أو المندوبية
                  المعنية .
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="h-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
          <hr className="py-2" />
          {demande && ( // Check if demande is not null
            <div className="w-full m-auto p-4 border rounded-lg bg-gray-100 overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <span>رقم الطلب</span>
                <span className="hidden sm:grid">اسم الجمعية</span>
                <span className="hidden md:grid">تاريخ الطلب</span>
                <span className="sm:text-right text-left">حالة الطلب</span>
              </div>
              <ul>
                <li className="bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                  <div className="flex gap-1">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MdOutlinePendingActions
                        className="text-blue-800"
                        size={20}
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-800 font-bold">
                        {demande.codeDemande}
                      </p>
                    </div>
                  </div>
                  <p className="sm:flex hidden">{demande.nomAssociation}</p>
                  <p className="hidden md:flex">
                    {formatDate(demande.dateDemande)}
                  </p>
                  <p className="text-gray-600 sm:text-right text-left">
                    <span
                      className={
                        demande.etat === "قيد العمل"
                          ? "bg-yellow-200 p-2 rounded-lg"
                          : demande.etat === "موافق عليه"
                          ? "bg-green-200 p-2 rounded-lg"
                          : "bg-red-200 p-2 rounded-lg"
                      }
                    >
                      {demande.etat}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          )}
          {!demande && (
            <div className="w-full m-auto p-4 border rounded-lg bg-gray-100 overflow-y-auto">
              <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <p className="flex items-center">رقم الطلب غير صحيح أو مفقود</p>
              </div>
            </div>
          )}
        </main>
      </MaxWidthWrapper>
    </>
  );
}
