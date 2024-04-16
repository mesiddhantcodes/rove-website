import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { getRoutesAPI } from "../service/route.service";

export default function BusForm() {
  const isDriver = window.location.pathname == "/routes";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);

  const getAllTravellers = async () => {
    try {
      const { data } = await getRoutesAPI();
     if(data.length){
      setColumns(Object.keys(data[0]).sort((a, b) => a - b) || []);
      setRows(data);
     }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };
  useEffect(() => {
    getAllTravellers();
  }, [location.pathname]);
  return (
    <div className="w-full mt-5">
      <Modal
        modelData={modelData}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <GenericTable
        rows={rows}
        columns={columns}
        actions={[
          {
            name: "Edit",
            action: (data) => {
              setShowModal("routes");
              setModelData(data);
            },
          },
        ]}
        handleAdd={() => setShowModal("routes")}
      />
    </div>
  );
}
