'use client'

// EXERCÍCIO — NÍVEL 3: Sequência de Fibonacci
// Implemente aqui a lógica descrita no README.md (seção "Nível 3").
// Este nível reúne tudo dos níveis anteriores e substitui a numeração
// sequencial (1, 2, 3, ...) pela sequência de Fibonacci. Ao final, este
// componente deve reproduzir o seguinte comportamento:
//
// 1. Iniciar exibindo apenas 1 bola com o número 0, fundo branco.
// 2. A cada clique no botão "Inverter e continuar":
//    - a quantidade de bolas exibidas deve dobrar;
//    - os números exibidos nas bolas devem seguir a sequência de
//      Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, ...), na ordem, um número
//      por bola;
//    - a cor de fundo de todas as bolas deve inverter entre branco e
//      preto a cada clique (o número permanece sempre em vermelho).
//
// ATENÇÃO — escala de texto: como a quantidade de bolas dobra a cada
// clique, a sequência de Fibonacci cresce rápido e os números passam a
// ter mais dígitos (ex.: 987, 1597, 2584, ...). Com um fontSize fixo,
// esses números podem "estourar" o círculo da bola. Ajuste o tamanho da
// fonte dinamicamente conforme a quantidade de dígitos do número exibido.

export default function ExercicioNivel3() {
  // TODO: crie o estado que controla a quantidade de bolas exibidas
  // (inicie com 1 bola).

  // TODO: crie o estado que controla a cor atual de fundo das bolas
  // (inicie em branco).

  // TODO: implemente uma função que gere a sequência de Fibonacci com o
  // tamanho desejado, por exemplo: fibonacciSequence(length: number).

  // TODO: implemente uma função que calcule o fontSize da bola a partir
  // da quantidade de dígitos do número exibido (números maiores = fonte
  // menor), para evitar que o texto "estoure" o círculo.

  function handleClick() {
    // TODO: ao clicar no botão, dobre a quantidade de bolas e inverta a cor.
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
        aria-label="Bolas de Fibonacci"
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
            no estado (uma bola para cada valor da sequência de Fibonacci,
            com fontSize ajustado conforme a quantidade de dígitos). */}
        <div
          aria-label="Bola com o número 0"
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
          0
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
        Inverter e continuar
      </button>
    </main>
  )
}
