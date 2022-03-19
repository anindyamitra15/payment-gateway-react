import "./Sample.css";
import { cashfreeSandbox, cashfreeProd } from "cashfree-dropjs";
import { useState } from "react";
import { dropinComponents } from "../../dropinComponents";

function Sample() {
  const [orderToken, setOrderToken] = useState("7RyleyCOzRftapYCmSDb");
  const [checkedState, setCheckedState] = useState(
    new Array(dropinComponents.length).fill(false)
  );
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
    let parent = document.getElementById("drop_in_container");
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
    <div className="Sample">    
      <button className="btn-render mt-2" onClick={renderDropin}>
        Render
      </button>
      <div
        className="dropin-parent"
        id="drop_in_container"
        style={{ minHeight: "600px" }}
      >
        Your component will come here
      </div>
    </div>
  );
}

export default Sample;
