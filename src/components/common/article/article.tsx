interface ArticleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Article = ({ title, description, children, className }: ArticleProps) => {
  return (
    <article className={className}>
      <h1 className="article-title">{title}</h1>
      {description && <p className="article-description">{description}</p>}
      {children}
    </article>
  );
};

export default Article;
