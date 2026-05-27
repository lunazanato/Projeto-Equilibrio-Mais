document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

        
        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const user = document.getElementById('user').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmar = document.getElementById('confirmar').value.trim();

        
        if (!nome || !sobrenome || !user || !email || !senha || !confirmar) {
            alert('Atenção: Todos os campos são obrigatórios!');
            return; 
        }

        
        if (senha !== confirmar) {
            alert('Erro: A confirmação de senha não confere com a senha digitada.');
            return; 
        }

        
        window.location.href = 'home.html';
    });
});