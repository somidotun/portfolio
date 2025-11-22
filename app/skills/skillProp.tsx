import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  name: string;
  style: string;
  image: string | StaticImageData;
};

const SkillProp = ({ image, text, name, style }: Props) => {
  return (
    <section className=" pl-8">
      <Image src={image} alt={text} className={`${style} h-10 w-10`} />
      <span className="text-center pl-1">{name}</span>
    </section>
  );
};

export default SkillProp;
