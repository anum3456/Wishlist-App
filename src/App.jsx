import { useState } from "react";

const categories = ["All", "Electronics", "Fashion", "Home", "Books"];

const categoryColors = {
  Electronics: "text-blue-600 bg-blue-100",
  Fashion: "text-pink-600 bg-pink-100",
  Home: "text-purple-600 bg-purple-100",
  Books: "text-yellow-600 bg-yellow-100",
};

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "Fashion",
  });

  // ➕ Add Item
  const addItem = () => {
    if (!form.title.trim() || !form.price) return;

    const newItem = {
      id: Date.now(),
      ...form,
      liked: false,
    };

    setItems((prev) => [newItem, ...prev]);

    setForm({
      title: "",
      price: "",
      image: "",
      category: "Fashion",
    });
  };

  // ❤️ Like toggle
  const toggleLike = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  // ❌ Delete item
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔍 Filter
  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen">

      {/* 🌸 NAVBAR */}
      <div className="navbar flex justify-between items-center px-6 py-3">
        <h1 className="text-lg font-bold text-pink-600">
          My Wishlist
        </h1>

        <input
          className="px-3 py-1 border rounded-md text-sm"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🌸 FORM */}
      <div className="glass-card max-w-6xl mx-auto mt-6 p-4 grid md:grid-cols-5 gap-3">

        <input
          className="border p-2 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="border p-2 rounded"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          className="border p-2 rounded"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <select
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          {categories.slice(1).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button onClick={addItem} className="btn-accent">
          Add
        </button>
      </div>

      {/* 🌸 CATEGORY FILTER */}
      <div className="max-w-6xl mx-auto mt-6 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm border ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🌸 GRID */}
      <div className="max-w-6xl mx-auto mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 mt-10">
            No wishes yet  Add something you love
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className="wish-card">

              {/* IMAGE */}
              <div className="h-48 relative">
                {item.image ? (
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}

                {/* ❤️ LIKE */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-2 right-2 text-xl heart"
                >
                  {item.liked ? "💖" : "🤍"}
                </button>
              </div>

              {/* INFO */}
              <div className="p-4 space-y-2">
                <h2 className="text-sm font-medium">{item.title}</h2>

                <p className="text-pink-600 font-bold">
                  Rs. {item.price}
                </p>

                <span
                  className={`text-xs px-2 py-1 rounded ${
                    categoryColors[item.category]
                  }`}
                >
                  {item.category}
                </span>

                <div className="flex justify-end">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-400 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {/* 🌸 FOOTER */}
      <div className="text-center mt-12 text-xs text-pink-400">
        Made by Anum using React 
      </div>

    </div>
  );
}