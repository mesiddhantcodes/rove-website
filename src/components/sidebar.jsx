export default function Sidebar() {
  return (
    <div className="w-[15%]   justify-start border-r bg-white-full">
      <div className="px-4 py-6 ">
        <span className="  place-content-center rounded-lg  bg-gray-100 text-2xl text-gray-600 font-mono">
          <span className="text-center p-4 m-4 ">ROVE</span>
          {/* <img src="./src/assets/images/rove2.png" alt="" className="h-2 w-2 rounded-full " /> */}
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/travellars"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Travellers
            </a>
          </li>
          <li>
            <a
              href="/driver"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Drivers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Rides
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Invoices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
