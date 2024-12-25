document.addEventListener('DOMContentLoaded', function () {
    const confirmarPedidoBtn = document.getElementById('confirmar-pedido');
    const decrementoBtn = document.getElementById('decremento');
    const incrementoBtn = document.getElementById('incremento');
    const quantidadeInput = document.getElementById('quantidade');

    // Função para atualizar a quantidade com os botões + e -
    decrementoBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantidadeInput.value, 10);
        if (currentValue > 1) {
            quantidadeInput.value = currentValue - 1;
        }
    });

    incrementoBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantidadeInput.value, 10);
        if (currentValue < 10) {
            quantidadeInput.value = currentValue + 1;
        }
    });

    // Redireciona para a página de pagamento ao clicar em "Confirmar Pedido"
    confirmarPedidoBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o envio do formulário

        const sabor = document.getElementById('sabor').value;
        const quantidade = parseInt(quantidadeInput.value, 10);
        const precoUnitario = 10.00; // Valor unitário do produto
        const total = (quantidade * precoUnitario).toFixed(2);

        // Validação para garantir que o sabor foi selecionado
        if (!sabor) {
            alert('Por favor, selecione um sabor.');
            return;
        }

        // Monta a URL com os parâmetros do pedido
        const queryParams = `?sabor=${encodeURIComponent(sabor)}&quantidade=${quantidade}&total=${total}`;
        
        // Redireciona para a página pagamento.html
        window.location.href = `pagamento.html${queryParams}`;
    });
});
