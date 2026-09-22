# Guia de React — o suficiente para fazer o exercício

Este guia **não faz parte do exercício avaliado**. Ele explica os
conceitos de React necessários para os 3 níveis, com mais profundidade
que o [MANUAL.md](MANUAL.md). Ler este material não conta no tempo nem
no uso de IA medidos no exercício — use à vontade antes de começar.

Se você nunca viu React, leia na ordem. Se já tem alguma noção, use o
sumário para pular direto ao que precisar.

## Sumário

1. [O que é um componente](#1-o-que-é-um-componente)
2. [JSX: HTML dentro do JavaScript](#2-jsx-html-dentro-do-javascript)
3. [Estado (`useState`)](#3-estado-usestate)
4. [Por que a tela atualiza sozinha](#4-por-que-a-tela-atualiza-sozinha)
5. [Eventos (cliques)](#5-eventos-cliques)
6. [Renderizando listas com `.map`](#6-renderizando-listas-com-map)
7. [Estilos em React](#7-estilos-em-react)
8. ['use client' e o arquivo `page.tsx`](#8-use-client-e-o-arquivo-pagetsx)
9. [Erros comuns](#9-erros-comuns)
10. [Como isso tudo se conecta ao exercício](#10-como-isso-tudo-se-conecta-ao-exercício)

## 1. O que é um componente

Em React, a tela é construída a partir de **componentes**: funções que
retornam a interface que deve aparecer. Um componente é só uma função
JavaScript normal, com uma regra: o nome começa com letra maiúscula e
ela retorna JSX (veja a seção 2).

```tsx
function Saudacao() {
  return <p>Olá!</p>
}
```

Para usar esse componente na tela, você o "chama" como se fosse uma tag:
`<Saudacao />`. Cada arquivo `exercicio.tsx` do exercício exporta um
componente assim — é ele que o Next.js renderiza na página.

## 2. JSX: HTML dentro do JavaScript

JSX é a sintaxe que parece HTML, mas na verdade é JavaScript. Algumas
diferenças importantes em relação ao HTML puro:

| HTML | JSX |
| ---- | --- |
| `class="botao"` | `className="botao"` |
| `<br>` | `<br />` (toda tag sem filhos precisa se autofechar) |
| `onclick="..."` | `onClick={...}` (camelCase, recebe uma função) |
| texto fixo | `{expressãoJavaScript}` — qualquer coisa entre chaves `{ }` é avaliada como JS |

Exemplos de chaves `{ }`:

```tsx
const nome = 'Maria'

return <p>Olá, {nome}!</p>          // insere uma variável
return <p>{2 + 2}</p>                // insere o resultado de uma expressão
return <p>{ativo ? 'Sim' : 'Não'}</p> // insere o resultado de um ternário
```

Um componente só pode retornar **um** elemento "de fora" — por isso é
comum tudo estar dentro de uma `<div>`, `<main>` ou `<section>` que
envolve o resto.

## 3. Estado (`useState`)

Uma variável JavaScript comum (`let x = 0`) não faz a tela mudar quando
seu valor muda. Para isso, React usa **estado**, criado com o hook
`useState`:

```tsx
import { useState } from 'react'

const [quantidade, setQuantidade] = useState(1)
```

- `useState(1)` cria um estado que **começa** com o valor `1`.
- `quantidade` é o valor atual — leia-o como uma variável normal.
- `setQuantidade` é a **única** forma correta de mudar esse valor.
  Nunca faça `quantidade = quantidade + 1` diretamente — isso não avisa
  o React de que algo mudou, e a tela não atualiza.

Duas formas de atualizar um estado:

```tsx
// 1) Passando o valor novo diretamente
setQuantidade(5)

// 2) Passando uma função que recebe o valor atual e devolve o novo

setQuantidade((valorAtual) => valorAtual * 2)
```

A forma 2 é a que você vai usar no exercício: para **dobrar** um valor a
cada clique, você precisa do valor atual no momento do clique, e a
função-callback garante isso mesmo que cliques aconteçam em sequência
rápida.

Um componente pode ter **vários** estados independentes, cada um com seu
próprio par `useState`:

```tsx
const [quantidade, setQuantidade] = useState(1)
const [corAtiva, setCorAtiva] = useState(false)
```

## 4. Por que a tela atualiza sozinha

O ciclo é sempre o mesmo:

1. O componente é renderizado (a função roda e retorna JSX).
2. Alguma coisa chama um setter de estado (ex: `setQuantidade(...)`).
3. O React agenda uma nova renderização: a função do componente roda de
   novo, **do início ao fim**, agora com o novo valor do estado.
4. O JSX retornado na 2ª vez é comparado com o anterior, e o React
   atualiza só o que mudou de verdade na tela.

Ou seja: você nunca manipula a tela diretamente (nada de
`document.querySelector`). Você só descreve, no JSX, "com este estado, a
tela deve mostrar isto" — e deixa o React decidir como atualizar.

## 5. Eventos (cliques)

Para reagir a um clique, passe uma função para a prop `onClick`:

```tsx
<button onClick={() => setQuantidade((valorAtual) => valorAtual * 2)}>
  Duplicar
</button>
```

Repare que é `onClick={funcao}`, não `onClick={funcao()}` — se você
colocar os parênteses, a função é chamada imediatamente ao renderizar,
em vez de esperar o clique.

Também é comum extrair a lógica para uma função separada, como já vem
pronto nos templates do exercício:

```tsx
function handleClick() {
  setQuantidade((valorAtual) => valorAtual * 2)
}

// ...
<button onClick={handleClick}>Duplicar</button>
```

## 6. Renderizando listas com `.map`

Para transformar um array em vários elementos na tela, use `.map`:

```tsx
const numeros = [1, 2, 3]

return (
  <ul>
    {numeros.map((numero) => (
      <li key={numero}>{numero}</li>
    ))}
  </ul>
)
```

Pontos importantes:

- `.map` percorre o array e retorna um **novo array**, um elemento JSX
  para cada item — é exatamente isso que o exercício pede para as
  "bolas".
- Todo item de uma lista precisa de uma prop `key` **única** entre os
  irmãos, para o React conseguir identificar qual item é qual entre uma
  renderização e outra. Sem isso, o React mostra um aviso no console e
  pode até renderizar a lista errado quando ela muda de tamanho.
- Para criar um array de um tamanho específico sem ter os valores prontos
  ainda, uma forma comum é `Array.from({ length: n }, (_, indice) => ...)`.

## 7. Estilos em React

Neste exercício, os estilos são inline, como um **objeto** JavaScript, não
uma string:

```tsx
<div style={{ backgroundColor: '#ffffff', fontSize: '2rem' }} />
```

Repare nos dois pares de chaves: o de fora é "isto é uma expressão JS", o
de dentro é o objeto de estilo em si. Propriedades CSS com hífen viram
camelCase (`background-color` → `backgroundColor`).

Como o `style` é só um objeto, ele pode ser montado com lógica normal de
JavaScript:

```tsx
<div
  style={{
    backgroundColor: corAtiva ? '#000000' : '#ffffff',
    fontSize: valor.toString().length > 3 ? '1rem' : '2rem',
  }}
/>
```

## 8. `'use client'` e o arquivo `page.tsx`

No topo dos arquivos do exercício você vai ver:

```tsx
'use client'
```

Next.js, por padrão, tenta renderizar componentes no servidor. Como o
exercício usa `useState` e `onClick` (coisas que só existem no
navegador), é preciso avisar o Next.js com essa diretiva. Você não
precisa entender os detalhes disso para fazer o exercício — só saiba que
ela precisa continuar lá.

Cada nível tem dois arquivos:

- `exercicio.tsx` — onde você implementa a lógica (tem os `TODO`).
- `page.tsx` — só importa o componente de `exercicio.tsx` e o coloca na
  página. Você não precisa mexer nele.

## 9. Erros comuns

- **"A tela não atualiza depois do clique"** — verifique se você está
  chamando o *setter* (`setQuantidade(...)`), e não só recalculando uma
  variável comum.
- **"Warning: each child in a list should have a unique key"** — falta
  (ou está repetida) a prop `key` nos itens gerados por `.map`.
- **"Cannot read properties of undefined"** ao acessar um índice do
  array — geralmente é um erro de tamanho/índice na hora de montar a
  sequência; confira os limites do `.map`/`.length`.
- **Esquecer o `return` dentro do `.map`** quando se usa chaves `{ }` em
  vez de parênteses `( )` no corpo da função — `array.map((x) => { x })`
  não retorna nada; use `array.map((x) => x)` ou `array.map((x) => { return x })`.

## 10. Como isso tudo se conecta ao exercício

| O que o exercício pede | Conceito deste guia |
| ----------------------- | -------------------- |
| Guardar quantas bolas existem | Estado (`useState`) — seção 3 |
| Dobrar a quantidade a cada clique | Atualização funcional de estado — seção 3 |
| Reagir ao clique do botão | Eventos — seção 5 |
| Mostrar uma bola para cada valor | Renderizar lista com `.map` — seção 6 |
| Alternar a cor de fundo (Nível 2) | Estado + estilo condicional — seções 3 e 7 |
| Gerar a sequência de Fibonacci (Nível 3) | Isso é lógica de JavaScript puro (não é React) — o ponto de React aqui é só guardar o *tamanho* da sequência em estado e usar `.map` para desenhar cada valor |
| Ajustar o tamanho da fonte conforme o número cresce (Nível 3) | Também é JavaScript puro — o ponto de React é usar esse valor calculado dentro do `style` |

Viu também o exemplo rodando? Está em `/apoio` (código em
[app/apoio/page.tsx](../app/apoio/page.tsx)) e usa exatamente estes
mesmos padrões, com um domínio diferente do exercício.
