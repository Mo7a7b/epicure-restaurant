import { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import MealCard from '../MealCard.tsx';

interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  slug: string;
}

interface Props {
  dishes: Dish[];
  categories: string[];
}

export default function MenuSection({ dishes, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All'
    ? dishes
    : dishes.filter(d => d.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
        {filteredDishes.length > 0 ? (
          filteredDishes.map(dish => (
            <MealCard key={dish.id} name={dish.name} price={dish.price} description={dish.description} category={dish.category} image={dish.image} slug={dish.slug} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-[#a0a0a0] text-lg">
              No dishes found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}