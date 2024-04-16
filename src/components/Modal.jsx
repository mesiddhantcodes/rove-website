import React from "react";
import TravellerForm from "./forms/TravellerForm";
import DriverForm from "./forms/DriverForm";
import RouteForm from "./forms/RouteForm";
import BusForm from "./forms/BusForm";

export default function Modal({ showModal, setShowModal, modelData }) {
  return showModal && showModal == "travellers" ? (
    <TravellerForm showModal={showModal} setShowModal={setShowModal} modelData={modelData} />
  ) : showModal == "driver" ? (
    <DriverForm showModal={showModal} setShowModal={setShowModal} modelData={modelData} />
  ) : showModal == "routes" ? (
    <RouteForm showModal={showModal} setShowModal={setShowModal} modelData={modelData} />
  ) : showModal == "bus" ? (
    <BusForm showModal={showModal} setShowModal={setShowModal} modelData={modelData} />
  ) : null;
}
