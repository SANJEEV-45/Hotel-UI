import React from "react";
import ReactDOM from "react-dom/client";
import "react-router-dom";
import HotelUI from "./layouts/hotelUI.jsx";
import HotelValidation from "./components/HotelValidation.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ContextProvider>
          <RouterProvider router={Router} />
        </ContextProvider> */}
        <HotelValidation/>
    </React.StrictMode>
);
