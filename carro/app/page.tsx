import Link from "next/link";

export default function Home() {
  return (

    <main className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold ">BrumBrum</h1>

      <p className="mt-2">
        Ultimate Website to Learn
      </p>

      <p className="mt-4">
        Get started with{" "}
        <Link href="/pagina1" className="text-blue-500 underline">
          Motors
        </Link>
        ,{" "}
        <Link href="/pagina2" className="text-blue-500 underline">
          Suspensions
        </Link>
        ,{" "}
        <Link href="/pagina3" className="text-blue-500 underline">
          Cars and BodyKits
        </Link>
        .
      </p>
    </main>
  );
}