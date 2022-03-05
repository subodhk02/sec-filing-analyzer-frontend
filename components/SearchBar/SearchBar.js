import React, { Fragment } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Autocomplete from "@mui/material/Autocomplete";
import { COMPANY_LIST } from "@utils/constants/company_list";
import { Button } from "@mui/material";

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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "40vw",
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
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

function SearchBar() {
    const [value, setValue] = React.useState("");
    const [search, setSearch] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    };

    return (
        <Fragment>
            <Autocomplete
                freeSolo
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={search}
                onInputChange={(event, newInputValue) => {
                    setSearch(newInputValue);
                }}
                options={COMPANY_LIST}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                isOptionEqualToValue={(option, value) => option === value}
                renderInput={(params) => {
                    const { InputLabelProps, InputProps, ...rest } = params;
                    return (
                        <Search onSubmit={handleSubmit}>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                                {...params.InputProps}
                                {...rest}
                            />
                            <Button
                                type="submit"
                                onSubmit={() => {
                                    console.log("ehlloo");
                                }}
                            >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                            </Button>
                        </Search>
                    );
                }}
            />
        </Fragment>
    );
}

export default SearchBar;
