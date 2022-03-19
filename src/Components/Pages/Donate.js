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

  const changeTheme = () => {
    setStyle({ theme: style.theme === "light" ? "dark" : "light" });
    renderDropin();
  };
  //   setTimeout(() => {
  //     renderDropin();
  //   }, 300);

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", width: "80%" }}
    >
      <div
        id="gateway"
        style={{
          marginTop: "5%",
          maxHeight: "500px",
          width: "500px",
          overflowY: "auto",
        }}
      >
        <button onClick={() => renderDropin()}>Pay</button>
      </div>
      <div className="button" style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={changeTheme}
          style={{ height: "30px", margin: "10px" }}
        >
          {style.theme}
        </button>
      </div>
    </div>
  );
};

export default Donate;
