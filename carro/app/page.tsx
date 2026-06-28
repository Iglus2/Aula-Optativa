import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-4xl font-bold">BrumBrum</h1>

      <p className="mt-2">O melhor site para aprender sobre carros</p>

      <p className="mt-2">
        Comece aprendendo sobre{" "}
        <Link href="/motors" className="text-blue-500 underline">
          Motores
        </Link>
        ,{" "}
        <Link href="/rodas" className="text-blue-500 underline">
          Rodas
        </Link>
        , e{" "}
        <Link href="/bodykits" className="text-blue-500 underline">
          BodyKits
        </Link>
        .
      </p>

      <img className="mt-4" src="/sx.jpg" alt="Nissan 180SX" />
    </main>
  );
}
