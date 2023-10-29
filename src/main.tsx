import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "../index.css";
import { Navigation } from "./routes/Navigation";
import { Footer, Header } from "./components";
import './global.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col sm:flex-row h-full m-2 rounded-xl">
            <Navigation />
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>
);
