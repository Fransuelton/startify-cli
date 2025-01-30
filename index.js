#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";

async function ask() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Qual o nome do seu projeto?",
      default: "meu-projeto",
    },
    {
      type: "list",
      name: "type",
      message: "Qual o tipo de projeto você deseja criar?",
      choices: ["Web"],
    },
    {
      type: "confirm",
      name: "InstallDependencies",
      message: "Deseja instalar dependências automaticamente?",
      default: true,
    },
  ]);

  console.log(
    chalk.green(
      `Projeto "${response.name}" de tipo "${response.type}" criado com sucesso!`
    )
  );

  if (response.InstallDependencies) {
    const spinner = ora('Instalando dependências...').start();

    setTimeout(() => {
        spinner.succeed('Dependências instaladas com sucesso!')
    }, 2000);
  }
}

ask();
