import Image from "next/image";

interface WithImageCardProps {
  src: string;
  title: string;
  description: string;
}

export const WithImageCard = ({
  src,
  title,
  description,
}: WithImageCardProps) => {
  return (
    <article>
      <Image
        className="aspect-square w-full rounded-2xl object-cover opacity-80"
        src={src}
        alt={title}
        width={450}
        height={450}
      />
      <h1 className="mt-4 text-xl leading-tight tracking-tight">{title}</h1>
      <p className="mt-2 font-light leading-tight tracking-tight">
        {description}
      </p>
    </article>
  );
};
