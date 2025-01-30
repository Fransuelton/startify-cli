#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import figlet from "figlet";

async function generateTitle() {
  return new Promise((resolve, reject) => {
    figlet("Startify", (err, data) => {
      if (err) {
        reject("Erro ao gerar título");
      }
      resolve(data);
    });
  });
}

async function main() {
  const title = await generateTitle();
  console.log(chalk.cyan(title));

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
    const spinner = ora("Instalando dependências...").start();

    setTimeout(() => {
      spinner.succeed("Dependências instaladas com sucesso!");
    }, 2000);
  }
}

main();
