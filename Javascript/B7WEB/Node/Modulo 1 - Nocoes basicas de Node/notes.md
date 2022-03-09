## terminal
npm init
tsc -init
npm install --save-dev @types/node
tsc -w para entrar em watch mode e atualizar automaticamente
npm install express & npm install @types/express
npm install mustache-express & npm install --save-dev @types/mustache-express
obs: npm install para instalar todas as dependencias citadas no .json
npm install dotenv


## .json
"outDir": "./dist",
"rootDir": "./src",                                
"moduleResolution": "node",


##
* Nodemon reinicia automaticamente o servidor
* na porta 80 não precisa especificar a porta na url do browser. ex: "localhost" acessa o server
* mustache é um template engine do node para fazer paginas html
* O .env é um arquivo de configuração do sistema, onde você coloca informações sensíveis que não devem ser compartilhadas com outras pessoas, como por exemplo:
senhas,tokens de apis, url do servidor, url de banco de dados, etc.
