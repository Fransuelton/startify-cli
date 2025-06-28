import fs from "fs-extra";
import path from "path";
import ora from "ora";

export async function createFrontendProject(projectName, installDeps) {
  const projectPath = path.join(process.cwd(), projectName);
  await fs.mkdirp(projectPath);

  await fs.writeFile(
    path.join(projectPath, "index.html"),
    "<h1>Olá Startify</h1>"
  );
  await fs.writeFile(
    path.join(projectPath, "style.css"),
    "body { font-family: Arial; }"
  );
  await fs.writeFile(
    path.join(projectPath, "script.js"),
    "console.log('Projeto criado');"
  );

  if (installDeps) {
    const spinner = ora("Instalando dependências...").start();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    spinner.succeed("Dependências instaladas com sucesso!");
  }
}
