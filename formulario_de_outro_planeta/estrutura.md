<button>, <datalist>, <fieldset> e <legend>, <form>, <label>

button

<!--

  <button>

  - Representa um botão
  - usado para enviar formulário
  - É estilizado pelo user agent

  Atributos comuns
  - type
      - submit
         - reset
         - button
      - autofocus   // são os atributos a serem usado dentro do elemento type.
      - disable
      - name
      - value
      - form

-->

<!--
  Exemplos

  <form action="">
    <input type="text" value="" />
    <button type="reset">Limpar</button>
  </form>

-->

<button autofocus>Enviar</button>

<button></button>

===============================================================================

datalist

<!--

<datalist>


  - lista de valores como sugestão a uma tag <input>

  - valores sugestivos e não obrigatórios

  - Usuário poderão selecionar um dos valores, ou colocar um valor diferente da sugestão.

<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
</datalist>

# list
 -  Recebe como valor o id de um <datalist> residente no mesmo documento

# Tipo de input suportados

- text, search, url, tel, email, date, month, week, time, datetime-local, number, range e colocar

* Valores de datalist que não são compatíveis com o tipo do <input> não serão apresentados.

# Tipos de input não suportados (conforme especificado)

- hidden, password, checkbox, radio, file, ou qualquer tipo de button

# User Agent
   Verificar a compatiblidade com o browser  https://caniuse.com

-->

<input type="text" list="fruitsdata" placeholder="Escolha uma fruta" />

<datalist id="fruitsdata">
  <option>mango</option>
  <option>orange</option>
  <option>cherry</option>
</datalist>

<datalist id="colorsdata">
  <option>#ff0000</option>
  <option>#00ff00</option>
</datalist>

<input type="color" list="colorsdata" />

================================================================================

fieldset e legend

<!--

<figure>
  - agrupamento de campos
  - mesmo proposito
  - semântico
  - acessibilidade

  Atributos especiais
  - disabled
     - desabilita todos os elementos internos
     - não serão enviados ao submeter o formulário

     - form
       - id de um formulário ao qual esse fieldset pertence

       - não precisa estar dentro do formulário

       - name
         - name do grupo

         <legend>
           - nome do agrupamento
           - primeiro elemento dentro do fieldset

-->

<form id="contato" action="">
  <button>Enviar</button>
</form>

<fieldset form="contato" name="inputs-contact">
  <legend>Contato</legend>

<label for="">Nome</label>
<input type="text" />

</fieldset>

================================================================================

form

<!--

<form>

  - Elemento que definirá um formulário
  - É um container estilo <section> <footer>


    Atributos básicos

    - action // vai enviar os dados para algum lugar. se deixar vazio os dados é enviado para a mesma página.
    - method // post ou GET é um jeito de enviar dados

-->

<form action="" method=""></form>

================================================================================

label

<!--

<label>

  - associar e identificar uma (ou mais) tag de entrada de dados
  - acessibilidade
  - clicar para mudar o foco da entrada de dados

  Atributos
  - for
     - para fazer a conexão entre este label e a tag de entrada de dados

     - é feita via id do input
     - só funciona com elementos específicos
        - button, input, (not hidden), meter, output, progress, select, textarea

-->
<p>
  <label for="name">name:</label>

  <input id="name" type="text" />
</p>

<p>
  <label for="lastname">lastname:</label>

  <input id="lastname" type="text" />
</p>

================================================================================
