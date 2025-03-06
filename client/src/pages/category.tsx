import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/ui/product-filters";
import { sampleProducts } from "@shared/schema";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Category() {
  const [, params] = useRoute("/category/:name");
  const categoryName = params?.name || "";
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortOption, setSortOption] = useState("featured");

  const categoryDescriptions = {
    signature: "Indulge in our masterfully crafted signature collection, where each creation is a testament to luxury and artisanal excellence.",
    seasonal: "Experience the essence of each season through our carefully curated selection of limited-edition confections."
  };

  const categoryBackgrounds: Record<string, string> = {
    signature: "https://images.unsplash.com/photo-1547047803-fa4eb4613d82",
    seasonal: "https://images.unsplash.com/photo-1562440499-64c9a111f713"
  };

  useEffect(() => {
    let products = sampleProducts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );

    // Apply price filter
    products = products.filter(
      (p) => Number(p.price) >= priceRange[0] && Number(p.price) <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        products.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-desc":
        products.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      default:
        // Featured sort (default order)
        break;
    }

    setFilteredProducts(products);
  }, [categoryName, priceRange, sortOption]);

  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[50vh] relative flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${categoryBackgrounds[categoryName.toLowerCase()]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[#F5DEB3] text-5xl font-playfair mb-4"
          >
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5DEB3] opacity-80 max-w-2xl mx-auto"
          >
            {categoryDescriptions[categoryName.toLowerCase()]}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-[#DAA520] mx-auto mt-6"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <ProductFilters
          onPriceRangeChange={setPriceRange}
          onSortChange={setSortOption}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[#F5DEB3] text-xl mb-4">
              No products found with the current filters
            </p>
            <p className="text-[#F5DEB3] opacity-80">
              Try adjusting your filters or browse our other collections
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}