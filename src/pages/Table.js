import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "../styles/TableSetting.css"


import table_image from "../assets/images/7-seat-table.svg"

const TableSetting = () => {

    const [table, setTable] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4300/api/v1/tables/`)
          .then((res) => res.json())
          .then((data) => {
            setTable(data.data);
            setCategory({ category, ...data.data.tableCategory_id})
            console.log({...data.data.tableCategory_id})
            console.log(category);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }, []);

    // const Images = [
    //     {
    //       id: 1,
    //       img: table,
    //       location: "Ikeja, Lagos, Nigeria",
    //       title: 'Catering',
    //       body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //       click: 'Explore'
    //     },
    //     {
    //       id: 2,
    //       img: table,
    //       location: "Ikeja, Lagos, Nigeria",
    //       title: 'BirthDay',
    //       body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //       click: 'Explore'
    //     },
    //     {
    //       id: 3,
    //       img: table,
    //       location: "Ikeja, Lagos, Nigeria",
    //       title: 'Wedding',
    //       body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //       click: 'Explore'
    //     },
    //     {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },

    //       {
    //         id: 4,
    //         img: table,
    //         location: "Ikeja, Lagos, Nigeria",
    //         title: 'Event',
    //         body: "n the new era of technology we look in the futrue with certainty and pride for our life  ",
    //         click: 'Explore'
    //       },
    // ]
    return(
        <div className='table-service-card-container'>
            {
                table && table.map((item)=>  (
                        <div className='table-service-card'>
                        <figure>
                            <img src={table_image} alt="" />
                        </figure>
                        <h3>{item.table_name}</h3>
                        <p>{category.name} </p>
                        <p>Status: Booked</p>
                        </div>
                    ))
                }
        </div>
    )
};

export default TableSetting;
