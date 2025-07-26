import { RxCross2 } from "react-icons/rx";
import { MdFileUpload } from "react-icons/md";
import { useState } from "react";

function EditPrompt({ setShowEditPromp }) {
  const [projectName, setProjectName] = useState("Write Project Name");
  const [projectLink, setProjectLink] = useState("WWW.Ali.com");
  const [projectDescription, setProjectDescription] = useState(
    "Description About Project Description About Project Description About Project Description About Project Description Project Description About Project Project Description ."
  );
  const handleClick = () => {
    setShowEditPromp(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm  absolute z-10 w-full h-full"></div>
      <div className="absolute z-20 w-full h-full flex items-center justify-center">
        <div className="bg-[#282932] w-[370px] rounded-xl text-white py-8 px-6">
          <div className="flex items-center justify-between">
            <p>Edit Project</p>
            <p className="cursor-pointer" onClick={handleClick}>
              <RxCross2 />
            </p>
          </div>
          <hr className="my-5" />
          <div className=" h-[180px] flex flex-col items-center justify-center bg-[#656666] text-xl rounded-xl cursor-pointer"></div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="Name">Project Name</label>
            <input
              type="text"
              placeholder="Title (Project Name)"
              id="Name"
              value={projectName} // controlled input value
              onChange={(e) => setProjectName(e.target.value)} // update state on change
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
            />
          </div>

          {/* Project Link Input */}
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="Link">Project Link</label>
            <input
              type="text"
              placeholder="Write Project Link"
              id="Link"
              value={projectLink} // controlled input value
              onChange={(e) => setProjectLink(e.target.value)} // update state on change
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
            />
          </div>

          {/* Project Description Input */}
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="Description">Project Description</label>
            <textarea
              placeholder="Write Project Description ..."
              id="Description"
              value={projectDescription} // controlled input value
              onChange={(e) => setProjectDescription(e.target.value)} // update state on change
              className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
              rows={5}
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

export default EditPrompt;
