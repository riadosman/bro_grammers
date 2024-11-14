function Title({ icon, name, description }) {
  return (
    <div className="w-full text-center relative my-8">
      <div className={icon}></div>
      <p className="text-light_text">{name}</p>
      <h3 className="text-4xl font-semibold leading-[56px] w-[472px] mx-auto">
        {description}
      </h3>
    </div>
  );
}

export default Title;
