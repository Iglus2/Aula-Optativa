export default function Bodykits() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-4xl font-bold">BodyKits</h1>

      <section>
        <h2 className="text-2xl font-bold">O que são bodykits?</h2>
        <p className="mt-2">
          Bodykits são conjuntos de peças externas modificadas que substituem ou
          são adicionadas à lataria original do carro. Eles alteram o visual do
          veículo e podem ter funções estéticas ou funcionais, como melhorar a
          aerodinâmica e a refrigeração.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Lip kits</h2>
        <p className="mt-2">
          São pequenos acréscimos instalados embaixo dos para-choques e saias
          originais. São discretos, mantêm as linhas de fábrica e dão uma
          postura mais baixa ao carro sem trocar as peças inteiras.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/lip.jpg" alt="Lip kit" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Full bodykits</h2>
        <p className="mt-2">
          Substituem os para-choques dianteiro e traseiro e as saias laterais
          por peças totalmente novas, mudando bastante o design do carro.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/full.jpg" alt="Full bodykit" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Widebody</h2>
        <p className="mt-2">
          Inclui paralamas ou molduras mais largas, muitas vezes rebitadas na
          lataria. Isso permite usar rodas e espaçadores maiores sem que os
          pneus raspem na carroceria.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/wide.jpg" alt="Widebody" />
      </section>
    </main>
  );
}
