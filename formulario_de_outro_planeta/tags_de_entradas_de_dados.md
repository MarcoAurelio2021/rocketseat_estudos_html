input, input atributos, Password, Email, URL, File, Color, Checkbox,
Hidden, Radio, Textarea, Select, Optgroup, Search,
Range, Data e Hora

input

<!--

<input>

- Um dos mais usados em formulários
- Aceita os mais diversos tipo de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

Atributos

- Type ==> date, email, file, password...
- name

-->

<input type="password" />

======================================================

input atributos

<!--

   <input> Atributos comuns

     - autocomplete // vai buscar no navegador algum tipo de dado usado recente e completar para mim.

     - autofocus //  só usa um por página

     - disables // vai desabilitar um campo para mim

     - readonly // é semelhante ao disabled, só muda o aspecto dele (quase todos)

     - value // vai colocar algum valor para mim

     - form // serve para linkar o input com algum formulário  (quase todos)

     - name //

     - required // significa que é obrigatório, tem que colocar valores (quase todos)

     - placeholder // vai servir para campos específicos, campo de :(password, search, tel, text, url) (quase todos)

     <form id="meu-form"></form>

     <input name="email" type="text" form="meu-form" />

 -->

<input type="email" placeholder="Digite seu email" />

======================================================

- password

<!--

  <input type="password" />

- coloca uma senha de maneira segura
- Esconde o que está sendo digitado no
campo
- o estilo da apresentação do campo, depende do User Agent

# Atributos

- minlength / maxlength
   * O número mínimo e/ou máximo de caracteres para este campo

- size
   * o número aceitável de caracteres que esse campo deverá conter

 pattern
    * Expressão regular para validar o que está sendo digitado no campo

    * Altamente recomendado o uso de um padrão de segurança alta de senhas

    * exemplos: queremos que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no maxímo 8 caracteres
         * pattern="[0-9a-fA-F] {4,8}"

- placeholder
    * Mostra um exemplo de texto a ser digitado no campo

    - readonly / disabled
         * Atributo booleano indicando se o campo está habilitado ou não

- required
    * o campo será obrigatório

    - inputmode
       * poderá alterar o uso do teclado em smartphones
       * exemplo: queremos que o cliente só adicione números
          * inputmode="numeric"

- autocomplete:
     * on: permite a sugestão de: new-password ou current-password
     * off: desabilita a opção de autocompletar
     *  new-password: o navegador poderá sugerir uma nova senha

-->

<form action="">
  <input type="text" required />

<button type="submit">enviar</button>

</form>

======================================================

- email

<!--
 <input type="email" />

- Espera que o usuário digite um email
- Irá validar se o valor digitado é um email


# Atributos

- placeholder
- readonly / disabled

tem  varios outros atributos  para ser usado
* pesquisar no MDN-->

<form action="">
  <input type="email" placeholder="email" readonly />
  <button>Enviar</button>
</form>

======================================================

- URl
  - espera que o usuário digite uma URL
  - Irá validar se o valor é uma URL
  - tem seus atributos e combinações a ser feita para melhorar o formulário

<form action="">
  <input
    type="url"
    placeholder="https://www.google.com"
    title="Somente dominios .com.br"
  />

<button style="color: darkgreen">enviar</button>

</form>

======================================================

- file

<!-- <input type="file" />

- Usuário poderá escolher um ou mais arquivo para enviar no formulário

# Atributos

- Value
contém o arquivo a ser enviado

- accept
   - Descreve que tipo de arquivos a ser aceito
   - exemplo: .doc, .docx, .pdf, audio*/ image/png, .png

   - e outros a serem estudado no MDN

   # Envio do arquivo
     - Para envio do arquivo o formulário deverá utilizar o método POST e o atributo enctype como "multpart"/form-data
    // Somente quando for usar o input tipo file

  -->

<form action="" method="POST" enctype="multipart/form-data">
  <input type="file" />
</form>

======================================================

- color

<!-- <input type="color">

- É uma interface para selecionar cor
- Color picker

# Atributos

- Value: RGB
  - Se é inválido, o preto será exibido

  - list
    * o id de uma tag <datalist>/ que está no mesmo documento

    * <datalist> irá conter uma lista de valores pŕe definidos

    * Os valores do <datalist>

    -->

<datalist id="colordata">
  <option></option>
  <option></option>
</datalist>

<input type="color" list="colorsdata" />

======================================================

- checkbox

<!--

  <input type="checkbox" />

- Caixas  que podem ser marcadas
- Seleciona um valor para ser enviado
- Se não selecionado não será enviado

 # Atributos

 - Globais
 - Value
   * valor que aquele campo contém
   * se não estiver presente, o padrão é 'on'

  - checked // é uma atributo booleano
    * para deixar o campo marcado por padrão

    <label for="subcribe">Receber notificões</label>

    <input type="checkbox" name="subscribe" id="subscribe" />

  -->

<fieldset>
  <legend>choose your interest</legend>

  <div>
    <input type="checkbox" id="Coding" name="interest" value="Coding" checked />
    <label for="Coding">Coding</label>
  </div>

  <div>
    <input type="checkbox" id="Music" name="interest" value="Music" />
    <label for="Music">Music</label>
  </div>
</fieldset>

======================================================

- hidden

<!-- <input
  type="hidden"
  id="timestamp"
  name="timestamp"
  value="1698
4964189"
/>
 - invisivél ao usuário
 - será enviado com o formulário
 - não receberá foco
 - leitores de tela não percebem esse campo  -->

<input type="hidden" value="">

======================================================

- radio

<!-- <input type="radio">

- Projetado para selecionar uma única opção de um grupo de opções

Atributos essenciais

- checked
- value
 -->

======================================================

- textarea

<!-- <textarea>

  - permite digitar mais de uma linha
  - útil para textos grandes

   Atributos
     - id
     - name
     - rows e cols // para definir o tamanho do textarea.
     - maxlength e minlength // vai definir o tamanho do texto.
     - wrap // significa que o texto está se embrulhando dentro da caixa...  o padrão é wrap="soft" e tem o qrap="hard"

     ** outros comuns ao input
        - autocomplete, autofocus, disabled, placeholder,
        readonly, form, required -->

<textarea></textarea>

======================================================

- select

<!-- <select></select>

- controle que fornece um menu de opoções

<option></option>
- Contém as opções a serem selecionadas
- Atributos necessários
   - value

   Atributos unicos
   - multiple
     habilita múltiplas opções

   - size
     Quando opções visíveis -->

<label for="carselect">Qual o modelo do carro</label>

<br />

<select name="carmodel" id="carselect" multiple size="2">
  <option value="">Selecione o Carro</option>
  <option value="Fiat">Uno</option>
  <option value="Fiat">Toro</option>
  <option value="Volkswagen">Gol G6</option>
</select>

======================================================

- optgroup

<!--
  <optgroup></optgroup>

- vai funcionar dentro de um select, pois vai fazer um agrupamento dos options

 -->

<label for="">please choose one or more pets:</label>

<br />

<select name="Pets" multiple size="4">
  <optgroup label="4-legged pets">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster" disabled>Hamster</option>
  </optgroup>
  <optgroup label="Flying pets">
    <option value="parrot">Parrot</option>
    <option value="macaw">Macaw</option>
    <option value="albatross">Albatross</option>
  </optgroup>
</select>

======================================================

- search

<!-- <input type="search">

  - Para campos de busca
  - È igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent

  # Atributos
    - list/ <datalist>
    - pattern
    - aria-label  // quando não temos o label, ele vai servir como uma opção... ambos serve para acessebilidade

    <datalist id="searchterms">
      <option>Mac</option>
      <option>win</option>
      <option>Linux</option>
    </datalist>

    <form action="">
      <input
        type="search"
        name="q"
        list="searchterms"
        placeholder="Digite seu termo de busca"
        size="27"
        aria-label="Campo de Pesquisa: Digite seu termo de busca"
      />

      <button>Pesquisa</button>
    </form>

     -->

<form action="">
  <label for="">Pesquisar pelo ID</label>
  <input
    type="search"
    name="id"
    size="5"
    pattern="[0--9] {2}"
    title="Digite o Número do ID: 99"
  />
  <button>Pesquisar</button>
</form>

======================================================

- number

<!-- <input type="number">

- Entrada de número

Atributos
  - min / max // vai definir o mínimo e o máximo de número a ser trabalhado
  - step // é para pular o número de 1 em 1 ou 100 em 100 step="100"

   também aceita outros atributos normais
   -->

<input type="number" step="30" />

======================================================

- range

<!-- <input type="range">

- Controle para selecionar um valor númerico
- Slider ou dial Control

Atributos
  - min / max
  - step -->

<input type="range" min="1" max="100" step="5" />

======================================================

- data e hora

<!-- Outros campos
 ( Mas ainda não tem ótimo suporte )

   olhar em https://caniuse.com

   em alguns brouser não funciona

   type
       date, datetime-local, month, time, week
    -->

<input type="date" />

======================================================

Exercicio

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <main>
      <form action="" method="POST">
        <fieldset style="width: 280px; height: 320px">
          <legend>Contato</legend>

          <div>
            <label for="Name"> Nome </label>

            <br />
            <!-- name="" para quando for enviar o formulário  -->
            <input
              type="text"
              id="Name"
              name="name"
              placeholder="Digite seu nome completo"
            />
          </div>

          <br />

          <div>
            <label for="email">Email</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <br />

          <div>
            <label for="Mensage">Mensagem</label>
            <br />

            <textarea
              name="mensage "
              id="Mensage"
              cols="24"
              rows="7"
            ></textarea>
          </div>

          <br />
          <br />

          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    </main>

  </body>
</html>
