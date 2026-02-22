import React from "react";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  mainCategories,
  moreCategories,
} from "../constants/categories";

export default function CategoryBar({ selected, onSelect }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="px-10 py-6">
      <div className="flex gap-3 flex-wrap justify-center">

        {mainCategories.map(({ label, icon: Icon }) => (
          <CategoryCard
            key={label}
            label={label}
            Icon={Icon}
            selected={selected}
            onSelect={onSelect}
          />
        ))}

        {/*More Button*/}
        {!showMore && (
          <div
            onClick={() => setShowMore(true)}
            className="w-[100px] h-[80px] rounded-xl border bg-white flex flex-col items-center justify-center cursor-pointer hover:border-[#0aa78f]"
          >
            <FiMoreHorizontal className="text-lg mb-1 text-gray-600" />
            <span className="text-xs">More</span>
          </div>
        )}

        {/* Extra categories side wise display */}
        {showMore &&
          moreCategories.map(({ label, icon: Icon }) => (
            <CategoryCard
              key={label}
              label={label}
              Icon={Icon}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
      </div>
    </section>
  );
}

function CategoryCard({ label, Icon, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(label)}
      className={`w-[100px] h-[80px] rounded-xl border flex flex-col items-center justify-center cursor-pointer transition
        ${
          selected === label
            ? "bg-[#e9faf7] border-[#0aa78f]"
            : "bg-white hover:border-[#0aa78f]"
        }`}
    >
      <Icon
        className={`text-lg mb-1 ${
          selected === label ? "text-[#0aa78f]" : "text-gray-600"
        }`}
      />
      <span className="text-xs">{label}</span>
    </div>
  );
}