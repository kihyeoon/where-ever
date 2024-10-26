import Image from "next/image";

interface Props {
  type?: "color" | "mono" | "dark";
}

const Logo = ({ type = "color" }: Props) => {
  const imgSrc = {
    color: "/images/logo-color.png",
    mono: "/images/logo-mono.png",
    dark: "/images/logo-dark.png",
  }[type];

  return (
    <Image
      src={imgSrc}
      alt="Wherever logo"
      width={180}
      height={30}
      priority
      // className={`${isScrolled ? "" : "brightness-[100]"}`}
    />
  );
};

export default Logo;
