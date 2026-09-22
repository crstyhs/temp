import Link from 'next/link'
import ExercicioNivel2 from './exercicio'

export default function Page() {
  return (
    <>
      <div className="fixed top-4 left-4 z-10 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-white px-4 py-2 text-base font-bold text-zinc-700 shadow-md transition hover:-translate-x-0.5 hover:text-red-600"
        >
          ← Voltar
        </Link>
        <span className="rounded-full bg-amber-100 px-4 py-2 text-base font-bold text-amber-700 shadow-sm">
          Nível 2 · Cores
        </span>
      </div>
      <ExercicioNivel2 />
    </>
  )
}
