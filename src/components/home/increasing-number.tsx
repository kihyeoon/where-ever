import { animate, motion, useMotionValue, useTransform } from "framer-motion";

interface IncreasingNumberProps {
  value: number;
  duration?: number;
  toFixed?: number;
  className?: string;
}

const IncreasingNumber = ({
  value,
  duration = 3,
  toFixed = 0,
  className,
}: IncreasingNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Number(latest.toFixed(toFixed)).toLocaleString(),
  );

  const startAnimation = () => {
    animate(count, value, { duration, ease: "circOut" });
  };

  return (
    <motion.span onViewportEnter={startAnimation} className={className}>
      {rounded}
    </motion.span>
  );
};

export default IncreasingNumber;
