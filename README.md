# 🚀 Startify

Um gerador de projetos CLI simples e eficiente para facilitar a criação de novos projetos rapidamente.

## 📌 Funcionalidades

- 🛠 Criação automática de estrutura de arquivos
- 📦 Inicialização de repositório Git
- 📜 Geração de arquivos essenciais como `README.md` e `.gitignore`
- 🚀 Suporte por enquanto a projetos Web (HTML, CSS e JavaScript)
- 📥 Instalação automática de dependências (opcional)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu ambiente:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 🛠 Bibliotecas

- [inquirer.js](https://www.npmjs.com/package/inquirer) → Interface interativa no terminal
- [chalk](https://www.npmjs.com/package/chalk) → Estilização de cores no terminal
- [figlet](https://www.npmjs.com/package/figlet) → Geração de títulos em ASCII
- [fs-extra](https://www.npmjs.com/package/fs-extra) → Manipulação avançada de arquivos
- [ora](https://www.npmjs.com/package/ora) → Indicadores de carregamento
- [yargs](https://www.npmjs.com/package/yargs) → Parsing de argumentos CLI

## 💻 Instalação

Para instalar e usar o Startify, você pode clonar este repositório ou instalar globalmente ou localmente.

### Clonando o repositório

Para clonar o repositório pode ser usado SSH ou HTTPS, abaixo está o comando usando SSH:

```bash
git clone git@github.com:Fransuelton/startify-cli.git
```

Depois de clonar o repositório, entre na pasta do projeto e instale as dependências:

```bash
cd startify-cli

npm install
```

Também e possível criar um link simbólico para o projeto:

```bash
npm link
```

Depois disso, você pode executar o comando `startify-cli` em qualquer lugar.

### Globalmente

Para instalar o CLI globalmente e usá-lo de qualquer lugar:

```sh
npm install -g startify-cli
```

Agora você pode executar o comando em qualquer diretório:

```sh
startify-cli
```

### Localmente

Se preferir instalar apenas no seu projeto atual:

```sh
npm install startify-cli
```

E rodar com:

```sh
npx startify-cli
```

## 🚀 Como Usar

Após a instalação, basta executar:

```sh
startify-cli
```

Você será guiado por uma interface interativa que solicitará informações sobre o seu projeto, como nome e tipo.

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo! 🛠

---

Feito com ❤️ por [Fransuelton](https://github.com/Fransuelton)
