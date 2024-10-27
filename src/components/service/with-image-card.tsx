import Image from "next/image";

export function WithImageCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="">
      <Image
        className="aspect-square w-full rounded-2xl object-cover opacity-80"
        src={src}
        alt="place"
        width={450}
        height={450}
      />
      <h1 className="mt-4 text-xl leading-tight tracking-tight">{title}</h1>
      <p className="mt-2 font-light leading-tight tracking-tight">
        {description}
      </p>
    </div>
  );
}
