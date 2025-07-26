import { RxCross2 } from "react-icons/rx";
import { MdFileUpload } from "react-icons/md";
import { useState } from "react";

function EditBlog({ setEditPlan }) {
  const [blogName, setBlogName] = useState("Write Blog Name");
  const [blogDescription, setBlogDescription] = useState(
    "Description About Project Description About Project Description About Project Description About Project Description Project Description About Project Project Description ."
  );

  const handleClick = () => {
    setEditPlan(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute z-10 w-full h-full"></div>
      <div className="absolute z-20 w-full h-fit flex justify-center top-20">
        <div className="bg-[#282932] w-[370px] rounded-xl text-white py-8 px-6">
          <div className="flex items-center justify-between">
            <p>Edit Blog</p>
            <p className="cursor-pointer" onClick={handleClick}>
              <RxCross2 />
            </p>
          </div>
          <hr className="my-5" />
          <div className=" h-[180px] flex flex-col items-center justify-center bg-[#656666] text-xl rounded-xl cursor-pointer"></div>
          <div className="flex flex-col mt-4 gap-2">
            <label for="Name">Blog Name</label>
            <input
              type="text"
              placeholder="Title (Project Name)"
              id="Name"
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="Description">Blog Description</label>
            <textarea
              placeholder="Write Blog Description ..."
              id="Description"
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
              rows={5}
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
            />
          </div>

          <button className="bg-[#4E92F3] rounded-lg w-full py-4 mt-10">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
