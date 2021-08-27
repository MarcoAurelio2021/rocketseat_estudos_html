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
- id

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

-->

======================================================
