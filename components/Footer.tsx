const Footer = () => {
  return (
    <footer className="bg-muted py-16 text-muted-foreground">
      <div className="mx-auto px-4 xl:px-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-2 text-lg font-semibold">
              Wisepen Language Institute
            </h4>
            <p>
              경기도 고양시 일산서구 일산로 562 신일산연합상가 4층 409,410호
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold">Contact</h4>
            <p>Phone: 010-3020-2807</p>
            <p>Email: Arnold@wisepenenglish.com</p>
          </div>
          <div />
          <div />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
