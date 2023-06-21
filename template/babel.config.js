module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
          ".env",
        ],
        root: ["./src"],
        alias: {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@assets": "./src/assets",
          "@store": "./src/store",
        },
      },
    ],
    ["module:react-native-dotenv", {
      envName: "APP_ENV",
      moduleName: "@env",
      path: ".env"
    }],
    "react-native-reanimated/plugin",
  ]
};
