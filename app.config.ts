import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Klubbs Estabelecimentos",
	slug: "klubbs-establishment",
	owner: "klubbs",
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
	version: "0.0.1",
	ios: {
		supportsTablet: false,
		bundleIdentifier: "app.klubbs.establishment",
		buildNumber: "0.0.1",
		infoPlist: {
			NSPhotoLibraryUsageDescription: "Necessistamos da sua autorização para que possa validar vendas por QR Code."
		}
	},
	android: {
		package: "app.klubbs.establishment",
		versionCode: 0_0_1
	},
	extra: {
		API_URL: process.env.ENVIRONMENT_API_URL,
		PLACES_API: process.env.ENVIRONMENT_PLACES_API
	}
});

