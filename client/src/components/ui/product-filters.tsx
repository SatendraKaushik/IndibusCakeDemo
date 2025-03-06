import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface ProductFiltersProps {
  onPriceRangeChange: (range: [number, number]) => void;
  onSortChange: (sort: string) => void;
}

export const ProductFilters = ({ onPriceRangeChange, onSortChange }: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [activeSort, setActiveSort] = useState("featured");

  const handlePriceChange = (newValue: number[]) => {
    setPriceRange(newValue);
    onPriceRangeChange(newValue as [number, number]);
  };

  const handleSortChange = (sort: string) => {
    setActiveSort(sort);
    onSortChange(sort);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1B1B1B] border border-[#DAA520]/20 rounded-lg p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="text-[#F5DEB3] font-playfair mb-4 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Price Range
          </h3>
          <Slider
            defaultValue={[0, 100]}
            max={200}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-[#F5DEB3] opacity-80">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-[#DAA520]/20 rounded-lg text-[#F5DEB3] hover:border-[#DAA520] transition-colors">
              Sort by {activeSort}
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1B1B1B] border-[#DAA520]/20">
              <DropdownMenuItem
                onClick={() => handleSortChange("featured")}
                className="text-[#F5DEB3] hover:bg-[#DAA520]/20 cursor-pointer"
              >
                Featured
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSortChange("price-asc")}
                className="text-[#F5DEB3] hover:bg-[#DAA520]/20 cursor-pointer"
              >
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSortChange("price-desc")}
                className="text-[#F5DEB3] hover:bg-[#DAA520]/20 cursor-pointer"
              >
                Price: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.div>
  );
};
