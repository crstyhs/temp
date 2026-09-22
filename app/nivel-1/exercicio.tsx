'use client'

// EXERCÍCIO — NÍVEL 1: Duplicação de elementos visuais
// Implemente aqui a lógica descrita no README.md (seção "Nível 1").
// Ao final, este componente deve reproduzir o seguinte comportamento:
//
// 1. Iniciar exibindo apenas 1 bola, com o número 1.
// 2. A cada clique no botão "Duplicar bolas":
//    - a quantidade de bolas exibidas deve dobrar;
//    - cada bola exibe sua posição (1, 2, 3, 4, ...).
//
// A cor de fundo é sempre branca neste nível — isso muda no Nível 2.

export default function ExercicioNivel1() {
  // TODO: crie o estado que controla a quantidade de bolas exibidas
  // (inicie com 1 bola).

  function handleClick() {
    // TODO: ao clicar no botão, dobre a quantidade de bolas.
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
        backgroundColor: '#f4f4f5',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <section
        aria-label="Bolas"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          maxWidth: 'min(90vw, 900px)',
        }}
      >
        {/* TODO: substitua esta bola fixa por uma renderização baseada
            no estado (uma bola para cada posição, numeradas a partir de 1). */}
        <div
          aria-label="Bola número 1"
          style={{
            width: 'clamp(4.5rem, 12vw, 7rem)',
            aspectRatio: '1',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: '#dc2626',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 200ms ease, transform 200ms ease',
          }}
        >
          1
        </div>
      </section>

      <button
        type="button"
        onClick={handleClick}
        style={{
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.9rem 1.75rem',
          backgroundColor: '#dc2626',
          color: '#ffffff',
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 800,
        }}
      >
        Duplicar bolas
      </button>
    </main>
  )
}
