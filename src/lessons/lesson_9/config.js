import dotenv from "dotenv";

dotenv.config();

const config = {
    api_endpoint: process.env.REACT_APP_API_URL,
    auth_endpoint: process.env.REACT_APP_AUTH_URL,
    defaultLang: "uk",
    supportedLangs: [
        "uk", "en", "tr", "ja"
    ]
};

export default config;
