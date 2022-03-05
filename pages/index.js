import NavbarWrapper from "@components/navbar/Navbar";
import { Fragment } from "react";
import Table from "@components/table/table";

export default function Home() {
    return (
        <Fragment>
            <NavbarWrapper>
                <h1>Hellooo</h1>
                <div style={{ width: "calc( 100vw - 90px )", maxHeight: "500px" }}>
                    <Table />
                </div>
            </NavbarWrapper>
        </Fragment>
    );
}
