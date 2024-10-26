import Image from "next/image";

interface Props {
  type?: "color" | "grey";
}

const LogoSmall = ({ type = "color" }: Props) => {
  const imgSrc = {
    color: "/images/logo-small-color.png",
    grey: "/images/logo-small-grey.png",
  }[type];

  return (
    <Image
      src={imgSrc}
      alt="Wherever small logo"
      width={30}
      height={30}
      priority
    />
  );
};

export default LogoSmall;
