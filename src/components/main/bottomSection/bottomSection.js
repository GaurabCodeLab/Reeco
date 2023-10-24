import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../../features/orderSlice";
import { Table, Button } from "react-bootstrap";
import { Printer } from "react-bootstrap-icons";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import image from "./avocado.jpg";
import PopUp from "./modals";
import "./bottom-section-style.css";

function BottomSection() {
  const orderData = useSelector((state) => state.orderData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="main-container">
      <div className="top-field">
        <TextField
          label="Search..."
          className="input"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div>
          <Button variant="outline-success" className="btn">
            Add item
          </Button>
          <Printer className="icon" />
        </div>
      </div>
      <Table striped hover>
        <thead className="border">
          <tr>
            <th className="border-end">Product name</th>
            <th className="border-end">Brand</th>
            <th className="border-end">Price</th>
            <th className="border-end">Quantity</th>
            <th className="border-end">Total</th>
            <th className="text-center border-end">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderData.orderDetails.map((value, key) => (
            <tr key={key}>
              <td className="border-end">
                <img
                  src={image}
                  style={{
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {value.product_name}
              </td>
              <td className="border-end">{value.brand}</td>
              <td className="border-end">{`$${value.price}`}</td>
              <td className="border-end">{value.quantity}</td>
              <td className="border-end">{`$${value.total}`}</td>
              <td className="border-end">
                <PopUp name={value.product_name} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BottomSection;
