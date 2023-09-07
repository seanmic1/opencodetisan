import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChart = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Line
        options={{
          scales: {
            x: {
              grid: {
                color: colorMode === 'light' ? '#00000040' : '#ffffff40'
              }
            },
            y: {
              grid: {
                color: colorMode === 'light' ? '#00000040' : '#ffffff40'
              }
              },
            }
          }
        } 
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],  
              backgroundColor: useColorModeValue('black','white'),
              borderColor: useColorModeValue('black','white')
            },
          ],
        }
      }
      />
    </div>
  );
};
export default LineChart;