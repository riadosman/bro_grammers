function Hero({ title, details, descriptions }) {
  return (
    <div className="bg-[#F7F9FC] text-center py-14 px-40 h-[80vh]">
      <p className="text-light_text text-xl font-semibold">{title}</p>
      <p className="text-4xl font-semibold -tracking-wide my-8">{details}</p>
      <p className="text-xl leading-9 font-medium text-hero_text">
        {descriptions}
      </p>
    </div>
  );
}

export default Hero;
