import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "John Doe",
    amount: 1250.99,
    discount: 75.99,
    quantity: 2,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t1">Manage</Link>,
  },
  {
    user: "Jane Smith",
    amount: 349.95,
    discount: 0,
    quantity: 1,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t2">Manage</Link>,
  },
  {
    user: "Michael Johnson",
    amount: 2999.99,
    discount: 200,
    quantity: 4,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t3">Manage</Link>,
  },
  {
    user: "Emily Davis",
    amount: 89.99,
    discount: 10,
    quantity: 1,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t4">Manage</Link>,
  },
  {
    user: "David Wilson",
    amount: 1499.95,
    discount: 150,
    quantity: 3,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t5">Manage</Link>,
  },
  {
    user: "Sarah Thompson",
    amount: 299.99,
    discount: 0,
    quantity: 1,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t6">Manage</Link>,
  },
  {
    user: "Robert Anderson",
    amount: 749.95,
    discount: 50,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t7">Manage</Link>,
  },
  {
    user: "Jessica Taylor",
    amount: 199.99,
    discount: 0,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t8">Manage</Link>,
  },
  {
    user: "Matthew Brown",
    amount: 3499.99,
    discount: 250,
    quantity: 5,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t9">Manage</Link>,
  },
  {
    user: "Olivia Johnson",
    amount: 599.99,
    discount: 75,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t10">Manage</Link>,
  },
  {
    user: "William Davis",
    amount: 899.95,
    discount: 100,
    quantity: 3,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t11">Manage</Link>,
  },
  {
    user: "Sophia Wilson",
    amount: 149.99,
    discount: 0,
    quantity: 1,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t12">Manage</Link>,
  },
  {
    user: "James Thompson",
    amount: 2499.99,
    discount: 200,
    quantity: 4,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t13">Manage</Link>,
  },
  {
    user: "Ava Anderson",
    amount: 349.95,
    discount: 25,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t14">Manage</Link>,
  },
  {
    user: "Daniel Taylor",
    amount: 1099.99,
    discount: 100,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t15">Manage</Link>,
  },
  {
    user: "Isabella Brown",
    amount: 749.95,
    discount: 50,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t16">Manage</Link>,
  },
  {
    user: "Jacob Johnson",
    amount: 499.99,
    discount: 0,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t17">Manage</Link>,
  },
  {
    user: "Emma Davis",
    amount: 899.95,
    discount: 75,
    quantity: 2,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/t18">Manage</Link>,
  },
  {
    user: "Michael Wilson",
    amount: 2999.99,
    discount: 200,
    quantity: 4,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/t19">Manage</Link>,
  },
  {
    user: "Sophia Thompson",
    amount: 249.99,
    discount: 0,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/t20">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
