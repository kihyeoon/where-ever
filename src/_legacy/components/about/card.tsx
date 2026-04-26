import Image from "next/image";

interface CardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const Card = ({ title, description, imageSrc, imageAlt }: CardProps) => {
  return (
    <article className="relative flex h-full w-[calc(100vw-2rem)] flex-col items-center justify-around overflow-hidden rounded-3xl bg-neutral-800 p-8 md:flex-row md:justify-between md:py-16 lg:justify-around">
      <div className="flex flex-col gap-4 text-center md:min-w-fit md:max-w-[50%] md:translate-x-8 md:text-left">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="text-pretty break-keep font-semibold text-neutral-400 md:text-lg">
          {description}
        </p>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={700}
        height={700}
        objectFit="contain"
        className="h-auto w-full md:max-w-[50%]"
      />
    </article>
  );
};

export default Card;
