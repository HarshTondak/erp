import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    photo: (
      <img
        src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437105.jpg?t=st=1710051716~exp=1710055316~hmac=5bfd562644a3547cf65eaf71fc9ab977ff60e11c65a65b9e075dda519491475f&w=826"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="iPhone 14 Pro Max"
      />
    ),
    name: "Apple iPhone 14 Pro Max",
    price: 1099,
    stock: 25,
    action: <Link to="/admin/product/iphone14pro">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1644501618169-bab16b6e6efb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Samsung Galaxy S22 Ultra"
      />
    ),
    name: "Samsung Galaxy S22 Ultra",
    price: 1199,
    stock: 18,
    action: <Link to="/admin/product/galaxys22ultra">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Sony WH-1000XM4 Wireless Headphones"
      />
    ),
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 348,
    stock: 42,
    action: <Link to="/admin/product/sonyheadphones">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Nintendo Switch OLED Model"
      />
    ),
    name: "Nintendo Switch OLED Model",
    price: 349,
    stock: 31,
    action: <Link to="/admin/product/nintendoswitch">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1659135890064-d57187f0946c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Apple MacBook Air M2 Chip"
      />
    ),
    name: "Apple MacBook Air M2 Chip",
    price: 1199,
    stock: 14,
    action: <Link to="/admin/product/macbookair">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Samsung 65-inch QLED 4K Smart TV"
      />
    ),
    name: "Samsung 65-inch QLED 4K Smart TV",
    price: 997,
    stock: 8,
    action: <Link to="/admin/product/samsungtv">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1556911820-1238441ed1a7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker"
      />
    ),
    name: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
    price: 119,
    stock: 63,
    action: <Link to="/admin/product/instantpot">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://img.freepik.com/free-photo/high-angle-woman-using-her-smartwatch_23-2148429320.jpg?t=st=1710052563~exp=1710056163~hmac=fd71b334a9652ae60c8f98d363d892b955b17d7cfcd7a554b23e4cc701052d8c&w=1380"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Fitbit Charge 5 Advanced Fitness Tracker"
      />
    ),
    name: "Fitbit Charge 5 Advanced Fitness Tracker",
    price: 149,
    stock: 27,
    action: <Link to="/admin/product/fitbitcharge5">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://img.freepik.com/free-photo/top-view-photo-camera-indoors-still-life_23-2150630948.jpg?t=st=1710052623~exp=1710056223~hmac=c3803fbd7ed7a182df048376c2834d6669febb0bf15f8131ef7efd1e59c88c93&w=1800"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Canon EOS Rebel T7 DSLR Camera Bundle"
      />
    ),
    name: "Canon EOS Rebel T7 DSLR Camera Bundle",
    price: 549,
    stock: 19,
    action: <Link to="/admin/product/canoncamera">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://img.freepik.com/free-psd/speaker-mockup-cylinder-shape_1310-942.jpg?t=st=1710052663~exp=1710056263~hmac=97edf20142db8952d730c194cb100dee005a9fff6f8c3ce328f583163df9b938&w=1800"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Amazon Echo Dot (4th Gen) Smart Speaker"
      />
    ),
    name: "Amazon Echo Dot (4th Gen) Smart Speaker",
    price: 49,
    stock: 82,
    action: <Link to="/admin/product/echodot">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://img.freepik.com/free-photo/electronic-device-balancing-concept_23-2150422320.jpg?t=st=1710052736~exp=1710056336~hmac=1532c0412e6834645ee5a5860c94792d28aed950decc5ec5b2d8a2587a64eea1&w=1480"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Acer Predator Helios 300 Gaming Laptop"
      />
    ),
    name: "Acer Predator Helios 300 Gaming Laptop",
    price: 1299,
    stock: 11,
    action: <Link to="/admin/product/acergaminglaptop">Manage</Link>,
  },
  {
    photo: (
      <img
        src="https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt="Bose QuietComfort 45 Wireless Noise Cancelling Headphones"
      />
    ),
    name: "Bose QuietComfort 45 Wireless Noise Cancelling Headphones",
    price: 329,
    stock: 28,
    action: <Link to="/admin/product/boseheadphones">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
