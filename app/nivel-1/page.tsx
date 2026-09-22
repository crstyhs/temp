import Link from 'next/link'
import ExercicioNivel1 from './exercicio'

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
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-base font-bold text-emerald-700 shadow-sm">
          Nível 1 · Duplicação
        </span>
      </div>
      <ExercicioNivel1 />
    </>
  )
}
