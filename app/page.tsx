import Link from "next/link";

const levels = [
  {
    href: "/nivel-1",
    number: 1,
    title: "Duplicação",
    description: "Dobre a quantidade de bolas na tela a cada clique.",
    color: "from-emerald-500 to-emerald-600",
    ring: "hover:ring-emerald-300",
  },
  {
    href: "/nivel-2",
    number: 2,
    title: "Cores",
    description: "Duplicação + alternância de cor de fundo a cada clique.",
    color: "from-amber-500 to-amber-600",
    ring: "hover:ring-amber-300",
  },
  {
    href: "/nivel-3",
    number: 3,
    title: "Fibonacci",
    description:
      "Duplicação + cor + sequência de Fibonacci, com ajuste de escala de texto.",
    color: "from-rose-500 to-rose-600",
    ring: "hover:ring-rose-300",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 flex flex-col items-center justify-center gap-10 px-6 py-16 font-sans">
      <div className="text-center max-w-xl">
        <span className="inline-block rounded-full bg-red-100 text-red-700 text-sm font-bold px-4 py-1.5 mb-4">
          Exercício programação para o laboratório do TCC: IA aplicada à
          engenharia de software
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Esferas de Fibonacci
        </h1>

        <p className="text-lg sm:text-xl font-semibold text-zinc-600 leading-relaxed">
          Você vai construir esse exercício em 3 níveis, cada um mais desafiador
          que o anterior. Vá no seu ritmo, fazendo o máximo de níveis que puder,
          recomendamos que o exercício seja realizado em uma única seção.
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-xl">
        {levels.map((level) => (
          <Link
            key={level.href}
            href={level.href}
            className={`group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md ring-2 ring-transparent transition-all hover:-translate-y-0.5 hover:shadow-xl ${level.ring}`}
          >
            <div
              className={`grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br ${level.color} text-2xl font-extrabold text-white shadow-sm`}
            >
              {level.number}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl font-extrabold text-zinc-900">
                  Nível {level.number} — {level.title}
                </span>
              </div>

              <p className="text-base font-semibold text-zinc-600 mt-1">
                {level.description}
              </p>
            </div>

            <span className="shrink-0 text-2xl font-bold text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-red-500">
              →
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/apoio"
        className="text-base font-bold text-zinc-500 underline-offset-4 hover:text-red-600 hover:underline"
      >
        Veja o material de apoio antes de começar.
      </Link>
    </main>
  );
}
