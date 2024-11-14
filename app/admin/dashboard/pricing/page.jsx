"use client";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import AddPlan from "./../../components/AddPlan";
import EditPrompt from "./../../components/EditPrompt";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Green_Tick from "../../../user/assets/icons/greenTick.png";
import EditPlan from "../../components/EditPlan";

function PricingDashboard() {
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
      {showPromp && <AddPlan setShowPromp={setShowPromp} />}
      {showEditPromp && <EditPlan setEditPlan={setShowEditPromp} />}
      <div className="container py-10 px-5 flex items-center justify-between flex-wrap gap-6">
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-white w-[388px] h-[651px] rounded-[32px] flex items-center justify-center cursor-pointer"
        >
          <p className="text-white flex items-center text-2xl gap-4">
            <FaPlus />
            Add New Plan
          </p>
        </div>
        <div className="relative h-[650px] w-[388px] rounded-3xl bg-light_text text-white p-8 flex flex-col gap-4">
          <div className="flex items-center justify-end self-end absolute left-40 top-3 bg-[#282932] rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">your Plan </p>
            <div className="rounded-[40px] py-3 px-5 text-black bg-white">
              Special
            </div>
          </div>
          <p className="text-4xl font-semibold my-4">Fixed Price</p>
          <p className="leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Everything on Basic plan
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 1,000,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Premium support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 10 team members
          </p>
          <button className="bg-white text-light_text w-full rounded-[40px] py-6 text-lg">
            Contact Us
          </button>
        </div>
        <div className="h-[650px] w-[388px] bg-white rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <div className="flex items-center justify-end self-end absolute bg-[#282932] rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
        <div className="h-[650px] w-[388px] bg-white rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <div className="flex items-center justify-end self-end absolute bg-[#282932] rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
        <div className="h-[650px] w-[388px] bg-white rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <div className="flex items-center justify-end self-end absolute bg-[#282932] rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
        <div className="h-[650px] w-[388px] bg-white rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <div className="flex items-center justify-end self-end absolute bg-[#282932] rounded-[41px] py-1 px-3 text-lg">
            <p className="text-[#1490D2] cursor-pointer" onClick={handleEdit}>
              <FaRegEdit />
            </p>
            <p className="text-[#EF3636] cursor-pointer">
              <MdDelete />
            </p>
          </div>
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default PricingDashboard;
