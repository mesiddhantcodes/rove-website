import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { deleteRouteAPI, getRoutesAPI } from "../service/route.service";
import Loader from "../components/Loader";
import { deleteUserAPI } from "../service/user.service";
import toast from "react-hot-toast";

export default function BusForm() {
  const isDriver = window.location.pathname == "/routes";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);
  const [Loading, setLoading] = useState(true);

  const deleteRoute = (id) => {
    try {

      deleteRouteAPI(id);
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };
  const getAllTravellers = async () => {
    try {
      const { data } = await getRoutesAPI();
      if (data.length) {
        setColumns(Object.keys(data[0]).sort((a, b) => a - b) || []);
        setRows(data);
        setLoading(false);
      }
    } catch (error) {
      // console.log(error);
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
      {Loading ? (
        <div>
          <Loader />
        </div>
      ) : (
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
            {
              name: "Delete",
              action: (data) => {
                deleteRoute(data.id);
              },
            },
          ]}
          handleAdd={() => setShowModal("routes")}
        />
      )}
    </div>
  );
}
