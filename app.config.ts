import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Klubbs Estabelecimentos",
	slug: "Klubbs-Estabelecimentos",
	orientation: "portrait",
	splash: {
		image: "./assets/images/welcome-login-icons-image.png",
		resizeMode: "contain",
		backgroundColor: "#2D2F35"
	},
	updates: {
		fallbackToCacheTimeout: 0
	},
	experiments: {
		"turboModules": true
	},
	ios: {
		supportsTablet: false,
		bundleIdentifier: "app.klubbs.establishment",
		buildNumber: "1.0.0",
		infoPlist: {
			NSPhotoLibraryUsageDescription: "Necessistamos da sua autorização para que possa validar vendas por QR Code."
		}
	},
	version: "1.0.0",
	android: {
		package: "app.klubbs.establishment",
		versionCode: 100
	},
	extra: {
		API_URL: process.env.ENVIRONMENT_API_URL,
		PLACES_API: process.env.ENVIRONMENT_PLACES_API
	}
});

