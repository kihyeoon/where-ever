import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Dot = ({ size = "md", className, ...props }: Props) => {
  const sizeClasses = {
    sm: "size-3",
    md: "size-6",
    lg: "size-9",
  };

  return (
    <div
      className={cn(`bg-main-2 rounded-full`, sizeClasses[size], className)}
      {...props}
    ></div>
  );
};

export default Dot;
