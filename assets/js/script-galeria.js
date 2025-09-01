// Dados dos personagens para adicionar dinamicamente
const slytherinBoys = [
    {
        name: "Draco Malfoy",
        image: "/assent/img/young Malfoy.jfif"
    },
    {
        name: "Tom Riddle",
        image: "/assent/img/tom_integrante.png"
    },
    {
        name: "Regulus Arcturus Black",
        image: "/assent/img/regulus_integrante.png"
    }
];

// Função para criar o elemento de cada personagem
function createCharacterCard(character) {
    // Cria um novo elemento 'div'
    const card = document.createElement('div');
    // Adiciona a classe CSS 'character-card' à nova div
    card.classList.add('character-card');

    // Cria o código HTML para a imagem e o nome, usando os dados do objeto 'character'
    const cardContent = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
    `;

    // Adiciona o conteúdo HTML criado dentro da div 'card'
    card.innerHTML = cardContent;

    // Retorna a div completa com o conteúdo
    return card;
}

// Quando o documento estiver completamente carregado, executa esta função
document.addEventListener('DOMContentLoaded', () => {
    // Pega o elemento HTML com o id 'slytherin-boys'
    const slytherinBoysSection = document.getElementById('slytherin-boys');

    // Percorre cada personagem no array 'slytherinBoys'
    slytherinBoys.forEach(character => {
        // Cria um card para o personagem atual
        const cardElement = createCharacterCard(character);
        // Adiciona o card criado como um "filho" da seção 'slytherin-boys'
        slytherinBoysSection.appendChild(cardElement);
    });
});