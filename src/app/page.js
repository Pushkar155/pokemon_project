"use client";
import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      const data = await res.json();
      if (data.results) {
        setPokemons(data.results);
        setLoading(false);
      }
    }
    fetchPokemons();
  }, [limit]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
      />
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-15 h-15 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon.name} id={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
