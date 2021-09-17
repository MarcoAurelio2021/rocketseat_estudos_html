- Seções comuns em documento

<html>
  - cabeçalho
  <header></header>
  - navegação
  <nav></nav>
  - conteúdo principal
  <main></main>
  - barra lateral
  <aside></aside>
  - rodapé
  <footer></footer>
</html>

- article
<!--

<article>

- vai construir um bloco de conteúdo que são relacionado
- pode se repetir varias vezes na paginá
- ele é independente do documento

# -->

===============================================================

- aside
<!--

<aside></aside>

- conteúdo levemente relacionados ao conteúdo principal
  - explicações
  - glossarios
  - links extras
  - biografia do autor
  - informações de perfil
- atributos: apenas globais

<dl>
  é uma lista de descrição, contendo dois valores dentro:
   uma <dt></dt> que é o termo da descrição e 
  <dd></dd> que fornece detalhes ou uma defininição do termo

</dl>

<hr> para criar uma linha
-->
===============================================================

- elementos genérico não semântico
<!--

Elementos não semanticos, para uso genérico

<div></div>
usado se não conseguir achar um elemento de bloco semantico.

<span></span>
usado se não conseguir achar um elemento de texto semantico.

Em ambas, usar atributos globais como id e class para entregar maior dignificado.

-->

<h1>Título <span class="destaque">destacado</span></h1>

<div class="cart">Carrinho de compras</div>

===============================================================

- fotter

<!--

  <footer></footer>

- Geralmente usa no final da paginá
  - informações do autor, copyright, contato, sitemap, voltar ao topo
- atributos: globais

-->

===============================================================

header

<!--
  <header></header>

   - Onde utilizar?
- Quando no inicio da página, é visto como global
- Pode ser usado em outros elementos semânticos como, article, section
- posso usar mais de um header na minha paginá
- Não possui atributos especificos nele, somente os globais

- não faz sentido usar header dentro de um footer ou dentro de outra <header>

-->

<header>
  como conteúdo podemos ter aqui, uma logo que vai descrever a minha paginá, um
  menu de navegação...etc
</header>

===============================================================

-main

<!--

<main></main>

- É para conteúdo único na paginá
- usar uma vez e colocar logo após o bory <body>



-->

===============================================================

- nav

<!--

<nav></nav>

- onde e porque utilizar

// nem todos os links da paginá nessessariamente tem que estar dentro de uma tag <nav>.
// ela é destinada para coisa mais importantes.
// ela é mais comum no topo da paginá, as vezes na lateral do site...
// ele seria o principal do site, os outros secundários não necessariamente precisa ser dentro de uma tag <nav>.
// mas pode ter outros <nav> no site

-->

===============================================================

- section

<!--

<section>
  <h2>Contato</h2>
  <p>Fale conosco</p>
</section>

- serve para colocar seções na paginá


-->
