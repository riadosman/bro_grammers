import { RxCross2 } from "react-icons/rx";
import { MdFileUpload } from "react-icons/md";

function AddPrompt({ setShowPromp }) {
  const handleClick = () => {
    setShowPromp(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute z-10 w-full h-full"></div>
      <div className="absolute z-20 w-full h-fit flex justify-center top-20">
        <div className="bg-[#282932] w-[370px] rounded-xl text-white py-8 px-6">
          <div className="flex items-center justify-between">
            <p>Add New Plan</p>
            <p className="cursor-pointer" onClick={handleClick}>
              <RxCross2 />
            </p>
          </div>
          <hr className="my-5" />
          <div className="border-2 border-dashed h-[180px] flex flex-col items-center justify-center text-[#4E92F3] text-xl rounded-xl cursor-pointer">
            <MdFileUpload className="w-16 h-16" />
            <p>Upload Image</p>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label for="Name">Project Name</label>
            <input
              type="text"
              placeholder="Title (Project Name)"
              id="Name"
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label for="Link">Project Link</label>
            <input
              type="text"
              placeholder="Write Project Link"
              id="Link"
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label for="Description">Project Description</label>
            <textarea
              placeholder="Write Project Description ..."
              id="Description"
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
              rows={5} // Set the number of rows for height
            />
          </div>
          <button className="bg-[#4E92F3] rounded-lg w-full py-4 mt-10">
            Add Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPrompt;
