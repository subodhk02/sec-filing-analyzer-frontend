import React from "react";
import axios from "axios";

console.log(process.env.BASE_URL);

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": "pZEhHTPqDMSY9O1Ws5G5gcG1wNx4sBoPZJv8WFDdGtPuxzQ3MWTxFC5K010Yy3BB",
        accept: "application/json",
    },
});
console.log(axiosInstance);

export default axiosInstance;
