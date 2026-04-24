'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
  const [selected, setSelected] = useState<string>('All')

  const handleSelect = (category: string) => {
    setSelected(category)
    onCategoryChange(category)
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleSelect(category)}
          className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 ${
            selected === category
              ? 'bg-[#d4af37] text-white'
              : 'bg-[#1a1a1a] border border-[#333333] text-white hover:border-[#d4af37]/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
