import "../../styles/whatCustomerSays.css"
import WhatCustomerSayCard from "./whatCustomerSayCard"

export default function WhatCustomerSays(){
    return(
        <div className="what-customer-says-container">
            <header>
                <h2>What Our Customers Say</h2>
            </header>
            <div>
                <WhatCustomerSayCard/>
            </div>
        </div>
    )
}