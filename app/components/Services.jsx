import ServicesCard from "./ServicesCard";
import Title from "./Title";

function Services() {
  return (
    <div className="py-14 container">
      <Title
        name="Services"
        description="What benefit you get learning with us"
        icon="service_bg"
      />
      <div className="flex items-center justify-around flex-wrap gap-4 my-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((e, i) => (
          <ServicesCard key={i} id={e} />
        ))}
      </div>
    </div>
  );
}

export default Services;
