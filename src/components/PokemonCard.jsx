import Link from "next/link";

export default function PokemonCard({ name, id }) {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="border p-4 rounded-lg text-center hover:bg-gray-100 hover:text-black hover:scale-105 transition-all cursor-pointer">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="w-25 h-25 mx-auto"
        />
        <h3 className="text-lg font-semibold mt-2 capitalize">{name}</h3>
      </div>
    </Link>
  );
}
