import React from "react";
import { useState } from "react";
import { cashfreeSandbox, cashfreeProd } from "cashfree-dropjs";

const Donate = () => {
  const [orderToken, setOrderToken] = useState("7RyleyCOzRftapYCmSDb");

  const [style, setStyle] = useState({
    theme: "light",
  });

  const [isProd, setIsProd] = useState(false);

  const [components, setComponents] = useState([
    "order-details",
    "card",
    "upi",
    "app",
    "netbanking",
    "paylater",
    "credicardemi",
  ]);

  const cbs = (data) => {
    if (data.order && data.order.status === "PAID") {
      alert("order is paid. Call api to verify");
    }
  };

  const cbf = (data) => {
    alert(data.order.errorText);
  };


  const renderDropin = () => {
    if (orderToken === "") {
      alert("Order Token is empty");
      return;
    }
    if (!components.length) {
      alert("No drop in specified");
      return;
    }
    let parent = document.getElementById("gateway");
    parent.innerHTML = "";
    let cashfree;
    if (isProd) {
      cashfree = new cashfreeProd.Cashfree();
    } else {
      cashfree = new cashfreeSandbox.Cashfree();
    }
    console.log("before Initialisation");
    cashfree.initialiseDropin(parent, {
      orderToken,
      onSuccess: cbs,
      onFailure: cbf,
      components,
      style,
    });
    console.log("after Initialisation");
  };

  return (
    <div className="container">
      <div id="gateway"></div>
      <button onClick={()=>renderDropin()}>Pay</button>
    </div>
  );
};

export default Donate;
