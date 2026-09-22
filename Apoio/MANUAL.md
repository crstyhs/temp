# Material de apoio

Este material **não faz parte do exercício avaliado**. Ele existe para
nivelar o conhecimento básico de React antes de você começar os níveis —
ler este manual e rodar o exemplo abaixo não conta no tempo nem no uso de
IA que está sendo medido no exercício em si. Use-o à vontade antes de
abrir o Nível 1.

Quer entender os conceitos de React com mais calma antes do exemplo? Veja
o [Guia de React](GUIA-REACT.md) — ele explica cada um dos padrões
abaixo em detalhe, com exemplos próprios.

## Exemplo prático

Há um exemplo completo e funcionando em
[app/apoio/page.tsx](../app/apoio/page.tsx). Para vê-lo rodando:
### CodeSandbox

No CodeSandbox, o projeto é executado automaticamente e as alterações feitas
nos arquivos são refletidas no Preview sem a necessidade de executar comandos
manualmente.

Para visualizar o exemplo:

1. Abra a sandbox no CodeSandbox.
2. Na barra lateral esquerda, localize a opção **Preview**.
3. Clique em **Preview** para abrir a aplicação.
4. No Preview, acesse a rota `/apoio`.

A URL terá um formato semelhante a:

`https://URL_DA_SANDBOX/apoio`

> **Observação:** não é necessário abrir o Bash ou executar `pnpm dev` no
> CodeSandbox. Ao modificar o código, o Preview normalmente é atualizado
> automaticamente.

### Ambiente local
```bash
pnpm install
pnpm dev
```

Depois acesse `http://localhost:3000/apoio`.

Ele mostra, na prática, os quatro padrões que você vai precisar nos
níveis 1, 2 e 3 (com um exemplo diferente do exercício, para não entregar
a resposta):

1. **Renderizar um elemento** — um componente React é só uma função que
   retorna algo parecido com HTML (chamado de **JSX**).
2. **Estado (`useState`) + clique** — como guardar um valor que muda e
   fazer a tela se atualizar sozinha quando ele muda.
3. **Estilo condicional a partir do estado** — como usar um valor de
   estado para decidir a cor/estilo de um elemento.
4. **Renderizar uma lista com `.map`** — como transformar um array em
   vários elementos na tela.

## Conceitos por trás do exemplo

### Componente e JSX

```tsx
export default function Apoio() {
  return <p>Olá, mundo!</p>
}
```

Um componente é uma função que retorna JSX (um HTML "com superpoderes").
Dentro do JSX, chaves `{ }` permitem inserir qualquer expressão
JavaScript, por exemplo `{contador}` ou `{2 + 2}`.

### Estado com `useState`

```tsx
const [contador, setContador] = useState(0)
```

- `contador` é o valor atual (começa em `0`).
- `setContador` é a função usada para *atualizar* esse valor.
- Toda vez que `setContador(...)` é chamado, o React re-executa o
  componente com o novo valor — é assim que a tela "atualiza sozinha".

Uma forma segura de atualizar um estado com base no valor atual é passar
uma função para o setter, em vez do valor direto:

```tsx
setContador((valorAtual) => valorAtual + 1)
```

### Reagir a cliques

```tsx
<button onClick={() => setContador((valorAtual) => valorAtual + 1)}>
  Clique para somar 1
</button>
```

`onClick` recebe uma função. Essa função roda quando o botão é clicado.

### Estilo condicional

```tsx
<div style={{ backgroundColor: ativo ? '#16a34a' : '#d4d4d8' }} />
```Nenhum dos dois resolve o exercício, e ler esse material não conta no
tempo nem no uso de IA medidos no exercício.

Um operador ternário (`condição ? valorSeVerdadeiro : valorSeFalso`)
dentro do `style` decide a cor com base no estado `ativo`.

### Renderizar listas com `.map`

```tsx
{frutas.map((fruta) => (
  <li key={fruta}>{fruta}</li>
))}
```

`.map` transforma cada item de um array em um elemento JSX. O React
exige uma prop `key` única em cada item da lista, para saber identificar
cada elemento entre uma renderização e outra.

## Onde está o exercício de verdade

O exercício avaliado fica em `/nivel-1`, `/nivel-2` e `/nivel-3` (veja o
[README.md](../README.md) principal). Este material de apoio não resolve
nenhum deles — ele só te dá o vocabulário básico de React para chegar
lá com mais confiança.
