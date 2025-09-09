const readlineSync = require('readline-sync');

let projetos = {};

function menu() {
  while (true) {
    console.log(`Gestor de Projeto e Tarefas
    1. Adicionar Projeto
    2. Adicionar Tarefa a um Projeto
    3. Listar Tarefas de um Projeto
    4. Alterar Tarefa de um Projeto
    5. Excluir Projeto
    6. Sair`);

    let opcao = readlineSync.question("Escolha uma opção: ");

    switch (opcao) {
      case '1':
        adicionarProjeto();
        break;
      case '2':
        adicionarTarefa();
        break;
      case '3':
        listarTarefas();
        break;
      case '4':
        alterarTarefa();
        break;
      case '5':
        excluirProjeto();
        break;
      case '6':
        console.log("Saindo do gestor de projeto e tarefas.");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

function adicionarProjeto() {
  let nomeProjeto = readlineSync.question("Digite o nome do novo projeto: ").toUpperCase();
  if (!projetos[nomeProjeto]) {
    projetos[nomeProjeto] = [];
    console.log(`Projeto '${nomeProjeto}' adicionado com sucesso.`);
  } else {
    console.log(`Projeto '${nomeProjeto}' já existe.`);
  }
}

function adicionarTarefa() {
  let nomeProjeto = readlineSync.question("Digite o nome do projeto: ").toUpperCase();
  if (projetos[nomeProjeto]) {
    let descricaoTarefa = readlineSync.question("Digite a descrição da nova tarefa: ");
    projetos[nomeProjeto].push(descricaoTarefa);
    console.log(`Tarefa '${descricaoTarefa}' adicionada ao projeto '${nomeProjeto}'.`);
  } else {
    console.log(`Projeto '${nomeProjeto}' não encontrado.`);
  }
}

function listarTarefas() {
  let nomeProjeto = readlineSync.question("Digite o nome do projeto: ").toUpperCase();
  if (projetos[nomeProjeto]) {
    console.log(`Tarefas do projeto '${nomeProjeto}':`);
    projetos[nomeProjeto].forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
  } else {
    console.log(`Projeto '${nomeProjeto}' não encontrado.`);
  }
}

function alterarTarefa() {
  let nomeProjeto = readlineSync.question("Digite o nome do projeto: ").toUpperCase();
  if (projetos[nomeProjeto]) {
    listarTarefas(nomeProjeto);
    let numTarefa = parseInt(readlineSync.question("Digite o número da tarefa a ser alterada: "));
    if (numTarefa > 0 && numTarefa <= projetos[nomeProjeto].length) {
      let novaDescricao = readlineSync.question("Digite a nova descrição da tarefa: ");
      projetos[nomeProjeto][numTarefa - 1] = novaDescricao;
      console.log(`Tarefa ${numTarefa} do projeto '${nomeProjeto}' alterada com sucesso.`);
    } else {
      console.log("Número de tarefa inválido.");
    }
  } else {
    console.log(`Projeto '${nomeProjeto}' não encontrado.`);
  }
}

function excluirProjeto() {
  let nomeProjeto = readlineSync.question("Digite o nome do projeto a ser excluído: ").toUpperCase();
  if (projetos[nomeProjeto]) {
    delete projetos[nomeProjeto];
    console.log(`Projeto '${nomeProjeto}' excluído com sucesso.`);
  } else {
    console.log(`Projeto '${nomeProjeto}' não encontrado, informe novamente.`);
  }
}

menu();
                                                            
