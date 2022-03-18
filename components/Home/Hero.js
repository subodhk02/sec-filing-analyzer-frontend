import React from "react";
import LoginIcon from "../../assets/images/login.svg";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import SearchBar from "@components/SearchBar/SearchBar";

function Hero() {
    return (
        <div className="heroSection">
            <div className="Nav">
                <div className="pages">
                    <a>Home</a>
                    <a>Explore</a>
                    <a>About Us</a>
                </div>
                <div className="login text-base gap-x-2 md:flex bg-white m-0 items-center pl-6 pr-6 pt-2 pb-2 rounded-md hidden ">
                    <Image src={LoginIcon} alt="logoin" />
                    <p className="text-zinc-500	">Login</p>
                </div>
            </div>
            <div className="hero">
                <div className="heroLogo">
                    <Image src={Logo} alt="Logo" layout="responsive" />
                </div>
                <p className="title">10k Reports</p>
                <p className="moto">Get Intuitive and Simplified insights</p>
                <div className="searchbar">
                    <SearchBar />
                </div>
                <div className="tagBox">
                    <div className="heading">
                        <p>Suggestions:</p>
                    </div>
                    <div className="tags">
                        <span className="tag">Stack One</span>
                        <span className="tag">Stack Two</span>
                        <span className="tag">Stack Three</span>
                        <span className="tag">Stock Four_05#2</span>
                        <span className="tag">Stack Five</span>
                        <span className="tag">Stack Six</span>
                        <span className="tag">Stock Seven_Eight</span>
                        <span className="tag">Stock 009</span>
                    </div>
                </div>
                <div className="tagBox">
                    <div className="heading">
                        <p>Watchlist:</p>
                    </div>
                    <div className="Watchtags">
                        <span className="Watchtag">Watchlist name | 19 Items | Label - Current Spendings</span>
                        <span className="Watchtag">Watchlist name | 200 Items | Label - Total Savings </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
