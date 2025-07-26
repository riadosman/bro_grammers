import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function ViewMore() {
  return (
    <button className="flex items-center bg-light_text text-white rounded-xl mx-auto text-base p-2 self-end my-8">
      View More <MdKeyboardDoubleArrowRight />
    </button>
  );
}

export default ViewMore;
