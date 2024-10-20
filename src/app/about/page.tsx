import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        className="h-full w-full object-cover"
        src="/images/buildings.jpg"
        width={800}
        height={450}
        alt="overview"
      />
      <h1>About</h1>
    </div>
  );
};

export default page;
