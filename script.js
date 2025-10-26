// 1. Espera o HTML ser completamente carregado antes de rodar o script.
//    Isso é uma boa prática para evitar erros.
document.addEventListener('DOMContentLoaded', function() {

    // 2. Seleciona os elementos HTML que vamos usar e os guarda em variáveis.
    //    Usamos 'const' porque esses valores não vão mudar.
    const botao = document.getElementById('botaoExperiencias');
    const detalhes = document.getElementById('detalhesExperiencias');
    const botaocontato = document.getElementById('contato');


    botao.addEventListener('click', function() {
        
        // 4. Quando o clique acontecer, executa esta função.
        //    A função 'toggle' é muito útil: se a classe 'oculto' existe, ela remove.
        //    Se não existe, ela adiciona.
        detalhes.classList.toggle('oculto');

        // 5. (Bônus) Vamos também mudar o texto do botão.
        if (detalhes.classList.contains('oculto')) {
            // Se os detalhes estão ocultos agora, o botão deve dizer "Mostrar"
            botao.textContent = 'Mostrar Detalhes';
        } else {
            // Se os detalhes estão visíveis, o botão deve dizer "Ocultar"
            botao.textContent = 'Ocultar Detalhes';
        }
    });
});
