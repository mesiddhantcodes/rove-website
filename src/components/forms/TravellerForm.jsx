import React from "react";
import { addUserAPI } from "../../service/user.service";
import { useEffect, useState } from "preact/hooks";
import toast from "react-hot-toast";
import { getStoppageAPI } from "../../service/route.service";
export default function TravellerForm({ showModal, setShowModal, modelData }) {
  const [payload, setPayload] = useState(modelData || {});
  const handleAdd = async () => {
    try {
      await addUserAPI({ ...payload, role: "user" });
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };
  const loadStoppages=async()=>{
    try{
      const {data}=await getStoppageAPI()
      console.log(data)
    }catch(e){
      toast.error(e.message)
    }
  
  }
  useEffect(()=>{
loadStoppages()
  },[])
  return (
    <div className="flex justify-center items-center w-full">
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="false"
        className="flex bg-[rgb(0,0,0,0.5)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Travellers
              </h3>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={payload.name}
                    onChange={(e) =>
                      setPayload({ ...payload, name: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Traveller name"
                    required=""
                  />
                </div>
                {!modelData && (
                  <div>
                    <label
                      htmlFor="Password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="Password"
                      name="Password"
                      id="brand"
                      // value={payload.name}
                      onChange={(e) =>
                        setPayload({ ...payload, password: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                )}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={payload.email}
                    onChange={(e) =>
                      setPayload({ ...payload, email: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Email"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    name="Phone"
                    id="Phone"
                    value={payload.phone}
                    onChange={(e) =>
                      setPayload({ ...payload, phone: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Phone"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="roll"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Roll Number
                  </label>
                  <input
                    type="number"
                    name="roll"
                    id="roll"
                    value={payload.roll}
                    onChange={(e) =>
                      setPayload({ ...payload, roll: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Roll Number"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="course"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={payload.course}
                    onChange={(e) =>
                      setPayload({ ...payload, course: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  >
                    <option value="" disabled selected hidden>
                      Select Course
                    </option>
                    <option value="B.TECH">B.TECH</option>
                    <option value="Diploma">Diploma</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="MTECH">M.TECH</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Branch
                  </label>
                  <select
                    id="category"
                    name="branch"
                    value={payload.branch}
                    onChange={(e) =>
                      setPayload({ ...payload, branch: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select Branch</option>
                    <option value="TV">CSE</option>
                    <option value="PC">ECE</option>
                    <option value="GA">Mechanical</option>
                    <option value="PH">Civil</option>
                    <option value="AC">Electrical</option>
                    <option value="">AI-ML </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Year
                  </label>
                  <select
                    id="category"
                    name="year"
                    value={payload.year}
                    onChange={(e) =>
                      setPayload({ ...payload, year: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="1">Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                {modelData ? (
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Stoppage Name
                    </label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option>Select Stoppage</option>
                    </select>
                  </div>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Stoppage Name
                      </label>

                      <input
                        type="string"
                        name="stoppage name"
                        id="roll "
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            stoppage: {
                              ...payload.stoppage,
                              name: e.target.value,
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Stoppage Name"
                        required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Stoppage Latitude
                      </label>

                      <input
                        type="string"
                        name="Stoppage Latitude"
                        id="roll"
                        value={payload.location}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            stoppage: {
                              ...payload.stoppage,
                              location: {
                                ...payload.stoppage.location,
                                lat: e.target.value,
                              },
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Stoppage Latitude"
                        required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Stoppage Longitude
                      </label>

                      <input
                        type="string"
                        name="Stoppage Longitude"
                        id="roll"
                        value={payload.location}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            stoppage: {
                              ...payload.stoppage,
                              location: {
                                ...payload.stoppage.location,
                                long: e.target.value,
                              },
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Stoppage Longitude"
                        required="true"
                      />
                    </div>
                  </>
                )}
                {/* <div className="sm:col-span-2"> */}
              </div>
              <button
                onClick={handleAdd}
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add New Traveller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
