"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.span ref={scope} className="relative block h-[130px] font-normal">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
        <motion.span
          className="text-white absolute bottom-2 right-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          - Malcolm X
        </motion.span>
      </motion.span>
    );
  };

  return (
    <p className="text-[30px] max-w-[950px] text-center mt-32">
      {renderWords()}
    </p>
  );
};
