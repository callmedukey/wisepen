import { TextGenerateEffect } from "./TextGenerateEffect";

const HeroSection = () => {
  return (
    <section className="h-[592px] bg-[url('/library.webp')] bg-cover bg-center bg-no-repeat">
      <div className="bg-primary/50 items-center flex h-full w-full flex-col">
        <h1 className="text-center text-white text-4xl font-saira uppercase flex items-center justify-center font-medium mt-52">
          Welcome to Wisepen Language Institute
        </h1>
        <TextGenerateEffect
          words={`"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
