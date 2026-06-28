export default function Rodas() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Rodas e suspensão</h1>

      <section>
        <h2 className="text-2xl font-bold">Cambagem</h2>
        <p className="mt-2">
          O camber é a inclinação vertical das rodas em relação ao solo quando
          vistas de frente. Ele altera a área de contato do pneu, o desgaste e a
          estabilidade do veículo.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/camber.jpg" alt="Cambagem" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Suspensões</h2>
        <p className="mt-2">
          A suspensão controla o contato dos pneus com o solo, absorve impactos
          e gerencia a transferência de peso do veículo. Ela influencia o
          equilíbrio entre conforto, estabilidade e tração.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/susp.jpg" alt="Suspensão" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Espaçadores</h2>
        <p className="mt-2">
          Espaçadores de roda são discos de metal instalados entre o cubo e a
          roda. A função principal deles é empurrar as rodas para fora,
          aumentando a largura de bitola do veículo.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/spac.jpg" alt="Espaçadores" />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Kits de ângulo</h2>
        <p className="mt-2">
          Em carros comuns, as rodas viram cerca de 35° a 40°. No drift e em
          competições, são usados kits de ângulo para fazer as rodas virarem de
          60° até mais de 70°.
        </p>
        <img className="mt-3 max-w-xl rounded" src="/king.jpg" alt="Kit de ângulo" />
      </section>
    </main>
  );
}
