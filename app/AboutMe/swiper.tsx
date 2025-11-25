import Dotun from "@/app/images/Dotun.jpg";

import Image from "next/image";

const Slide = () => {
  return (
    <Image
      className="rounded-xl w-96 md:w-60 md:h-[20.9rem]"
      src={Dotun}
      alt="picture of the developer"
    />
  );
};

export default Slide;
