import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';
export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Estabelecimentos",
	owner: "klubbs",
	slug: "klubbs-establishment",
	scheme: 'klubbs-establishment',
	orientation: "portrait",
	icon: './assets/icon.png',
	splash: {
		image: "./assets/images/splash.png",
		resizeMode: "contain",
		backgroundColor: "#2D2F35"
	},
	updates: {
		fallbackToCacheTimeout: 0
	},
	experiments: {
		"turboModules": true
	},
	version: "0.0.4",
	ios: {
		supportsTablet: false,
		bundleIdentifier: "app.klubbs.establishment",
		buildNumber: "0.0.9",
		infoPlist: {
			NSPhotoLibraryUsageDescription: "Necessistamos da sua autorização para que você consiga escolher uma imagem da sua galeria.",
			NSCameraUsageDescription: "Precisamos da sua autorização para que você possa validar vendas por QR Code."
		}
	},
	android: {
		package: "app.klubbs.establishment",
		versionCode: 2,
		adaptiveIcon: {
			foregroundImage: './assets/android-icon.png',
			backgroundColor: '#515151'
		}
	},
	extra: {
		KLUBBS_API_URL: process.env.ENVIRONMENT_KLUBBS_API_URL,
		KLUBBS_AUTHZN_URL: process.env.ENVIRONMENT_KLUBBS_AUTHZN_URL,
		PLACES_API: process.env.ENVIRONMENT_PLACES_API
	}
});

