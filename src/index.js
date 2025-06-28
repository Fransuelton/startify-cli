import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { createFrontendProject } from "./commands/createFrontend.js";

async function generateTitle() {
  return new Promise((resolve, reject) => {
    figlet("Startify", (err, data) => {
      if (err) reject("Erro ao gerar título");
      resolve(data);
    });
  });
}

export default async function main() {
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
      choices: ["Frontend", "Backend"],
    },
    {
      type: "confirm",
      name: "InstallDependencies",
      message: "Deseja instalar dependências automaticamente?",
      default: true,
    },
  ]);

  if (response.type === "Frontend") {
    await createFrontendProject(response.name, response.InstallDependencies);
  }

  console.log(
    chalk.green(
      `Projeto "${response.name}" do tipo "${response.type}" criado com sucesso!`
    )
  );
}

main();
