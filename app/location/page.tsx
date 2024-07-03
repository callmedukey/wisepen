const page = () => {
  return (
    <main className="lg:py-12 min-h-[100vh] bg-primary flex items-center justify-center flex-col gap-16 py-32">
      <h1 className="text-center font-medium text-4xl font-gmarketSans text-white border-b py-6 w-[300px]">
        오시는길
      </h1>
      <section className="grid lg:grid-cols-[45%_55%] max-w-[1000px] mx-auto px-4 text-white gap-12">
        <article className="font-medium font-gmarketSans space-y-12 py-3 text-center lg:text-left">
          <p className="flex flex-col gap-2">
            <span className="text-3xl">Location</span>
            <span>
              경기도 고양시 일산서구 일산로 562 신일산연합상가 4층 409,410호
            </span>
          </p>
          <p className="flex flex-col gap-2">
            <span className="text-3xl">Contact Us</span>
            <span>010-3020-2807</span>
            <span>Arnold@wisepenenglish.com</span>
          </p>
        </article>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.734292779725!2d126.7657596!3d37.678950799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8ff1898981eb%3A0x66aa184db21f6b07!2z6rK96riw64-EIOqzoOyWkeyLnCDsnbzsgrDshJzqtawg7J287IKw66GcIDU2Mg!5e0!3m2!1sko!2skr!4v1719987485362!5m2!1sko!2skr"
          style={{ border: 0 }}
          allowFullScreen={false}
          className="mx-auto w-full h-[300px] max-h-[400px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
};

export default page;
