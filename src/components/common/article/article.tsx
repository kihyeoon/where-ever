interface ArticleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const Article = ({ title, subtitle, description, children }: ArticleProps) => {
  return (
    <article className="px-5 pt-36 md:text-center">
      {subtitle && <h2 className="article-sub-title">{subtitle}</h2>}
      <h1 className="article-title">{title}</h1>
      {description && <p className="article-description">{description}</p>}
      {children}
    </article>
  );
};

export default Article;
