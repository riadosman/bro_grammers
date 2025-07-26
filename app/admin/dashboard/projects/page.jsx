"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddPrompt from "./../../components/AddPrompt";
import EditPrompt from "./../../components/EditPrompt";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ProjectsDashboard() {
  const [showPromp, setShowPromp] = useState(false);
  const [showEditPromp, setShowEditPromp] = useState(false);
  const handleClick = () => {
    setShowPromp(true);
  };
  const handleEdit = () => {
    setShowEditPromp(true);
  };
  return (
    <>
      {showPromp && (
        <AddPrompt showPromp={showPromp} setShowPromp={setShowPromp} />
      )}
      {showEditPromp && (
        <EditPrompt
          showEditPromp={showEditPromp}
          setShowEditPromp={setShowEditPromp}
        />
      )}
      <div className="container py-10 px-5 flex items-center justify-between flex-wrap gap-10">
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-white w-[600px] h-[362px] rounded-[32px] flex items-center justify-center cursor-pointer"
        >
          <p className="text-white flex items-center text-2xl gap-4">
            <FaPlus />
            Add New Project
          </p>
        </div>
        <div className="w-[600px] h-[362px] text-white px-8 py-12 rounded-[32px] flex flex-col card">
          <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-4xl">Title (Project Name)</h3>
          </div>
          <p className="leading-9 text-xl my-8">
            Description About Project Description About Project Description
            About Project Description About Project Description Project
            Description About Project Project Description .
          </p>
        </div>
        <div className="w-[600px] h-[362px] text-white px-8 py-12 rounded-[32px] flex flex-col card">
          <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-4xl">Title (Project Name)</h3>
          </div>
          <p className="leading-9 text-xl my-8">
            Description About Project Description About Project Description
            About Project Description About Project Description Project
            Description About Project Project Description .
          </p>
        </div>
        <div className="w-[600px] h-[362px] text-white px-8 py-12 rounded-[32px] flex flex-col card">
          <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-4xl">Title (Project Name)</h3>
          </div>
          <p className="leading-9 text-xl my-8">
            Description About Project Description About Project Description
            About Project Description About Project Description Project
            Description About Project Project Description .
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectsDashboard;
