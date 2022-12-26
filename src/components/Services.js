import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
function Services() {
  return (
    <div class='container'>
      <div class='row'>
        <div
          class='col'
          style={{
            borderRadius: "25px",
            border: "1px solid red",
            padding: "20px",
            width: "100px",
            height: "50px",
          }}
        >
          <div>
            <TbTruckDelivery />
            <p>Super Fast and Free Delivery</p>
          </div>
        </div>
        <div
          class='col'
          style={{
            borderRadius: "25px",
            border: "1px solid red",
            padding: "20px",
            width: "100px",
            height: "50px",
          }}
        >
          <MdSecurity />
          <p>Non-Contact Shipping</p>
        </div>
        <div
          class='col'
          style={{
            borderRadius: "25px",
            border: "1px solid red",
            padding: "20px",
            width: "100px",
            height: "50px",
          }}
        >
          <GiReceiveMoney />
          <p>Money Back Guaranteed</p>
        </div>
        <div
          class='col'
          style={{
            borderRadius: "25px",
            border: "1px solid red",
            padding: "20px",
            width: "100px",
            height: "50px",
          }}
        >
          <RiSecurePaymentFill />
          <p>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
