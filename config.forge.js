import { utils } from "@electron-forge/core";

module.exports = {
  buildIdentifier: process.env.IS_BETA ? "stage" : "prod",
  packagerConfig: {
    appBundleId: utils.fromBuildIdentifier({
      stage: "com.stage.app",
      prod: "com.app",
    }),
  },
  hooks: {
    generateAssets: async (forgeConfig, platform, arch) => {
      //TODO: GENERATE RESOURCES FOLDER
    },
  },
};
