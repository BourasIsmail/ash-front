import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-3 relative h-[675px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Ash</h1>
          <p className="text-lg">application web</p>
          <Link href="/demandeForm">
            <button className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded-lg mt-4">
              إرسال طلب لأول مرة
            </button>
          </Link>
          <Link href="/demandeAutre">
            <button className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded-lg mt-4">
              إرسال طلب مرة أخرى
            </button>
          </Link>
          <span className=" border-t m-2 w-3/4" />
          <span className="bg-background px-2 text-muted-foreground text-sm">
            هل أنت مستخدم؟
          </span>
          <button className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded-lg mt-4">
            تسجيل الدخول
          </button>
        </div>
        <div className="relative h-full w-full col-span-2">
          <div className="absolute inset-0 bg-[url('/couverture.jpg')] bg-cover bg-no-repeat m-3" />

          <div className="relative z-20 flex items-center text-lg font-medium"></div>
          <div className="relative z-20 mt-auto"></div>
        </div>
      </main>
    </>
  );
}
