import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./common/Navbar";

export default function Employee() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:9000/pulldata/items");
        setItems(response.data);
        console.log(response.data); // Log the fetched items
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchItems();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/search/${searchTerm}`
      );
      setItems([response.data]); // Assuming the search returns a single item
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleDelete = async (uniqueId) => {
    try {
      let res = await axios.delete(`http://localhost:9000/delete/${uniqueId}`);
      alert(res.data.message);
      console.log(res.data.message);
      // Refresh items after deletion
      setItems((prevItems) =>
        prevItems.filter((item) => item.uniqueId !== uniqueId)
      );
    } catch (error) {
      console.error("Error deleting item", error);
      alert("Error deleting item");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ float: "right", display: "flex", marginTop: "1vh" }}>
        <h4>Total Count: {items.length}</h4>
        <button
          style={{
            width: "15vw",
            height: "4vh",
            border: "1px solid black",
            borderRadius: "6px",
            marginRight: "4vw",
            marginLeft: "3vw",
          }}
          onClick={() => navigate("/Create")}
        >
          Create Employee
        </button>
      </div>

      <div style={{ marginTop: "3vw" }}>
        <div style={{ backgroundColor: "lightBlue", paddingLeft: "70vw" }}>
          <input
            type="text"
            style={{ width: "20vw" }}
            placeholder="Enter Search keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div>
          <table className="table table-bordered">
            <thead>
              <tr style={{ backgroundColor: "lightblue" }}>
                <th>Unique Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.uniqueId}>
                  <td>{item.uniqueId}</td>
                  <td>
                    <img src={item.img} alt="Employee" width={50} height={50} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNo}</td>
                  <td>{item.designation}</td>
                  <td>{item.gender}</td>
                  <td>{item.course}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      style={{
                        height: "5vh",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                      onClick={() => navigate(`/Edit/${item.uniqueId}`)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        height: "5vh",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                      onClick={() => handleDelete(item.uniqueId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
