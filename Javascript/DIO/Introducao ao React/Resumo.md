# Resumo React
<hr>

## Aplicações Single-page

Uma aplicação single-page é uma aplicação que carrega uma única página HTML e todos os assets (como JavaScript e CSS) necessários para a aplicação ser executada. Quaisquer interações com a página ou páginas subsequentes não necessitam outras requisições para o servidor, o que significa que a página não é recarregada.
<Hr>

## Bundlers

Bundlers usam o código CSS e JavaScript escrito como módulos separados (geralmente centenas deles) e os combinam em alguns arquivos melhor otimizados para os navegadores. Alguns empacotadores comumente usados em aplicativos React incluem [Webpack] (https://webpack.js.org/) e [Browserify] (http://browserify.org/).
<Hr>


## Gerenciadores de pacotes
 Essas são ferramentas que permitem gerenciar dependências em seu projeto. [npm] (https://www.npmjs.com/) e [Yarn] (https://yarnpkg.com/) são dois gerenciadores de pacotes comumente usados em aplicativos React. Ambos são clientes para o mesmo registro de pacotes npm.
 <Hr>

## Componentes

Componentes React são pequenas peças reusáveis de código que retornam um elemento React para ser renderizado na página. A versão mais simples de um componente React é uma simples função JavaScript que retorna um elemento React:

~~~
function BemVindo(props) {
  return <h1>Olá, {props.nome}</h1>;
}
~~~

<hr>

## props

props são entradas dos componentes React. Eles são dados passados por um componente pai para um componente filho.

Lembre que props são somente leitura. Eles não devem ser modificados desta forma:

~~~
// Errado!
props.numero = 42;
~~~

Se você precisar modificar algum valor em resposta a uma entrada do usuário ou a uma resposta da rede, use state em vez disso.
<Hr>

## state

Um componente precisa de state quando algum dado associado com este é alterado com o tempo. Por exemplo, um Checkbox componente pode precisar da propriedade isChecked no seu estado (state), e um componente NewsFeed pode querer observar a propriedade fetchedPosts do seu estado.

A diferença mais importante entre state e props é que props é passada de um componente pai, mas o state é gerenciado pelo próprio componente. Um componente não pode alterar suas props, mas pode alterar seu state.

Para cada parte específica de dados alterados, deve haver apenas um componente que o “possua” em seu estado. Não tente sincronizar estados de dois componentes diferentes. Em vez disso, [passe-o] (/ docs / lifting-state-up.html) para o seu ancestral compartilhado mais próximo e passe-o para baixo como props para ambos.
