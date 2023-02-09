import axios from "axios";
import { useEffect, useState } from "react";
import "../css/adminpanel.css";
import ContainerCont from "./containercont";

export default function AdminPanel() {
  const [listCont, setListCont] = useState([]);
  async function fetchApi() {
    const responseTittles = await axios.get(
      `https://63e531bbc04baebbcdb5d306.mockapi.io/contacts`
    );

    const respKey = responseTittles.data?.map((todo, index) => {
      return (
        <ContainerCont
          key={index}
          nombre={todo.nombre}
          correo={todo.correo}
          desc={todo.desc}
        />
      );
    });

    setListCont(respKey);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="box-admin">
      <h1>Admin Panel</h1>
      <div className="admin-container">{listCont}</div>
    </div>
  );
}
