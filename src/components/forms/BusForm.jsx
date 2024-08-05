import { useEffect, useState } from "preact/hooks";
import React from "react";
import { addBusAPI, updateBusAPI } from "../../service/bus.service";
import toast from "react-hot-toast";
import {
  getAllDriversAPI,
  updateDriverAPI,
} from "../../service/driver.service";
import { getRoutesAPI } from "../../service/route.service";

export default function BusForm({ showModal, setShowModal, modelData }) {
  const [payload, setPayload] = useState(modelData || {});
  const [drivers, setDrivers] = useState([]);
  const [route, setRoute] = useState([]);

  const handleSubmit = async () => {
    try {
      if (modelData) {
        // delete payload._id;
        // delete payload.__v;
        console.log("payload", payload);
        console.log("modelData", modelData);
        await updateBusAPI(modelData._id, payload);
        window.location.reload();
      } else {
        await addBusAPI(payload);
        window.location.reload();
      }
      // }
    } catch (e) {
      toast.error(e.message);
    }
  };

  const getDrivers = async () => {
    const response = await getAllDriversAPI();
    setDrivers(response.data);
    // console.log("=============", response.data);
  };
  const getRoutes = async () => {
    const response = await getRoutesAPI();
    setRoute(response.data);
  };
  useEffect(() => {
    getDrivers();
    getRoutes();
  }, []);

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
                Add Bus
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
                    placeholder="Name"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="Phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bus Number
                  </label>
                  <input
                    type="string"
                    name="Phone"
                    id="Phone"
                    value={payload.busNumber}
                    onChange={(e) =>
                      setPayload({ ...payload, busNumber: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Bus Number"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Capacity
                  </label>
                  <input
                    type="number"
                    name="Phone"
                    id="Phone"
                    value={payload.capacity}
                    onChange={(e) =>
                      setPayload({ ...payload, capacity: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="capacity"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="license"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    License
                  </label>
                  <input
                    type="string"
                    name="Phone"
                    id="Phone"
                    value={payload.license}
                    onChange={(e) =>
                      setPayload({ ...payload, license: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="License"
                    required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Route
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={payload.route}
                    onChange={(e) =>
                      setPayload({ ...payload, route: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  >
                    <option value="" disabled selected hidden>
                      Select Route
                    </option>
                    {route.map((r) => {
                      return <option value={r.id}>{r.name}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="course"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Driver
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={payload.driver}
                    onChange={(e) =>
                      setPayload({ ...payload, driver: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  >
                    <option value="" disabled selected hidden>
                      Select Route
                    </option>
                    {drivers.map((driver) => (
                      <option value={driver.id}>{driver.name}</option>
                    ))}
                  </select>
                </div>

                {/* <div className="sm:col-span-2"> */}
              </div>
              <button
                onClick={handleSubmit}
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
                {modelData ? "Update" : "Add"} Bus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
