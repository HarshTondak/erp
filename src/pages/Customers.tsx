import { ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/54.jpg"
        alt="Avatar"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/50.jpg"
        alt="Avatar"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Avatar"
      />
    ),
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/85.jpg"
        alt="Avatar"
      />
    ),
    name: "Samantha Williams",
    email: "samantha.williams@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/42.jpg"
        alt="Avatar"
      />
    ),
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/27.jpg"
        alt="Avatar"
      />
    ),
    name: "Jessica Thompson",
    email: "jessica.thompson@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/16.jpg"
        alt="Avatar"
      />
    ),
    name: "David Anderson",
    email: "david.anderson@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/34.jpg"
        alt="Avatar"
      />
    ),
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/62.jpg"
        alt="Avatar"
      />
    ),
    name: "Robert Clark",
    email: "robert.clark@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/11.jpg"
        alt="Avatar"
      />
    ),
    name: "Emma Taylor",
    email: "emma.taylor@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/83.jpg"
        alt="Avatar"
      />
    ),
    name: "William Jones",
    email: "william.jones@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/92.jpg"
        alt="Avatar"
      />
    ),
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/28.jpg"
        alt="Avatar"
      />
    ),
    name: "James Davis",
    email: "james.davis@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/67.jpg"
        alt="Avatar"
      />
    ),
    name: "Sophia Miller",
    email: "sophia.miller@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="Avatar"
      />
    ),
    name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/18.jpg"
        alt="Avatar"
      />
    ),
    name: "Ava Anderson",
    email: "ava.anderson@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/men/72.jpg"
        alt="Avatar"
      />
    ),
    name: "Matthew Thomas",
    email: "matthew.thomas@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        src="https://randomuser.me/api/portraits/women/39.jpg"
        alt="Avatar"
      />
    ),
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
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

export default Customers;
