import { DishCategory, dishCategories } from "@/lib/dish-data";

interface MenuFilterProps {
  selectedCategory: DishCategory | "all";
  onSelectCategory: (category: DishCategory | "all") => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories: (DishCategory | "all")[] = ["all", ...dishCategories];

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out
            md:px-6 md:py-3 md:text-base
            ${selectedCategory === category
              ? "bg-orange-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          {category === "all" ? "All Dishes" : category}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;
