import { useEffect, useState } from "preact/hooks";
import Modal from "../components/Modal";
import GenericTable from "../components/table";
import { getUsersAPI } from "../service/user.service";
import { deleteBusAPI, getBusesAPI } from "../service/bus.service";
import { getDriverInfoAPI } from "../service/driver.service";
import { getRouteInfoAPI } from "../service/route.service";
import Loader from "../components/Loader";

export default function BusForm() {
  // const isDriver = window.location.pathname == "/driver";
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [modelData, setModelData] = useState(null);
  const [Loading, setLoading] = useState(true);

  const deleteBus = (id) => {
    try {

      deleteBusAPI(id);
      window.location.reload();
    } catch (e) {
      toast.error(e.message);
    }
  };
  const getAllTravellers = async () => {
    try {
      const { data } = await getBusesAPI();
      console.log("data---------------------------", data);

      // delete data[0]._id;
      // const driverId = data.map((item) => {
      //   return {
      //     driverId: item.driver,
      //   };
      // });

      // console.log("------------------------", driverId);

      // const driverInfo = await getDriverInfoAPI(driverId[0].driverId);
      // data.map((item) => {
      //   item.driverName = driverInfo.data.name;
      // });

      for (let i = 0; i < data.length; i++) {
        const driverInfo = await getDriverInfoAPI(data[i].driver);
        data[i].driver = driverInfo.data.name;
      }

      // console.log("dddddddddddddddddddddddddd",data[0].route);

      for (let i = 0; i < data.length; i++) {
        // Get route information for the current item
        const routeInfo = await getRouteInfoAPI(data[i].route);
        // Update the route name for the current item
        data[i].route = routeInfo.data.name;
      }
      // const routeName = await getRouteInfoAPI(data[0].route);
      // console.log("-----e------", routeName.data.name);
      // data.map((item) => {
      //   item.route = routeName.data.name;
      // });

      setRows(data);
      setColumns(Object.keys(data[0]));
      setLoading(false);
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
                setShowModal("bus");
                setModelData(data);
              },
            },
            {
              name: "Delete",
              action: (data) => {
                deleteBus(data._id);
              },
            },
          ]}
          handleAdd={() => {
            setModelData(null);
            setShowModal("bus");
          }}
        />
      )}
    </div>
  );
}
