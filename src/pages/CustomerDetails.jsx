import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";

const CustomerDetails = () => {
  // setting details state

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const userName = "CAMPMATE";
    const token = "token b27e96202a47c9c:69040d57c54cbc9";
    const api = `/api/method/logistix_erp_integration.api_files.get_customer?customerName=CAMPMATE`;

    const fetchDetails = async () => {
      try {
        const fetchedDetails = await fetch(api, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!fetchedDetails.ok) {
          throw new Error("Network response was not ok");
        }

        const DetailsJson = await fetchedDetails.json();
        console.log(DetailsJson); // Debug Log
        setDetails(DetailsJson);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <SideBar />
    </div>
  );
};

export default CustomerDetails;
