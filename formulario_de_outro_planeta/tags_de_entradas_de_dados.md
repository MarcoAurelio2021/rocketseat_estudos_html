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

     - readonly // é semelhante ao disabled, só muda o aspecto dele

     - value // vai colocar algum valor para mim

     - form // serve para linkar o input com algum formulário

     - name //

 -->

<form id="meu-form"></form>

<input name="email" type="text" form="meu-form" />

======================================================
