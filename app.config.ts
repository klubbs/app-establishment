import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";
export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Estabelecimentos",
	owner: "klubbs",
	slug: "klubbs-establishment",
	scheme: "klubbs-establishment",
	orientation: "portrait",
	splash: {
		image: "./assets/images/splash.png",
		resizeMode: "contain",
		backgroundColor: "#2D2F35",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	version: "0.0.6",
	ios: {
		supportsTablet: false,
		bundleIdentifier: "app.klubbs.establishment",
		buildNumber: "0.0.12",
		icon: "./assets/images/icon.png",
		infoPlist: {
			NSPhotoLibraryUsageDescription:
				"Necessistamos da sua autorização para que você consiga escolher uma imagem da sua galeria.",
			NSCameraUsageDescription:
				"Precisamos da sua autorização para que você possa validar vendas por QR Code.",
		},
	},
	android: {
		package: "app.klubbs.establishment",
		versionCode: 10,
		adaptiveIcon: {
			foregroundImage: "./assets/images/android-icon.png",
			backgroundColor: "#1F1F1F",
		},
	},
	plugins: [
		[
			'expo-build-properties',
			{
				android: {
					compileSdkVersion: 33,
					targetSdkVersion: 33,
					buildToolsVersion: '33.0.0',
				},
			},
		],
	],
	extra: {
		eas: {
			projectId: process.env.ENVIRONMENT_PROJECT_EAS_ID,
		},
		KLUBBS_API_URL: process.env.ENVIRONMENT_KLUBBS_API_URL,
		KLUBBS_AUTHZN_URL: process.env.ENVIRONMENT_KLUBBS_AUTHZN_URL,
		PLACES_API: process.env.ENVIRONMENT_PLACES_API,
	},
});
