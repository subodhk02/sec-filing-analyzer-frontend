import NavbarWrapper from "@components/navbar/Navbar";
import { Fragment } from "react";
import Table from "@components/table/table";
import Graph from "@components/graph/Graph";
import Hero from "@components/Home/Hero";

const graphData = {
    labelList: ["Sample 1", "Sample 2", "Sample 3", "Sample 4"],
    yLabel: "Y Label",
    xLabel: "X Label",
    dataList: [
        {
            color: "red",
            title: "Bar Layer 1",
            data: [
                { x: 1, y: 15000 },
                { x: 2, y: 20000 },
                { x: 3, y: 200 },
                { x: 4, y: 30000 },
            ],
        },
        {
            color: "orange",
            title: "Bar Layer 2",
            data: [
                { x: 1, y: 1 },
                { x: 2, y: 20000 },
                { x: 3, y: 25000 },
                { x: 4, y: 60000 },
            ],
        },
        {
            color: "yellow",
            title: "Bar Layer 3",
            data: [
                { x: 1, y: 15000 },
                { x: 2, y: 20000 },
                { x: 3, y: 25000 },
                { x: 4, y: 400 },
            ],
        },
        {
            color: "green",
            title: "Bar Layer 4",
            data: [
                { x: 1, y: 15000 },
                { x: 2, y: 100 },
                { x: 3, y: 25000 },
                { x: 4, y: 30000 },
            ],
        },
    ],
};

export default function Home() {
    return (
        <Fragment>
            {/* <NavbarWrapper> */}
                {/* <h1>Hellooo</h1>
                <div style={{ width: "calc( 100vw - 90px )", maxHeight: "500px", overflow: "scroll" }}>
                    <Table />
                </div>
                <div style={{ width: "60%" }}>
                    <Graph bar graphData={graphData} />
                </div>
                <div style={{ width: "60%", maxHeight: "500px", marginTop: "10px" }}>
                    <Graph area graphData={graphData} />
                </div> */}
                
            {/* </NavbarWrapper> */}
            <Hero />
        </Fragment>
    );
}
