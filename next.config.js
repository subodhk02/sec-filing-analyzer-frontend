module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["source.unsplash.com"],
    },
    publicRuntimeConfig: {
        backendUrl: process.env.BASE_URL,
    },
    env: {
        BASE_URL: "http://sec-filing-prod.ap-southeast-1.elasticbeanstalk.com/",
    },
};
