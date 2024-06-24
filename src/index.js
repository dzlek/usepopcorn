import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import TextExpanderApp from "./TextExpander";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="green"
//         maxRating={10}
//         size={24}
//         className="test"
//         defaultRating={3}
//         onSetRating={setMovieRating}
//       />

//       <p>This movies rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />

    <Test />

    <TextExpanderApp /> */}
  </React.StrictMode>
);
