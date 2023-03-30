import React, { useEffect, useState } from "react";
import { phoneService } from "../../services/phone.services";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function AllPhones() {
    const navigate = useNavigate();
    const [phones, setPhones] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [selectedPhoneId, setSelectedPhoneId] = useState(null);
  
    useEffect(() => {
      fetchPhones();
    }, []);
  
    const fetchPhones = async () => {
      try {
        const response = await phoneService();
        setPhones(response.data);
        setIsFetching(false);
      } catch (error) {
        navigate("/error");
      }
    };
  
    const handleShowDetails = (phoneId) => {
      setSelectedPhoneId(phoneId);
    };
  
    if (isFetching) return <BeatLoader color="red" />;
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>All Phones</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "600px", width: "100%" }}>
          {phones.map((phone) => {
            const isPhoneSelected = phone.id === selectedPhoneId;
            return (
              <div key={phone.id} style={{ margin: "1rem 0", width: "100%" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{phone.name}</h3>
                <button
                  style={{ marginBottom: "0.5rem", padding: "0.5rem 1rem" }}
                  onClick={() => handleShowDetails(phone.id)}
                >
                  View details
                </button>
                {isPhoneSelected && (
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "1rem",
                      width: "100%",
                      boxSizing: "border-box",
                      textAlign: "left",
                    }}
                  >
                    <h4 style={{ fontSize: "1.2rem", margin: "0" }}>Details:</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li>
                        <img src={phone.imageFileName} width={100} alt="" />
                      </li>
                      <li>
                        <strong>Brand:</strong> {phone.manufacturer}
                      </li>
                      <li>
                        <strong>Model:</strong> {phone.name}
                      </li>
                      <li>
                        <strong>Description:</strong> {phone.description}
                      </li>
                      <li>
                        <strong>Color:</strong> {phone.color}
                      </li>
                      <li>
                        <strong>Screen:</strong> {phone.screen}
                      </li>
                      <li>
                        <strong>Processor:</strong> {phone.processor}
                      </li>
                      <li>
                        <strong>RAM:</strong> {phone.ram}
                      </li>
                      <li>
                        <strong>Price:</strong> {phone.price}$ USD
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default AllPhones;
