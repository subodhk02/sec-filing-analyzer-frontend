import * as React from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Graph from "@components/graph/Graph";
import axios from "axios";
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { GraphV2 } from "@components/graph/GraphV2";
import { GraphV3 } from "@components/graph/GraphV3";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

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

const gdata = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default function BasicTabs({ slug }) {
    const [value, setValue] = React.useState(0);
    const [ebitda, setEbitda] = React.useState([]);
    const [revenue, setRevenue] = React.useState([]);
    const [ebitdaData, setEbitdaData] = React.useState(null);
    const [revenueData, setRevenueData] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${process.env.BASE_URL}stats/ebitda/${slug}/`).then((res) => {
            setEbitda(res.data.results);
            let tempEbdita = {
                labelList: ["EBITDA"],
                yLabel: "Ebdita",
                xLabel: "Timestamp",
                dataList: [
                    {
                        color: "red",
                        // title: "Ebitda",
                        data: [],
                    },
                ],
            };
            res.data.results.forEach((item) => {
                let tE = {
                    x: item.end_timestamp.substr(0, 4),
                    y: item.ebitda ? item.ebitda : 0,
                };
                if (tE.y != 0) tempEbdita.dataList[0].data.push(tE);
            });
            setEbitdaData(tempEbdita);
        });
        console.log(revenueData);
        axios.get(`${process.env.BASE_URL}stats/revenue/${slug}/`).then((res) => {
            setRevenue(res.data.results);
            let tempRevenue = {
                labelList: ["Revenue"],
                yLabel: "Revenue",
                xLabel: "Timestamp",
                dataList: [
                    {
                        color: "red",
                        title: "Revenue",
                        data: [],
                    },
                ],
            };
            res.data.results.forEach((item) => {
                let tR = {
                    x: item.timestamp.substr(0, 7),
                    y: item.revenue ? item.revenue : 0,
                };
                if (tR.y != 0) tempRevenue.dataList[0].data.push(tR);
            });
            setRevenueData(tempRevenue);
        });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(revenueData);

    return (
        <div className="m-3 md:m-10 bg-white">
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }} style={{ color: "red" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                "&.Mui-disabled": { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab label="Ebdita" {...a11yProps(0)} />
                        <Tab label="Revenue" {...a11yProps(1)} />
                        {/* <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} /> */}
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div style={{ width: "50vw", marginTop: "10px", margin: "auto" }}>
                        {/* {ebitdaData && <Graph bar graphData={ebitdaData} />} */}
                        {ebitdaData && <GraphV2 bar graphData={ebitda} />}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div style={{ width: "60vw", marginTop: "10px", margin: "auto" }}>
                        {/* {revenueData && revenueData.dataList[0].data && <Graph bar graphData={revenueData} />} */}
                        <GraphV3 bar graphData={revenue} />
                    </div>
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div style={{ width: "60%", marginTop: "10px" }}>
                        <Graph bar graphData={graphData} />
                    </div>
                </TabPanel> */}
            </Box>
        </div>
    );
}
