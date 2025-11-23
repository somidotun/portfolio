import Slide from "./swiper";

// type Props = {};

const AboutMe = () => {
  return (
    <section className="px-5 md:px-14 py-3" id="about">
      <h1 className="text-2xl my-5  border-b-2 border-blue-700 w-28 md:w-24">
        About me
      </h1>
      <div className="flex flex-col md:flex-row gap-7">
        {/* image */}

        <Slide />

        {/* text */}
        <div className="md:w-2/3">
          <p>
            A passionate and detail-oriented Frontend Developer with a focus on
            crafting responsive and engaging user interfaces. My expertise lies
            in the modern JavaScript ecosystem, primarily using React, Next.js,
            and TypeScript to build scalable and maintainable web
            applications.{" "}
          </p>

          <p>
            I enjoy the entire process from concept to deployment—translating
            design mockups into functional components, managing application
            state with tools like Zustand, and ensuring a seamless user
            experience with integrated form validation and slick animations via
            Framer Motion and GSAP.{" "}
          </p>

          <p>
            I take pride in writing clean, efficient code and have a proven
            track record of improving performance, such as reducing bundle sizes
            by up to 30%. I am a collaborative team player, experienced in
            remote workflows using Git and CI/CD practices, and i am now eager
            to contribute my skills to a live production project to help achieve
            key product milestones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
