import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  name: string;
  style: string;
  image: string | StaticImageData;
};

const SkillProp = ({ image, text, name, style }: Props) => {
  return (
    <section className="w- pl-8">
      <Image src={image} alt={text} className={`${style} h-11 w-11`} />
      <span className="text-center pl-1">{name}</span>
    </section>
  );
};

export default SkillProp;
