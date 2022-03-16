import Document, { Html, Head, Main, NextScript } from "next/document";
import PropTypes from "prop-types";

class CustomNextScript extends NextScript {
    static propTypes = {
        /**
         * Set to `defer` to use `defer` instead of `async` when rendering script elements.
         */
        mode: PropTypes.oneOf(["async", "defer"]),
    };

    static defaultProps = {
        mode: "async",
    };

    getScripts() {
        return super.getScripts().map((script) => {
            return React.cloneElement(script, {
                key: script.props.src,
                defer: this.props.mode === "defer" ? true : undefined,
                async: this.props.mode === "async" ? true : undefined,
            });
        });
    }
}

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
                        rel="stylesheet"
                    /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
                </Head>

                <body className="text-sm md:text-base">
                    <Main />
                    <CustomNextScript mode="defer" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
