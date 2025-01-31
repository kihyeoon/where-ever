"use client";

import { motion } from "motion/react";

interface ArticleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Article = ({ title, description, children, className }: ArticleProps) => {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true, amount: "all" }}
    >
      <h1 className="article-title">{title}</h1>
      {description && <p className="article-description">{description}</p>}
      {children}
    </motion.article>
  );
};

export default Article;
