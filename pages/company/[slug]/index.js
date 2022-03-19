import React, { Fragment, useEffect, useState } from "react";
import NavbarWrapper from "@components/navbar/Navbar";
import Image from "next/image";
import { Button, Stack } from "@mui/material";
import WhiteListIcon from "../../../assets/images/whitelist.svg";
import Overview from "@components/overview/Overview";
import Metrics from "@components/metrics/Metrics";
import axios from "axios";

function Company({ slug }) {
    const [company, setCompanyName] = useState("");
    const [cik, setCik] = useState("");

    useEffect(() => {
        axios.get(`${process.env.BASE_URL}company/${slug}/`).then((res) => {
            setCompanyName(res.data.name);
            setCik(res.data.cik_number);
        });
    }, []);

    return (
        <Fragment>
            <div className="bg-gray-50">
                <NavbarWrapper>
                    <div
                        className="flex gap-10 flex-col md:flex-row pl-10 pr-10 pt-10 pb-10 items-center justify-between"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="flex gap-x-10 flex-row items-center justify-between">
                            {/* <div className="w-20 h-20">
                                <Image
                                    src="https://source.unsplash.com/random"
                                    width={92}
                                    height={92}
                                    layout="fixed"
                                    className="rounded-md"
                                />
                            </div> */}
                            <div className="flex flex-col">
                                <p className="font-bold text-2xl">{company}</p>
                                <p className="font-bold text-lg">CIK : {cik}</p>
                                {/* <p className="font-bold text-1xl"> ril.com</p> */}
                            </div>
                        </div>
                        {/* <Stack spacing={2} direction="row">
                            <Button
                                variant="outlined"
                                style={{
                                    borderRadius: "5px",
                                    fontSize: "18px",
                                    color: "#757575",
                                    textTransform: "none",
                                }}
                            >
                                CSV
                            </Button>
                            <Button
                                variant="contained"
                                style={{
                                    borderRadius: "5px",
                                    backgroundColor: "#F89838",
                                    fontSize: "18px",
                                    textTransform: "none",
                                    display: "flex",
                                    gap: "3px",
                                }}
                            >
                                <Image src={WhiteListIcon} width={20} height={20} />
                                <p>Whitelist</p>
                            </Button>
                        </Stack> */}
                    </div>
                    {/* <Overview /> */}
                    <Metrics slug={slug} />
                </NavbarWrapper>
            </div>
        </Fragment>
    );
}

export default Company;

export async function getServerSideProps(context) {
    const { slug } = context.params;
    // const response = await axiosInstance.get("company/list/?limit=400").then((res, err) => {
    // console.log(JSON.stringify(res));
    // });
    // console.log(response);
    return {
        props: {
            slug,
        },
    };
}
