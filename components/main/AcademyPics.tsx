const images = [
  "/academy-1.webp",
  "/academy-2.webp",
  "/academy-3.webp",
  "/academy-4.webp",
];

const AcademyPics = () => {
  return (
    <section>
      <h6 className="py-16 text-center text-6xl font-medium font-saira text-primary">
        Our academy
      </h6>
      <article className="bg-primary py-24 px-4 md:grid-cols-2 grid gap-8 place-items-center">
        {images.map((image) => (
          <img src={image} key={image} />
        ))}
      </article>
    </section>
  );
};

export default AcademyPics;
