import { GlobalContext } from "@utils/global";
import "/styles/global.css";
import React from "react";
import axios from "axios";

// Performance Metrics logging
// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const [companies, setCompanies] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${process.env.BASE_URL}company/list/?limit=300`).then((res) => {
            console.log("companies response: ", res);
            setCompanies(res.data.results);
        });
    }, []);
    return (
        <>
            {/* <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IN',
                    url: SITE_URL,
                    site_name: SITE_NAME,
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
            /> */}
            <GlobalContext.Provider
                value={{
                    companies: companies,
                }}
            >
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    );
}

export default MyApp;
