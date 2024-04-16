import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { getUsersAPI } from "../service/user.service";

export default function AdminForm() {
  const isDriver = window.location.pathname == "/driver";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);
  const getAllTravellers = async () => {
    try {
      const { data } = await getUsersAPI(isDriver ? "driver" : "user");
      setColumns(Object.keys(data.results[0]).sort((a, b) => a - b) || []);

      if (!isDriver) {
        let temp = data.results;
        temp.forEach((item) => {
          item.stoppage = item.stoppage.name;
        });
        setRows(temp);
        return;
      }
      setRows(data.results.sort((a, b) => a - b) || []);
    } catch (error) {
      return error.response;
    }
  };
  useEffect(() => {
    getAllTravellers();
  }, [location.pathname]);
  return (
    <div className="w-full mt-5">
      <Modal  modelData={modelData} setShowModal={setShowModal} showModal={showModal} />
      <GenericTable
        
        rows={rows}
        columns={columns}
        actions={[
          {
            name: "Edit",
            action: (data) => {
              setShowModal(isDriver ? "driver" : "travellers");
              setModelData(data);
            },
          },
        ]}
        handleAdd={() => setShowModal(isDriver ? "driver" : "travellers")}
      />
    </div>
  );
}
