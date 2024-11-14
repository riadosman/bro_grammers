import { RxCross2 } from "react-icons/rx";
import { MdFileUpload } from "react-icons/md";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

function EditPlan({ setEditPlan }) {
  const [currentStep, setCurrentStep] = useState(1); // To track the current step
  const [planName, setPlanName] = useState("Bla Bla Bla");
  const [expectedMoney, setExpectedMoney] = useState("700$");
  const [planType, setPlanType] = useState("Special");
  const [description, setDescription] = useState(
    "Description About Project Description About Project Description About Project Description About Project Description Project Description About Project Project Description ."
  );

  const handleClick = () => {
    setEditPlan(false);
  };
  const goToNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1); // Go to the next step
    }
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

          {/* Step Indicator */}
          <div className="flex justify-between items-center my-5 text-center">
            <div className="flex items-center mx-auto">
              <div
                className={`w-8 h-8 p-6 flex items-center justify-center ${
                  currentStep === 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 text-white"
                } font-bold rounded-full`}
              >
                1
              </div>
              <div className="w-[64px] h-[6px] rounded-lg bg-gray-500 mx-2"></div>
              <div
                className={`w-8 h-8 p-6 flex items-center justify-center ${
                  currentStep === 2
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 text-white"
                } font-bold rounded-full`}
              >
                2
              </div>
            </div>
          </div>

          {/* Step 1 */}
          {currentStep === 1 && (
            <>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Name">Plan Name</label>
                <input
                  type="text"
                  placeholder="Title (Project Name)"
                  id="Name"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Link">Plan Expected Money</label>
                <input
                  type="text"
                  placeholder="Write Plan Expected Money"
                  id="Link"
                  value={expectedMoney}
                  onChange={(e) => setExpectedMoney(e.target.value)}
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="PlanType">Plan Type</label>
                <div className="relative">
                  <select
                    id="PlanType"
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className="border-2 border-[#D0D5DD] bg-[#282932] text-white p-2 rounded-lg w-full outline-none pr-10 appearance-none"
                  >
                    <option value="basic" className="bg-[#282932] text-white">
                      Basic
                    </option>
                    <option
                      value="advanced"
                      className="bg-[#282932] text-white"
                    >
                      Advanced
                    </option>
                  </select>
                  {/* Custom dropdown icon */}
                  <svg
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Description">Description</label>
                <textarea
                  placeholder="Write Project Description ..."
                  id="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                  rows={5} // Set the number of rows for height
                />
              </div>
              <button
                onClick={goToNextStep}
                className="bg-[#4E92F3] rounded-lg w-full py-4 mt-10"
              >
                Next
              </button>
            </>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="flex flex-col">
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Feature">Add Feature</label>
                <input
                  type="text"
                  placeholder="Feature 1"
                  id="Feature"
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                />
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Feature">Add Feature</label>
                <input
                  type="text"
                  placeholder="Feature 2"
                  id="Feature"
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                />
              </div>
              <div className="flex gap-4 relative">
                <div className="flex flex-col mt-4 gap-2 w-full">
                  <label htmlFor="Feature">Add Feature</label>
                  <input
                    type="text"
                    placeholder="Feature 3"
                    id="Feature"
                    className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg outline-none"
                  />
                </div>
                <div className="text-[#EF3636] bg-white p-2 rounded-full cursor-pointer h-fit absolute right-0 top-10">
                  <RiDeleteBinLine />
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="Feature">Add Feature</label>
                <input
                  type="text"
                  placeholder="Feature 4"
                  id="Feature"
                  className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full outline-none"
                />
              </div>
              <p className="flex self-end text-light_text cursor-pointer text-sm items-center mt-4">
                <IoIosAdd />
                Add New Feature
              </p>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="border-2 text-light_text w-full border-light_text rounded-lg py-4 outline-none"
                >
                  Back
                </button>
                <button className="bg-light_text border-light_text border-2 w-full rounded-lg py-4">
                  Add Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditPlan;
