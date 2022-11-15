import React from 'react';
import { useState } from 'react';
// import { Chart } from 'react-chartjs-2';


import {
    // ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";



export default function TableData() {





    const [data, setData] = useState([

    ]);


    function handleNewData() {

        let caco3 = document.getElementById('caco3').value;
        let om = document.getElementById('om').value;
        let clay = document.getElementById('clay').value;
        let silt = document.getElementById('silt').value;
        let sand = document.getElementById('sand').value;
        let ece = document.getElementById('ece').value;
        let ph = document.getElementById('ph').value;
        let na = document.getElementById('na').value;
        let index = document.getElementById('sel').value;
        let selec = document.getElementById('sel').options[index].innerHTML;



        const newFormData = [
            ...data,
            {
                caco3: caco3,
                om: om,
                clay: clay,
                silt: silt,
                sand: sand,
                ece: ece,
                ph: ph,
                na: na,
                cat: selec
            }
        ];
        setData(newFormData);
    }
    return (
        <>

            <div className='container-fluid'>
                <h1>Soil Analysis</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Measure</th>
                            <th>CaCO3(%)</th>
                            <th>OM(%)</th>
                            <th>Clay(%)</th>
                            <th>Silt(%)</th>
                            <th>Sand(%)</th>
                            <th>ECe(dS/m)</th>
                            <th>pH</th>
                            <th>Na(ppm)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.cat}</td>
                                        <td>{value.caco3}</td>
                                        <td>{value.om}</td>
                                        <td>{value.clay}</td>
                                        <td>{value.silt}</td>
                                        <td>{value.sand}</td>
                                        <td>{value.ece}</td>
                                        <td>{value.ph}</td>
                                        <td>{value.na}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className="container my-5 form-control big ">
                    <div className="form-container">
                        <div className="container d-flex">

                            <input className='mx-2 form-control formData' type="number" placeholder='CaCO3(%)' id='caco3' />
                            <input className='mx-2 form-control formData' type="number" placeholder='OM(%)' id="om" />
                        </div>
                        <div className="container d-flex">

                            <input className='mx-2 form-control formData' type="number" placeholder='Clay(%)' id='clay' />
                            <input className='mx-2 form-control formData' type="number" placeholder='Silt(%)' id='silt' />
                        </div>
                        <div className="container d-flex">

                            <input className='mx-2 form-control formData' type="number" placeholder='Sand(%)' id='sand' />
                            <input className='mx-2 form-control formData' type="number" placeholder='ECe(dS/m)' id='ece' />
                        </div>
                        <div className="container d-flex">

                            <input className='mx-2 form-control formData' type="number" placeholder='pH' id='ph' />
                            <input className='mx-2 form-control formData' type="number" placeholder='Na(ppm)' id='na' />
                        </div>
                        <select className="form-select" id='sel' aria-label="Default select example">
                            <option defaultValue>Select a Measure</option>
                            <option value="1">Mean</option>
                            <option value="2">Min.</option>
                            <option value="3">Max.</option>
                            <option value="4">Std*</option>
                            <option value="5">CV** (%)</option>
                        </select>


                        <button className=" btn btn-primary" id='addBtn' onClick={handleNewData} >Add</button>
                    </div>

                </div>
            </div>
            <div className="container-fluid" id="display-chart">

                <BarChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}

                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="cat" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="caco3" fill="#2192FF" />
                    <Bar dataKey="om" fill="#8884d8" />
                    <Bar dataKey="clay" fill="#3B3486" />
                    <Bar dataKey="silt" fill="#393E46" />
                    <Bar dataKey="sand" fill="#E14D2A" />
                    <Bar dataKey="ece" fill="#5837D0" />
                    <Bar dataKey="ph" fill="#150050" />
                    <Bar dataKey="na" fill="#38E54D" />



                </BarChart>

            </div>
        </>


    )
}
