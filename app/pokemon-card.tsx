type PokemonCardProps = {
  canMegaEvolve?: boolean
  name: string
  src: string
  type: string
  move: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  canMegaEvolve = false,
  name,
  src,
  type,
  move,
}) => {
  return (
    <section className="max-w-md rounded overflow-hidden shadow-xl bg-gray-100 m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img
        className="w-full h-48 object-cover"
        src={src}
        alt={`Image of ${name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-gray-700">{name}</div>
        <ul>
          <li>
            <b className="text-red-500">Type:</b>
            <span className="ml-2 text-gray-600">{type}</span>
          </li>
          <li>
            <b className="text-red-500">Special Move:</b>
            <span className="ml-2 text-gray-600">{move}</span>
          </li>
          <li>
            <b className="text-red-500">Mega Evolve:</b>
            <span className="ml-2 text-gray-600">
              {canMegaEvolve ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PokemonCard
