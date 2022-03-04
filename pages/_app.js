import "/styles/global.css";

// Performance Metrics logging
// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
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
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
