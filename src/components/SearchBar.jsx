
  export default function SearchBar({ search, setSearch, limit, setLimit }) {
    return (
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full text-gray-800"
        />
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border p-2 rounded text-gray-800"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      </div>
    );
  }
  