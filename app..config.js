import 'dotenv/config';
import colors from './assets/constants/colors';


export default {
	name: "app-establishments",
	slug: "app-establishments",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	splash: {
		image: "./assets/images/welcome-login-icons-image.png",
		resizeMode: "contain",
		backgroundColor: colors.COLOR_SECUNDARY_BLACK
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
