import { Button } from "react-bootstrap";
import "./bottom-header-style.css";

function BottomHeader() {
  return (
    <div className="bottom-header" style={{ width: "100%" }}>
      <span>
        Orders <span>&gt;</span>{" "}
        <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
      </span>
      <div className="header-part">
        <h3>Order 32457ABC</h3>
        <div>
          <Button variant="outline-success">Back</Button>
          <Button variant="success">Approve order</Button>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
