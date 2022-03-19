import React, { Fragment, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import axios from "axios";
import { useGlobal } from "@utils/global";
import { useRouter } from "next/router";

const Search = styled("form")(({ theme }) => ({
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        // width: "40vw",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 10),
    marginRight: theme.spacing(1),
    height: "100%",
    color: "white",
    cursor: "pointer",
    // position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create("width"),
        // width: "100%",
        [theme.breakpoints.up("md")]: {
            // width: "20ch",
        },
    },
}));

function SearchBar() {
    const router = useRouter();
    const { companies } = useGlobal();
    const [value, setValue] = React.useState("");
    const [search, setSearch] = React.useState("");
    const [searchData, setsearchData] = useState(null);
    const [companyList, setCompanyList] = useState([]);

    const handleSubmit = (e, search) => {
        e.preventDefault();
        let slug = "";
        for (let i = 0; i < companyList.length; i++) {
            if (companyList[i] === search) {
                slug = searchData[i].slug;
                break;
            }
        }
        console.log(slug);
        router.push(`/company/${slug}`);
    };
    useEffect(() => {
        axios.get(`${process.env.BASE_URL}company/list/?limit=400`).then((res, err) => {
            console.log("api call inside component: ", res.data);
            setsearchData(res.data.results);
            let tempCompanyList = [];
            for (let i = 0; i < res.data.results.length; i++) {
                tempCompanyList.push(res.data.results[i].name + " ( " + res.data.results[i].cik_number + " )");
            }
            setCompanyList(tempCompanyList);
        });
    }, []);

    return (
        <Fragment>
            {searchData && (
                <Autocomplete
                    // freeSolo
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        handleSubmit(event, event.target.outerText);
                    }}
                    inputValue={search}
                    onInputChange={(event, newInputValue) => {
                        setSearch(newInputValue);
                    }}
                    options={companyList}
                    className="w-[80vw] md:w-[50vw]"
                    renderInput={(params) => {
                        const { InputLabelProps, InputProps, ...rest } = params;
                        return (
                            <Search onSubmit={handleSubmit}>
                                <Button
                                    type="submit"
                                    onSubmit={(event) => {
                                        console.log(event.target);
                                        handleSubmit(event, event.target.outerText);
                                    }}
                                    className="w-10"
                                >
                                    <SearchIconWrapper>
                                        <SearchIcon style={{ color: "#F89838" }} />
                                    </SearchIconWrapper>
                                </Button>
                                <StyledInputBase
                                    placeholder="Search for a company"
                                    inputProps={{ "aria-label": "search" }}
                                    {...params.InputProps}
                                    {...rest}
                                />
                            </Search>
                        );
                    }}
                />
            )}
        </Fragment>
    );
}

export default SearchBar;
