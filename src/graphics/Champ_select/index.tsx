import React from "react";
import ReactDOM from "react-dom";
import Favicon from 'react-favicon'
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./app";
import 'regenerator-runtime/runtime'

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
      <Favicon url='https://i.imgur.com/JxYI2V9.png' />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

