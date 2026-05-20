document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Captura o valor digitado no input de e-mail
    const emailInput = document.getElementById('email').value;
    
    // Exibe a mensagem no navegador
    alert(`uma mensagem foi enviada para o e-mail ${emailInput}.`);
});