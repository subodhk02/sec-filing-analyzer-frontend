import React, { Fragment } from "react";
import Metrics from "./Metrics";
import NewsSection from "./NewsSection";

function Overview() {
    const data = [
        { data: "1,000", label: "Total Users" },
        { data: "2,000", label: "Total Projects" },
        { data: "3,000", label: "Total Tasks" },
        { data: "4,000", label: "Total Bugs" },
        { data: "5,000", label: "Total Features" },
    ];
    const news = [
        {
            heading: "Lorem ipsum dolor sit amet",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            heading: "Lorem ipsum dolor sit amet",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];
    return (
        <div className="m-2 md:m-10 bg-white p-3 md:p-9 md:grid md:grid-cols-10">
            <div className="flex-col justify-between md:col-span-6 border-2 border-white border-b-gray-200 md:border-r-gray-200 md:border-b-white pb-5">
                <div className="flex flex-col md:flex-row md:justify-between w-full content-center">
                    <p className="font-bold text-2xl"> Overview</p>
                    <p className="pr-9 pt-1 h-auto cursor-pointer">Edit Metrics</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start">
                    {data.map((item, index) => {
                        return (
                            <Fragment key={`Overall${index}`}>
                                <Metrics data={item.data} label={item.label} />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col md:col-span-4 md:pl-10 md:pr-10 mt-5 md:mt-0">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div>
                        <p className="font-bold text-2xl">Recent News Section</p>
                    </div>
                    <div className="pt-1 cursor-pointer">
                        <p>View All</p>
                    </div>
                </div>
                {news.map((item, index) => {
                    return (
                        <Fragment key={`News${index}`}>
                            <NewsSection heading={item.heading} body={item.body} />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default Overview;
