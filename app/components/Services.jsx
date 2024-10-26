import ServicesCard from "./ServicesCard";
function Services() {
  return (
    <div className="py-14 container">
      {/* title component */}
      <div className="w-full text-center relative">
        <div className="service_bg"></div>
        <p className="text-light_text">Services</p>
        <h3 className="text-4xl font-semibold leading-[56px]">
          What benefit you get <br /> learning with us
        </h3>
      </div>
      {/* title component end */}
      <div className="flex items-center justify-around flex-wrap gap-4 my-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((e, i) => (
          <ServicesCard key={i} id={e} />
        ))}
      </div>
    </div>
  );
}

export default Services;
