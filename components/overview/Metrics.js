import React from "react";

function Metrics({ data, label }) {
    return (
        <div
            className=" text-center p-3 md:p-10 m-3 md:m-5"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        >
            <p className="font-bold text-5xl mb-8 mt-9">{data}</p>
            <p className="text-xl">{label}</p>
        </div>
    );
}

export default Metrics;
