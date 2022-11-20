const checkbox = document.getElementById('checkbox');
const variavel = document.querySelector('.descricao-variavel');

checkbox.addEventListener('click', () => {
    check();
});

function check() {
    if (!checkbox.checked) {
        variavel.innerHTML = 'Para ver anúncios personalizados com base nos seus interesses, ative a personalização de anúncios. Quando você ativa a personalização de anúncios, você permite o acesso das pessoas a informações e conteúdos gratuitos na internet, como notícias e meteorologia.'
    } else if (checkbox.checked) {
        variavel.innerHTML = 'Se você optar por desativar a personalização de anúncios, a Criteo não mostrará mais anúncios com base nos seus interesses. Em vez disso, você verá anúncios que podem não ser relevantes ou úteis.';
    }
};