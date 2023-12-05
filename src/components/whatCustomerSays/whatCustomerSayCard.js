import image from "../../assets/images/what customer says.svg"
import "../../styles/whatCustomerSays.css"

export default function WhatCustomerSayCard(){
    return(
        <div className="what-customer-says-card-container">
            <div className="what-customer-says-card">
                <h5>"The best restaurant"</h5>

                <p className="what-customer-says-card-detail">
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                </p>

                <hr />

                <div className="what-customer-says-card-image-and-name">
                    <figure><img src={image} alt="" /></figure>
                    <div>
                        <h6>Sophire Robson </h6>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>

            <div className="what-customer-says-card">
                <h5>"The best restaurant"</h5>

                <p className="what-customer-says-card-detail">
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                </p>

                <hr />

                <div  className="what-customer-says-card-image-and-name">
                    <figure><img src={image} alt="" /></figure>
                    <div>
                        <h6>Sophire Robson </h6>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>


            <div className="what-customer-says-card">
                <h5>"The best restaurant"</h5>

                <p className="what-customer-says-card-detail">
                Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                </p>

                <hr />

                <div className="what-customer-says-card-image-and-name">
                    <figure><img src={image} alt="" /></figure>
                    <div>
                        <h6>Sophire Robson </h6>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>

        </div>
    )
}