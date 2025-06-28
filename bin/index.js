#!/usr/bin/env node

import("../src/index.js").catch((error) => {
  console.error("Erro ao executar o Startify CLI:", error);
  process.exit(1);
});
