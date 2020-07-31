# Produtos

<p>Criado com carinho por Evaldo Klock - neto.nemesis@gmail.com</p>
<p>Referente ao desafio da Coodesh Desafio 20200630 - Back-End: Node ou PHP, MySQL & Angular 2+| Vaga na VipCommerce</p>
<ul>
<li>NodeJS com Express JS no Back-End usando TypeScript </li>
<li>Angular JS no Front-End</li>
<li>Docker com docker-compose para o backend e banco de dados</li>
<li>Docker com docker-compose para o front-end </li>
</ul>
<p>Os ambientes aqui estão em forma de desenvolvimento. A parte de autenticação da API pra criação de dados não foi criada considerado o contexto. Mas temos a ciência que isso é necessário em um ambiente de produção</p>

# Instruções para Rodar o Projeto

<p>Você precisará estar em um ambiente Linux com docker e docker-compose instalados</p>

<strong>Por alguma limitação no Heroku o teste de criação em massa de produtos para de executar (acredito que deva ter limitação no tamanho do batch) por isso sugiro rodar com meu ambiente docker mesmo</strong>

<p>Caso necessite, estou anexando as credenciais do banco no heroku no arquivo </p>

<pre>credenciais-heroku.json</pre>

## Backend

#### Iniciar API Backend

<pre>make start-backend</pre>
<pre>Acessar o back-end no navegador em <a href="http://localhost:3333">http://localhost:3333</a></pre>

#### Rodar Testes no Backend

<pre>make tests-backend</pre>

## Front-End

<pre>make start-front</pre>
<pre>Acessar o front-end no navegador em <a href="http://localhost:4200">http://localhost:4200</a></pre>
