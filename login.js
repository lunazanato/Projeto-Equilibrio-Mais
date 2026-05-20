document.getElementById('form').addEventListener('submit', function(event) {
    // Impede o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    const usuarioInput = document.getElementById('usuarioEmail').value.trim();
    const senhaInput = document.getElementById('senha').value.trim();

    // O 'required' do HTML já barra campos vazios, mas essa validação garante via JS
    if (usuarioInput === "" || senhaInput === "") {
        alert("Por favor, preencha todos os campos para prosseguir.");
    } else {
        // Se ambos estiverem preenchidos, redireciona para a home
        window.location.href = "home.html";
    }
});