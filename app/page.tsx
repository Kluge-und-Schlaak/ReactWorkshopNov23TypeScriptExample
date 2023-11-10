import PokemonCard from "./pokemon-card";

type PokemonType = {
  type: { name: string };
};

type PokemonMove = {
  move: { name: string };
};

type Pokemon = {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: PokemonType[];
  moves: PokemonMove[];
};

async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();

  const pokemonDetails: Pokemon[] = [];
  for (const pokemon of data.results) {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonDetail: Pokemon = await pokemonResponse.json();
    pokemonDetails.push(pokemonDetail);
  }

  return pokemonDetails;
}

const Gallery: React.FC = async () => {
  const pokemons = await getPokemons();

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => {
          const imageSrc = pokemon.sprites.front_default; // Or another sprite property
          const type = pokemon.types
            .map((typeInfo) => typeInfo.type.name)
            .join('/');
          const move =
            pokemon.moves.length > 0 ? pokemon.moves[0].move.name : 'No move';

          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              src={imageSrc}
              type={type}
              move={move}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;