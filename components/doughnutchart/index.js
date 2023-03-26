import { useState, useEffect } from "react"
import styles from './doughnut.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Food and beverage retailers', 'Grocery and convenience retailers ', 'Supermarkets and other grocery retailers', 'Convenience retailers and vending machine operators ', 'Specialty food retailers', 'Beer, wine and liquor retailers '],
  datasets: [
    {
      label: 'January 2023',
      data: [12460015, 9318070, 8598513, 719557, 854760, 2287185],
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

export default function DoughnutChart() {
  return (
    <>
    <div className={styles.Doughnut}>
      <Doughnut data={data}/>
      </div>
    </>
  )
 

}

