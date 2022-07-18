import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";

function Price() {


    let text;
    var p

    const [items, setItem] = useState([])
    const [val, setValue] = useState("Select Date")
    const [loaded, isLoaded] = useState(0)

    // const url = "https://indianspices-api.herokuapp.com/cardamom/archieve/all"
    const url = "https://indianspices-api.herokuapp.com/cardamom/archieve"
    

    useEffect(() => {
        axios.get(url)
            .then(res => {
                // console.log(res.data)
                isLoaded(1)
                setItem(res.data)
            }
            )
    }, [])

    const handleChange = e => {
        setValue(String(e.target.value))
    }

    function Seletion() {
        return (
            <select id="date" onChange={handleChange}>
                <option key="none" value="getDate">Choose Date</option>
                {items.map(item => {
                    return (<option key={item.sl} value={item.sl}>{item.date}</option>)
                })}
            </select>
        )
    }

    function Details() {
        if (val !== "getDate") {
            items.map((item) => {

                function Det() {
                    let dat = String(item.sl)

                    if (dat === val) {
                        text =
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='lef'>Date:</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Auctioneer: </td>
                                        <td>{item.Auctioneer}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Lots: </td>
                                        <td>{item.Lots}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Total Arrivals: </td>
                                        <td>{item.Total_Arrived}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Totaly Quantity Sold: </td>
                                        <td>{item.Qty_Sold}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Maximum Price: </td>
                                        <td>{item.MaxPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className='lef'>Average Price: </td>
                                        <td>{item.Avg_Price}</td>
                                    </tr>
                                </tbody>
                            </table>
                    }
                    return text
                }
                p = Det()
                return null
            })
        }
    }

    Details()
    const x = Seletion()


    if (!loaded) {
        return (
            <div className='main'>
                <div className='rect'>
                    <div className='load'>
                        <Typewriter
                            options={{
                                strings: "Loading......",
                                autoStart: true,
                                loop: true

                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="main">
                <div className='rect'>
                    <div id='selection'>
                        {x}
                        <div className='details'>
                            {p}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Price