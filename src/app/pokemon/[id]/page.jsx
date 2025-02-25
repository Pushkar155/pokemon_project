import { Shield, Bolt, Swords, Star } from "lucide-react";

export default async function PokemonDetailPage({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <div className="flex flex-col justify-center items-start border-2 border-gray-300 rounded-xl p-8 shadow-lg shadow-gray-500 bg-gray-800">
        <h1 className="text-3xl font-bold capitalize mb-4 flex items-center gap-2">
          <Star size={28} /> {pokemon.name}
        </h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 h-40 mb-4 drop-shadow-lg"
        />
        <p className="text-lg mb-2">
          <strong>Type:</strong>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
        <p className="text-lg mb-2">
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </p>
        <p className="text-lg font-semibold mb-2">Stats:</p>
        <ul className="space-y-2">
          {pokemon.stats.map((s) => (
            <li key={s.stat.name} className="flex items-center gap-2">
              {s.stat.name === "hp" && <Shield size={18} />}
              {s.stat.name === "attack" && <Swords size={18} />}
              {s.stat.name === "defense" && <Bolt size={18} />}
              {s.stat.name}:{" "}
              <span className="font-semibold">{s.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
