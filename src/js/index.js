/*
Quando clicar no pokemon na listagem, temos que esconder o cartão do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado.

*/

//Criar 2 variáveis para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com o evento do clique feito pelo usuário na listagem dos pokemons

    pokemon.addEventListener('click', () => {
    
        // remover a classe "aberto" só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar no pokemon da listagem, pegamos o ID desse pokemon para saber qual cartão mostrar na tela
        const idPokemonSelecionado =  pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir);

        cartaoPokemonParaAbrir.classList.add('aberto')
        
        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        //adicionar a classe ativo 
        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})


