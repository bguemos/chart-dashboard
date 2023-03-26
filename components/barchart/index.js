import { useState, useEffect } from "react"
import styles from './barchart.module.css'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend


)




export default function BarChart() {


    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Q4 2021", "Q1 2022 ","Q2 2022", "Q3 2022", "Q4 2022"],
         
            datasets: [
                {
                    label: "Births",
                    data: [89402,86743 ,93563 , 98438, 90292],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162,235, 0.4)'
                },
                {
                    label: "Deaths",
                    data: [82676,87917 ,77886, 76651, 84029],
                    borderColor: 'black',
                    backgroundColor: 'black'
                }
            ]
        })


        setChartOptions({
            pulgins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Estimates"
                },
            },
                scales: {
                    y:{
                        title:{
                        display: true,
                        text: 'Population',
                        },
                    },
                    x:{
                        title:{
                        display: true,
                        text: 'Yearly Quarters',
                        },
            },
        },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])



    return(
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartData}/>

        </div>
      

      
        </>
    )
}