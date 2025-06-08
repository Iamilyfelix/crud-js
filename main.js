function menu() {
    while (true) {
        var opcao = prompt("INFORME SUA OPÇÃO\n 1 - Cadastrar cliente\n 2 - Listar clientes\n 3 - Buscar dados do cliente\n 4 - Editar dados do cliente\n 5 - Remover cliente");

        if (opcao === "1") {
            cadastrarCliente();
        } else if (opcao === "2") {
            listarClientes();
        } else if (opcao === "3") {
            buscarDados();
        } else if (opcao === "4") {
            editarCliente();
        } else if (opcao === "5") {
            excluirCliente();
        } else {
            alert("opção invalida!")
        }

    }
}
function cadastrarCliente() {
    const nome = prompt("Nome: ");
    const telefone = prompt("Telefone: ")
    const email = prompt("E-mail: ");
    const cpf = prompt("CPF: ");

    clientes.push({ nome, telefone, email, cpf });

    alert("Cliente cadastrado!")
}

function listarClientes() {
    let listarClientes = "";
    for (let i = 0; i < clientes.length; i++) {

        listarClientes += "Nome: " + clientes[i].nome +
            "\nTelefone: " + clientes[i].telefone +
            "\nE-mail: " + clientes[i].email +
            "\nCPF: " + clientes[i].cpf +
            "\n--------------------------\n"
    }

    alert(listarClientes);
}

function buscarDados() {
    const buscarcpf = prompt("Digite o CPF do cliente:");

    let cliente = clientes.find(pessoa => pessoa.cpf === buscarcpf);

    if (cliente) {
        alert(
            "Nome: " + cliente.nome +
            "\nTelefone: " + cliente.telefone +
            "\nE-mail: " + cliente.email +
            "\nCPF: " + cliente.cpf
        );
    } else {
        alert("Cliente não encontrado!");
    }
}


function editarCliente() {
    const cpfBusca = prompt("Digite o CPF do cliente que deseja editar:");
    const cliente = clientes.find(c => c.cpf.toLowerCase() === cpfBusca.toLowerCase());

    if (!cliente) {
        alert("Cliente não encontrado.");
        return;
    }

    const novoNome = prompt("Novo nome:", cliente.nome);
    const novoTelefone = prompt("Novo telefone:", cliente.telefone);
    const novoEmail = prompt("Novo email:", cliente.email);
    const novoCpf = prompt("Novo CPF:", cliente.cpf);

    cliente.nome = novoNome || cliente.nome;
    cliente.telefone = novoTelefone || cliente.telefone;
    cliente.email = novoEmail || cliente.email;
    cliente.cpf = novoCpf || cliente.cpf;

    alert("Cliente atualizado!");
}

function excluirCliente() {
    if (clientes.length === 0) {
        alert("Nenhum cliente cadastrado.");
        return;
    }

    const cpf = prompt("Digite o CPF do cliente que deseja excluir:");
    const index = clientes.findIndex(c => c.cpf === cpf);

    if (index === -1) {
        alert("Cliente com esse CPF não foi encontrado.");
        return;
    }

    const confirmar = confirm(`Tem certeza que deseja excluir ${clientes[index].nome}?`);
    if (confirmar) {
        clientes.splice(index, 1);
        alert("Cliente excluído com sucesso!");
    }
}


