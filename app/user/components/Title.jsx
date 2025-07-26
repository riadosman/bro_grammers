function Title({ icon, name, description }) {
  return (
    <div className="w-full text-center relative my-8">
      <div className={icon}></div>
      <p className="text-light_text">{name}</p>
      <h3 className="md:text-4xl text-xl font-semibold md:leading-[56px] w-[275px] md:w-[472px] mx-auto">
        {description}
      </h3>
    </div>
  );
}

export default Title;
