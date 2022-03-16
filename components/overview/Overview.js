import React, { Fragment } from "react";
import Metrics from "./Metrics";

function Overview() {
    const data = [
        { data: "1,000", label: "Total Users" },
        { data: "2,000", label: "Total Projects" },
        { data: "3,000", label: "Total Tasks" },
        { data: "4,000", label: "Total Bugs" },
        { data: "5,000", label: "Total Features" },
    ];
    return (
        <div className="m-10 bg-white p-9 md:grid md:grid-cols-10">
            <div className="flex-col justify-between md:col-span-6 border-2 border-white border-b-gray-200 md:border-r-gray-200 md:border-b-white">
                <div className="flex flex-col md:flex-row md:justify-between w-full content-center">
                    <p className="font-bold text-2xl"> Overview</p>
                    <p className="pr-9 pt-1 h-auto">Edit Metrics</p>
                </div>
                <div className="flex flex-wrap">
                    {data.map((item, index) => {
                        return (
                            <Fragment key={`Overall${index}`}>
                                <Metrics data={item.data} label={item.label} />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between md:col-span-4 pl-10 pr-10">
                <p className="font-bold text-2xl">Recent News Section</p>
            </div>
        </div>
    );
}

export default Overview;
