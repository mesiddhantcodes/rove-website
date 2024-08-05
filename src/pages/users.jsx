import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { deleteUserAPI, getUsersAPI } from "../service/user.service";
import { getBusByIdAPI } from "../service/bus.service";
import { getStoppageAPI } from "../service/route.service";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function AdminForm() {
  const isDriver = window.location.pathname == "/driver";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);

  const [loading, setLoading] = useState(true); // New loading state
  const deleteUser = (id) => {
    try {
      deleteUserAPI(id);
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const getAllTravellers = async () => {
    try {
      const { data } = await getUsersAPI(isDriver ? "driver" : "user");
      console.log("data---------------------------", data);
      // if drriver then send the setcolumn or if user then have the logic
      if (!isDriver) {
        for (let i = 0; i < data.results.length; i++) {
          try {
            const busName = await getBusByIdAPI(data.results[i].assignedBus);
            data.results[i].assignedBus = busName.data.name;
          } catch (e) {
            toast.error(e.message);
          }
          // console.log("bus name", data.results[i].assignedBus );
        }
        // const busName = await getBusByIdAPI();
        // for (let i = 0; i < data.results.length; i++) {
        const stoppage = await getStoppageAPI();
        console.log("stoppage", stoppage);
        for (let i = 0; i < stoppage.data.length; i++) {
          console.log("stoppage id", stoppage.data[i]._id);
        }
      }

      setColumns(Object.keys(data.results[0]).sort((a, b) => a - b) || []);
      console.log("data of user ", data);

      if (!isDriver) {
        let temp = data.results;
        setRows(temp);
        setLoading(false); // Set loading to false when data is fetched

        return;
      }
      setRows(data.results.sort((a, b) => a - b) || []);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
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
      {loading ? (
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
                setShowModal(isDriver ? "driver" : "travellers");
                setModelData(data);
              },
            },
            {
              name: "Delete",
              action: (data) => {
                deleteUser(data.id);
              },
            },
          ]}
          handleAdd={() => {
            setModelData(null);
            setShowModal(isDriver ? "driver" : "travellers");
          }}
        />
      )}
    </div>
  );
}
