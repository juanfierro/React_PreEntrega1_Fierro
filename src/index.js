import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import 'bulma/css/bulma.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>)
