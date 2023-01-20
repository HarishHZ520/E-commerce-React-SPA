import "./Feature.css";

import freeShipping from "../../Images/images/img/features/f1.png";
import onlineOrder from "../../Images/images/img/features/f2.png";
import saveMoney from "../../Images/images/img/features/f3.png";

const Feature = () => {
  return (
    <section className="feature">
      <div className="freeshipping">
        <img src={freeShipping} alt="free-shipping" />
        <h4>Free Shipping</h4>
      </div>
      <div className="onlineorder">
        <img src={onlineOrder} alt="online-order" />
        <h4>Online Order</h4>
      </div>
      <div className="savemoney">
        <img src={saveMoney} alt="save-money" />
        <h4>Save Money</h4>
      </div>
    </section>
  );
};

export default Feature;
