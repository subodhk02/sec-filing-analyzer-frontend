import NavbarWrapper from "@components/navbar/Navbar";
import { Fragment } from "react";
import Table from "@components/table/table";

export default function Home() {
    return (
        <Fragment>
            <NavbarWrapper>
                <h1>Hellooo</h1>
                <Table/>
            </NavbarWrapper>
        </Fragment>
    );
}
