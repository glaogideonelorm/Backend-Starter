import dotenv from "dotenv";

dotenv.config();

const getEnv = (name: string) => {
    const value = process.env[name];
    if (!value) throw new Error(`Environment Variable ${name} undefined`);
    return value;
};

const config = {
    server: {
        port: () => parseInt(getEnv("PORT")) || 3000,
    },
    mongoDb: {
        uri: () => getEnv("MONGO_URI"),
    },
};

export default config;
