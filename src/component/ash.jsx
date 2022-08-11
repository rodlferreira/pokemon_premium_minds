import React from "react";
import "../component/style.css";

function Ash() {
  var totalPokemons = 1;

  var pokemonsEsquerda = 0;
  var pokemonsDireita = 0;

  var pokemonsCima = 0;
  var pokemonsBaixo = 0;

  var andarCima = 0;
  var andarBaixo = 0;

  var andarEsquerda = 0;
  var andarDireita = 0;

  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 37:
        if ((e = 37)) {
          andarEsquerda = andarEsquerda + 1;
          andarDireita = andarDireita - 1;
          console.log("Você andou para Esquerda:" + andarEsquerda + " vezes");
        }

        if (andarEsquerda > pokemonsEsquerda) {
          pokemonsEsquerda = pokemonsEsquerda + 1;
          totalPokemons = totalPokemons + 1;

          console.log(
            "Foi capturado mais um pokemon. Você possuí um total de " +
              totalPokemons +
              " Pokemons"
          );
        }

        break;

      case 38:
        if ((e = 38)) {
          andarCima = andarCima + 1;
          andarBaixo = andarBaixo - 1;
          console.log("Você andou para Cima:" + andarCima + " vezes");
        }

        if (andarCima > pokemonsCima) {
          pokemonsCima = pokemonsCima + 1;
          totalPokemons = totalPokemons + 1;

          console.log(
            "Foi capturado mais um pokemon. Você possuí um total de " +
              totalPokemons +
              " Pokemons"
          );
        }

        break;

      case 39:
        if ((e = 39)) {
          andarDireita = andarDireita + 1;
          andarEsquerda = andarEsquerda - 1;
          console.log("Você andou para Direita:" + andarDireita + " vezes");
        }

        if (andarDireita > pokemonsDireita) {
          pokemonsDireita = pokemonsDireita + 1;
          totalPokemons = totalPokemons + 1;
          console.log(
            "Foi capturado mais um pokemon. Você possuí um total de " +
              totalPokemons +
              " Pokemons"
          );
        }

        break;
      case 40:
        if ((e = 40)) {
          andarBaixo = andarBaixo + 1;
          andarCima = andarCima - 1;
          console.log("Você andou para Baixo:" + andarBaixo + " vezes");
        }

        if (andarBaixo > pokemonsBaixo) {
          pokemonsBaixo = pokemonsBaixo + 1;
          totalPokemons = totalPokemons + 1;
          console.log(
            "Foi capturado mais um pokemon. Você possuí um total de " +
              totalPokemons +
              " Pokemons"
          );
        }

        break;
    }
  });

  return (
    <div>
      <div className="circle">
        <h2>Ash</h2>
      </div>
    </div>
  );
}
export default Ash;
