import React from "react";
import ReactDOM from "react-dom/client";
import "react-router-dom";
import HotelUI from "./layouts/hotelUI.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ContextProvider>
          <RouterProvider router={Router} />
        </ContextProvider> */}
        <HotelUI/>
    </React.StrictMode>
);
