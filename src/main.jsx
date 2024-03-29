import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import App from "./App.jsx";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
