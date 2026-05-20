document.addEventListener("DOMContentLoaded", () => {
    // Mapeamento dos elementos de texto da tela
    const boasVindas = document.getElementById("boas-vindas");
    const perfilNome = document.getElementById("perfil-nome");
    const perfilEmailText = document.getElementById("perfil-email");

    // Mapeamento dos botões
    const btnEditar = document.getElementById("btn-editar");
    const btnSalvar = document.getElementById("btn-salvar");

    // Mapeamento de todos os campos de entrada (inputs e selects)
    const campos = {
        nomeCompleto: document.getElementById("NomeCompleto"),
        nomeUsuario: document.getElementById("NomeUsuario"),
        genero: document.getElementById("genero"),
        pais: document.getElementById("pais"),
        lingua: document.getElementById("lingua"),
        email: document.getElementById("email"),
        telefone: document.getElementById("telefone"),
        senha: document.getElementById("senha")
    };

    // Função para bloquear ou desbloquear a digitação nos campos
    function alternarBloqueioCampos(bloquear) {
        Object.values(campos).forEach(campo => {
            if (campo) campo.disabled = bloquear;
        });
    }

    // Função que carrega as informações salvas sempre que a página abre
    function carregarDadosPerfil() {
        const dadosSalvos = localStorage.getItem("perfilUsuario");

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);

            // Preenche os campos do formulário com o que estava salvo
            if (dados.nomeCompleto) campos.nomeCompleto.value = dados.nomeCompleto;
            if (dados.nomeUsuario) campos.nomeUsuario.value = dados.nomeUsuario;
            if (dados.genero) campos.genero.value = dados.genero;
            if (dados.pais) campos.pais.value = dados.pais;
            if (dados.lingua) campos.lingua.value = dados.lingua;
            if (dados.email) campos.email.value = dados.email;
            if (dados.telefone) campos.telefone.value = dados.telefone;
            if (dados.senha) campos.senha.value = dados.senha;

            // Atualiza os textos da interface
            boasVindas.textContent = `Bem vindo(a), ${dados.nomeUsuario}!`;
            perfilNome.textContent = dados.nomeUsuario;
            perfilEmailText.textContent = dados.email;
        }

        // Por padrão, a página carrega com os campos bloqueados para edição
        alternarBloqueioCampos(true);
    }

    // Função que captura os dados e salva de forma permanente no navegador
    function salvarDadosPerfil() {
        const dadosParaSalvar = {
            nomeCompleto: campos.nomeCompleto.value,
            nomeUsuario: campos.nomeUsuario.value,
            genero: campos.genero.value,
            pais: campos.pais.value,
            lingua: campos.lingua.value,
            email: campos.email.value,
            telefone: campos.telefone.value,
            senha: campos.senha.value
        };

        // Guarda a informação convertida em texto (JSON) no LocalStorage
        localStorage.setItem("perfilUsuario", JSON.stringify(dadosParaSalvar));

        // Atualiza os cabeçalhos em tempo real na tela atual
        boasVindas.textContent = `Bem vindo(a), ${dadosParaSalvar.nomeUsuario}!`;
        perfilNome.textContent = dadosParaSalvar.nomeUsuario;
        perfilEmailText.textContent = dadosParaSalvar.email;

        // Bloqueia os campos novamente após a gravação
        alternarBloqueioCampos(true);

        alert("Alterações salvas com sucesso!");
    }

    // Evento para quando clicar em "Editar" -> Libera os campos para escrita
    btnEditar.addEventListener("click", () => {
        alternarBloqueioCampos(false);
        campos.nomeCompleto.focus(); // Coloca o cursor do teclado direto no primeiro campo
    });

    // Evento para quando clicar em "Salvar" -> Grava tudo permanentemente
    btnSalvar.addEventListener("click", salvarDadosPerfil);

    // Inicializa a página lendo os dados salvos anteriormente
    carregarDadosPerfil();
});