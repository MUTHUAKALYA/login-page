import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CustomerCard from "../components/CustomerCard";

const CustomerDetails = () => {
  // setting details state

  const [details, setDetails] = useState(null);
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
        // console.log(DetailsJson); // Debug Log
        setDetails(DetailsJson.message);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
      {console.log(details)}
      <div className="bg-blue-900 h-screen p-4 sm:p-10 ">
        {details != null && (
          <CustomerCard
            category={details.customerCategory}
            code={details.customerCode}
            name={details.customerName}
            currency={details.default_currency}
            territory={details.territory}
          />
        )}
      </div>
    </>
  );
};

export default CustomerDetails;
