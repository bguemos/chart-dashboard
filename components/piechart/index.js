import { useState, useEffect } from "react"
import styles from './piechart.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Motor vehicle and parts dealers', 'Automobile dealers', 'New car dealers', 'Used car dealers', 'Other motor vehicle dealers', 'Automotive parts, accessories and tire retailers'],
    datasets: [
      {
        label: 'January 2023 ',
        data: [17615206, 15157057, 13873348, 1283709, 1252104, 1206045],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export default function PieChart() {
    return(
        <>
        <div className={styles.container}>
           <Pie data={data} />
         </div>
        </>
    )
    
  }
    
 