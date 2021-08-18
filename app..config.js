import 'dotenv/config';


export default {
    name: "app-establishments",
    slug: "app-establishments",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    updates: {
        fallbackToCacheTimeout: 0
    },
    experiments: {
        "turboModules": true
    },
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#FFFFFF"
        }
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
        ENVIRONMENT_API_URL: process.env.ENVIRONMENT_API_URL
    }
}
