import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { getUsersAPI } from "../service/user.service";
import { getBusesAPI } from "../service/bus.service";

export default function BusForm() {
  // const isDriver = window.location.pathname == "/driver";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);
  const getAllTravellers = async () => {
    try {
      const { data } = await getBusesAPI();
      setRows(data);
      setColumns(Object.keys(data[0]));
      
    } catch (error) {
        console.log(error)
      return error.response;
    }
  };
  useEffect(() => {
    getAllTravellers();
  }, [location.pathname]);
  return (
    <div className="w-full mt-5">
      <Modal modelData={modelData} setShowModal={setShowModal} showModal={showModal} />
      <GenericTable
        rows={rows}
        columns={columns}
        actions={[
          {
            name: "Edit",
            action: (data) => {
              setShowModal("bus");
              setModelData(data);
            },
          },
        ]}
        handleAdd={() => setShowModal("bus")}
      />
    </div>
  );
}
