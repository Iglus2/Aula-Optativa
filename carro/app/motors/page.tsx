export default function Motors() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Motores</h1>

      <section>
        <h2 className="text-2xl font-bold">Motor naturalmente aspirado (N/A)</h2>
        <p className="mt-2">
          É o motor que respira por conta própria. Ele puxa o ar para dentro
          dos cilindros usando apenas o vácuo criado pelo movimento dos pistões,
          sem nenhuma ajuda externa.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/na.jpg" alt="Motor naturalmente aspirado" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Turbo único</h2>
        <p className="mt-2">
          Usa os gases de escape do próprio motor para girar uma turbina. Essa
          turbina empurra mais ar sob pressão para dentro do motor, gerando
          muito mais potência.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/single.jpg" alt="Turbo único" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Turbo duplo</h2>
        <p className="mt-2">
          Utiliza dois turbos no mesmo motor para tentar reduzir o lag ou
          alimentar motores com muitos cilindros, como V6 e V8.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/twin2.jpg" alt="Turbo duplo" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Supercharger</h2>
        <p className="mt-2">
          Supercharger e compressor são praticamente a mesma coisa. Ao contrário
          do turbo, ele é conectado diretamente ao motor por uma correia e usa a
          força do virabrequim para empurrar ar pressurizado.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/super3.jpg" alt="Supercharger" />
      </section>
    </main>
  );
}
