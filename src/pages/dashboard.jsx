// export default function Dashboard() {
//   return (
//     <div>

//       <img
//         className="flex w-[66%] h-[66%]  shadow-lg rounded-lg  "
//         src="./src/assets/images/rovebg.png"
//         alt=""
//       />

//     </div>
//   );
// }

// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Driver", "Travellar", "Bus"];

export const data = {
  labels,  
  datasets: [
    {
      label: "Dataset 1",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: 'Dataset 2',
    //   // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export default function Dashboard() {
  return <Bar options={options} data={data} />;
}

// import { Bar } from "react-chartjs-2";

// const ChartComponent = () => {
//   const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "My dataset",
//         data: [10, 20, 30, 40, 50, 60],
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return <Bar data={data} />;
// };
