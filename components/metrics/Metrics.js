import * as React from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Graph from "@components/graph/Graph";

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div style={{ width: "60%", marginTop: "10px" }}>
                        <Graph area graphData={graphData} />
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}
