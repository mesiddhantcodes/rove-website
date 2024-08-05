import { useEffect, useState } from "preact/hooks";
import React from "react";
import {
  addRouteAPI,
  addStoppageAPI,
  getStoppageAPI,
} from "../../service/route.service";
import { toast } from "react-hot-toast";
import { getBusesAPI } from "../../service/bus.service";
import { Marker, Map } from "react-google-maps";

export default function RouteForm({ showModal, setShowModal, modelData }) {
  const [payload, setPayload] = useState(modelData || {});
  const [stoppages, setStoppages] = useState([]);
  const [buses, setBuses] = useState([]);

  const handleAdd = async () => {
    try {
      await addRouteAPI({ ...payload, role: "admin" });
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };
  const getAllStoppages = async () => {
    try {
      console.log(modelData);
      const { data } = await getStoppageAPI(modelData?.id);
      console.log(data);
      setStoppages(data);
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };

  const getAllBuses = async () => {
    try {
      const { data } = await getBusesAPI();
      console.log(data);
      setBuses(data);
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };

  const handleAddStoppage = async () => {
    try {
      delete payload.stoppages;
      await addStoppageAPI(modelData.id, { ...payload,name:payload.location.name });
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    getAllStoppages();
    getAllBuses();
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="false"
        className="flex bg-[rgb(0,0,0,0.5)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
      {/* sdfsdfasf */}
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {modelData ? "Edit" : "Add"} Route
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
            <div action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Route name
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
                    placeholder="Route Name"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bus
                  </label>
                  <select
                    id="category"
                    name="branch"
                    value={payload.bus}
                    onChange={(e) =>
                      setPayload({ ...payload, bus: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select Bus</option>
                    {buses.map((bus) => (
                      <option value={bus._id}>{bus.name}</option>
                    ))}
                  </select>
                </div>
                {modelData && (
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Stoppage
                    </label>

                    <select
                      id="category"
                      name="branch"
                      value={payload.stoppage}
                      onChange={(e) =>
                        setPayload({ ...payload, stoppage: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Select Stoppage</option>
                      {stoppages.map((stoppage) => (
                        <option value={stoppage._id}>{stoppage.name}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Stoppages
                  </label>
                  <select
                    id="category"
                    name="branch"
                    value={payload.stoppage}
                    onChange={(e) =>
                      setPayload({ ...payload, stoppage: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select Stoppage</option>
                    {stoppages.map((stoppage) => (
                      <option value={stoppage._id}>{stoppage.name}</option>
                    ))}
                  </select>
                </div> */}
                <br />
                <button
                  onClick={handleAdd}
                  type="submit"
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
                  {modelData ? "Edit" : " Add"} Route
                </button>
                {modelData && (
                  <>
                    <br />
                    <h1 className="text-2xl">Stoppage</h1>
                    <br />
                  </>
                )}

                {modelData && (
                  <>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Stoppage name
                      </label>
                      {/* setPayload({
                            ...payload,
                            stoppage: {
                              ...payload.stoppage,
                              name: e.target.value,
                            },
                          }) */}
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={payload?.location?.name}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            location: {
                              ...payload.location,
                              name: e.target.value,
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded
                        -lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Stoppage Name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Latitude
                      </label>
                      <input
                        type="number"
                        name="name"
                        id="name"
                        value={payload?.location?.lat}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            location: {
                              ...payload.location,
                              lat: e.target.value,
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Latitude"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Longitude
                      </label>
                      <input
                        type="number"
                        name="name"
                        id="name"
                        value={payload?.location?.long}
                        onChange={(e) =>
                          setPayload({
                            ...payload,
                            location: {
                              ...payload.location,
                              long: e.target.value,
                            },
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Longitude"
                        required=""
                      />
                    </div>
                    <br />
                    <button
                      onClick={handleAddStoppage}
                      type="submit"
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
                      Add Stoppage
                    </button>{" "}
                  </>
                )}

                {/* <div className="sm:col-span-2"> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
