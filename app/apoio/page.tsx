'use client'

// EXEMPLO DE APOIO — NÃO faz parte do exercício avaliado.
// O objetivo é mostrar, de forma direta, os padrões de React que você vai
// usar nos níveis 1, 2 e 3: renderizar elementos, guardar estado com
// useState, reagir a cliques e renderizar listas com .map. Os exemplos
// abaixo usam um domínio diferente (contador, cor, frutas) de propósito,
// para não entregar a solução dos níveis.

import Link from 'next/link'
import { useState } from 'react'

const frutas = ['Maçã', 'Banana', 'Uva']

export default function Apoio() {
  // useState guarda um valor que "sobrevive" entre renderizações do
  // componente. Toda vez que o setter (ex: setContador) é chamado, o
  // React renderiza o componente de novo usando o valor novo.
  const [contador, setContador] = useState(0)
  const [ativo, setAtivo] = useState(false)

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
        padding: '3rem 2rem',
        backgroundColor: '#f4f4f5',
        color: '#18181b',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '34rem' }}>
        <Link
          href="/"
          style={{ fontSize: '1rem', fontWeight: 700, color: '#3f3f46' }}
        >
          ← Voltar
        </Link>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.75rem 0' }}>
          Exemplo de apoio
        </h1>
        <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#52525b' }}>
          Isto não é o exercício — é só para nivelar o básico de React antes
          de você começar os níveis. O código completo está em{' '}
          <code>app/apoio/page.tsx</code>.
        </p>
      </div>

      {/* 1. Renderizar um elemento básico na tela */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          1. Renderizar um elemento
        </h2>
        <p style={{ fontSize: '1.4rem', fontWeight: 600 }}>Olá, mundo!</p>
      </section>

      {/* 2. Estado + clique: o número muda e a tela re-renderiza sozinha */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          2. Estado (useState) + clique
        </h2>
        <p style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 0.75rem' }}>
          {contador}
        </p>
        <button
          type="button"
          onClick={() => setContador((valorAtual) => valorAtual + 1)}
          style={{
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.7rem 1.4rem',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 800,
          }}
        >
          Clique para somar 1
        </button>
      </section>

      {/* 3. Estado booleano controlando um estilo condicional */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          3. Alternar um estilo com estado
        </h2>
        <div
          style={{
            width: '6rem',
            height: '6rem',
            margin: '0 auto 0.75rem',
            borderRadius: '0.75rem',
            backgroundColor: ativo ? '#16a34a' : '#d4d4d8',
            transition: 'background-color 200ms ease',
          }}
        />
        <button
          type="button"
          onClick={() => setAtivo((valorAtual) => !valorAtual)}
          style={{
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.7rem 1.4rem',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 800,
          }}
        >
          Alternar cor
        </button>
      </section>

      {/* 4. Renderizar uma lista a partir de um array, com .map */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          4. Renderizar uma lista (.map)
        </h2>
        <ul
          style={{
            display: 'flex',
            gap: '0.75rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {frutas.map((fruta) => (
            <li
              key={fruta}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                fontSize: '1.05rem',
                fontWeight: 700,
              }}
            >
              {fruta}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
