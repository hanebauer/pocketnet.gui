require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  if(!process.env.APPLEID || !process.env.APPLEIDPASS){
    console.log("Build without signature!!!")
    return
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'app.pocketnet.gui',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLEID,
    appleIdPassword: process.env.APPLEIDPASS,
  });
};