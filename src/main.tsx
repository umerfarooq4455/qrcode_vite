import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { ApiProvider } from "./contextapi/contextApi";
import { PdfDynamicProvider } from "./contextapi/PdfDynamicProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ApiProvider>
      <PdfDynamicProvider>
        <App />
      </PdfDynamicProvider>
    </ApiProvider>
  </BrowserRouter>
);
