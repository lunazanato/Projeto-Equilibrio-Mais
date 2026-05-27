document.addEventListener("DOMContentLoaded", () => {
    const boasVindas = document.getElementById("boas-vindas");
    const perfilNome = document.getElementById("perfil-nome");
    const perfilEmailText = document.getElementById("perfil-email");

    const btnEditar = document.getElementById("btn-editar");
    const btnSalvar = document.getElementById("btn-salvar");

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

    function alternarBloqueioCampos(bloquear) {
        Object.values(campos).forEach(campo => {
            if (campo) campo.disabled = bloquear;
        });
    }

    function carregarDadosPerfil() {
        const dadosSalvos = localStorage.getItem("perfilUsuario");

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);

            if (dados.nomeCompleto) campos.nomeCompleto.value = dados.nomeCompleto;
            if (dados.nomeUsuario) campos.nomeUsuario.value = dados.nomeUsuario;
            if (dados.genero) campos.genero.value = dados.genero;
            if (dados.pais) campos.pais.value = dados.pais;
            if (dados.lingua) campos.lingua.value = dados.lingua;
            if (dados.email) campos.email.value = dados.email;
            if (dados.telefone) campos.telefone.value = dados.telefone;
            if (dados.senha) campos.senha.value = dados.senha;

            boasVindas.textContent = `Bem vindo(a), ${dados.nomeUsuario}!`;
            perfilNome.textContent = dados.nomeUsuario;
            perfilEmailText.textContent = dados.email;
        }

        alternarBloqueioCampos(true);
    }

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

        localStorage.setItem("perfilUsuario", JSON.stringify(dadosParaSalvar));

        boasVindas.textContent = `Bem vindo(a), ${dadosParaSalvar.nomeUsuario}!`;
        perfilNome.textContent = dadosParaSalvar.nomeUsuario;
        perfilEmailText.textContent = dadosParaSalvar.email;

        alternarBloqueioCampos(true);

        alert("Alterações salvas com sucesso!");
    }

    btnEditar.addEventListener("click", () => {
        alternarBloqueioCampos(false);
        campos.nomeCompleto.focus();
    });

    btnSalvar.addEventListener("click", salvarDadosPerfil);

    if (campos.telefone) {
        campos.telefone.addEventListener("input", (event) => {
            let valor = event.target.value;

            valor = valor.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            if (valor.length > 10) {
                valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
            } else if (valor.length > 6) {
                valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
            } else if (valor.length > 2) {
                valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
            } else if (valor.length > 0) {
                valor = valor.replace(/^(\d{0,2})$/, "($1");
            }

            event.target.value = valor;
        });
    }

    carregarDadosPerfil();
});