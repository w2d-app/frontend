export default {
  "expo": {
    "name": "travel-app",
    "updates": {
       "url": "https://u.expo.dev/${projectID}",
    },
    "runtimeVersion": {
         "policy": "sdkVersion",
       },
    "slug": "travel-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
  
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "app.w2d",
      "googleServicesFile": process.env.google_service_info_plist
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package":  "app.w2d",
      "googleServicesFile": process.env.google_services_json
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "@react-native-google-signin/google-signin"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "75a95060-ed90-4838-94d5-36ef95b53acd"
      }
    },
    "owner": "w2d"
  }
}
