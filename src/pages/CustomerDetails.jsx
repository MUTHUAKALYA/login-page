import React, { useEffect, useState } from "react";

const CustomerDetails = () => {
  // setting details state

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const userName = "CAMPMATE";
    const token = "b27e96202a47c9c:69040d57c54cbc9";
    const api =
      "/api/method/logistix_erp_integration.api_files.get_customer?customerName=CAMPMATE";

    const fetchDetails = async () => {
      const fetchedDetails = await fetch(api, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      const DetailsJson = await fetchedDetails.json();

      console.log(DetailsJson.headers.get("content-type"));

      // setDetails(DetailsJson);
      // console.log(details);
    };

    fetchDetails();
  }, []);
  // console.log(details);

  return (
    <div>
      {/* {details.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} />
      ))} */}
    </div>
  );
};

export default CustomerDetails;

//second method

// import React, { useEffect, useState } from "react";

// const CustomerDetails = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const username = "CAMPMATE"; // Replace with your username
//       const token = "token b27e96202a47c9c:69040d57c54cbc9"; // Replace with your token
//       const apiURL =
//         "/api/method/logistix_erp_integration.api_files.get_customer?customerName=CAMPMATE"; // Replace with your API URL

//       try {
//         const response = await fetch(apiURL, {
//           method: "GET",
//           headers: {
//             Authorization: `${token}`,
//             "Content-Type": "application/json",
//             Accept: "*/*",
//           },
//           credentials: "include",
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         setData(result);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default CustomerDetails;

//third time checking

// import { useState, useEffect } from "react";

// const CustomerDetails = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };

// export default CustomerDetails;
