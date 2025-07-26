"use client";
import { useState } from "react";
import Image from "next/image";
import Blogs_card from "../../../user/assets/blogs_card.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddBlog from "../../components/AddBlog";
import EditBlog from "../../components/EditBlog";

function Blogs() {
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
      {showPromp && <AddBlog setShowPromp={setShowPromp} />}
      {showEditPromp && <EditBlog setEditPlan={setShowEditPromp} />}
      <div className="container py-10">
        <div className="flex items-center justify-around gap-5 flex-wrap">
          <div
            onClick={handleClick}
            className="cursor-pointer text-2xl border-2 border-dashed border-white text-white w-[600px] flex items-center justify-center h-[245px] rounded-3xl"
          >
            + Add New Blog
          </div>
          <div className="h-[245px] w-[600px] bg-[#282932] rounded-3xl px-5 py-3 flex items-center gap-4 text-white">
            <Image src={Blogs_card} alt="blogs_card" width={250} height={200} />
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold leading-4">
                Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id
                justo modo facilisis.
              </p>
              <p className="text-[10px] opacity-75 leading-4">
                Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
                laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
                hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
                commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
              </p>
              <div className="flex items-end justify-between">
                <button className="flex items-center bg-main_blue rounded-md p-3">
                  Read More <FaArrowRight />
                </button>
                <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
                  <p
                    className="text-[#1490D2] cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaRegEdit />
                  </p>
                  <p className="text-[#EF3636] cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[245px] w-[600px] bg-[#282932] rounded-3xl px-5 py-3 flex items-center gap-4 text-white">
            <Image src={Blogs_card} alt="blogs_card" width={250} height={200} />
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold leading-4">
                Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id
                justo modo facilisis.
              </p>
              <p className="text-[10px] opacity-75 leading-4">
                Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
                laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
                hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
                commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
              </p>
              <div className="flex items-end justify-between">
                <button className="flex items-center bg-main_blue rounded-md p-3">
                  Read More <FaArrowRight />
                </button>
                <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
                  <p
                    className="text-[#1490D2] cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaRegEdit />
                  </p>
                  <p className="text-[#EF3636] cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[245px] w-[600px] bg-[#282932] rounded-3xl px-5 py-3 flex items-center gap-4 text-white">
            <Image src={Blogs_card} alt="blogs_card" width={250} height={200} />
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold leading-4">
                Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id
                justo modo facilisis.
              </p>
              <p className="text-[10px] opacity-75 leading-4">
                Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
                laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
                hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
                commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
              </p>
              <div className="flex items-end justify-between">
                <button className="flex items-center bg-main_blue rounded-md p-3">
                  Read More <FaArrowRight />
                </button>
                <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
                  <p
                    className="text-[#1490D2] cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaRegEdit />
                  </p>
                  <p className="text-[#EF3636] cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[245px] w-[600px] bg-[#282932] rounded-3xl px-5 py-3 flex items-center gap-4 text-white">
            <Image src={Blogs_card} alt="blogs_card" width={250} height={200} />
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold leading-4">
                Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id
                justo modo facilisis.
              </p>
              <p className="text-[10px] opacity-75 leading-4">
                Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
                laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
                hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
                commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
              </p>
              <div className="flex items-end justify-between">
                <button className="flex items-center bg-main_blue rounded-md p-3">
                  Read More <FaArrowRight />
                </button>
                <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
                  <p
                    className="text-[#1490D2] cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaRegEdit />
                  </p>
                  <p className="text-[#EF3636] cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[245px] w-[600px] bg-[#282932] rounded-3xl px-5 py-3 flex items-center gap-4 text-white">
            <Image src={Blogs_card} alt="blogs_card" width={250} height={200} />
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold leading-4">
                Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id
                justo modo facilisis.
              </p>
              <p className="text-[10px] opacity-75 leading-4">
                Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
                laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
                hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
                commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
              </p>
              <div className="flex items-end justify-between">
                <button className="flex items-center bg-main_blue rounded-md p-3">
                  Read More <FaArrowRight />
                </button>
                <div className="flex items-center justify-end self-end w-fit bg-white rounded-[41px] py-1 px-3 text-lg">
                  <p
                    className="text-[#1490D2] cursor-pointer"
                    onClick={handleEdit}
                  >
                    <FaRegEdit />
                  </p>
                  <p className="text-[#EF3636] cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
