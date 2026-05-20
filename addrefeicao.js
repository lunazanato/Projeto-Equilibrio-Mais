document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.refeicoes-container');

    // Usando delegação de eventos para escutar cliques no container
    container.addEventListener('click', (event) => {
        
        // 1. AÇÃO DE ADICIONAR REFEIÇÃO
        // O .closest() garante que funcione mesmo se clicar no ícone interno do botão
        const btnAdicionar = event.target.closest('.btn-adicionar');
        if (btnAdicionar) {
            // Encontra a refeição correspondente ao botão clicado
            const refeicaoAtual = btnAdicionar.closest('.refeicao');
            
            // Clona o bloco completo da refeição
            const novaRefeicao = refeicaoAtual.cloneNode(true);
            
            // Limpa os valores dos inputs de texto e hora na nova tabela
            novaRefeicao.querySelectorAll('input').forEach(input => input.value = '');
            
            // Reseta o select para a primeira opção (Café da manhã)
            const select = novaRefeicao.querySelector('.select-refeicao');
            if (select) select.selectedIndex = 0;

            // Insere a nova tabela exatamente após (abaixo) a tabela clicada
            refeicaoAtual.insertAdjacentElement('afterend', novaRefeicao);
        }

        // 2. AÇÃO DE REMOVER REFEIÇÃO
        const btnRemover = event.target.closest('.btn-remover');
        if (btnRemover) {
            const totalTabelas = document.querySelectorAll('.refeicao').length;

            // Evita que o usuário delete a última tabela restante na tela
            if (totalTabelas > 1) {
                const refeicaoAtual = btnRemover.closest('.refeicao');
                refeicaoAtual.remove();
            } else {
                alert('Você deve manter pelo menos uma refeição na tela!');
            }
        }
    });
});