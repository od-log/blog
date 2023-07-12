import React from 'react'

type Props = {
  categories: string[];
  filterCategory: string;
  setFilterCategory: (category: string) => void;
}

export default function Categories({categories, filterCategory, setFilterCategory}: Props) {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-bold border-b border-sky-500'>Category</h2>
      <ul className='flex flex-col'>
        {categories.map((category) => {
          return (
            <li className={`cursor-pointer  hover:text-sky-500 ${filterCategory === category && `text-sky-500`}`}
              key={category}
              onClick={() => { setFilterCategory(category) }}>
              {category}
            </li>
          )
        })}
    </ul>
    </section>
  )
}
