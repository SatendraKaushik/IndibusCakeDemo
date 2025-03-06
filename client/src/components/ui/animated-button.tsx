import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AnimatedButton = ({ children, className, ...props }: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Button
        className={cn(
          "bg-[#8B4513] text-[#F5DEB3] hover:bg-[#DAA520] transition-all duration-300",
          "before:absolute before:inset-0 before:border before:border-[#DAA520] before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};
