# forge-3leg.nodejs-template

[![Node.js](https://img.shields.io/badge/Node.js-4.4.3-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-2.15.1-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

*Forge API*:
[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](http://developer-autodesk.github.io/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](http://developer-autodesk.github.io/)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://developer-autodesk.github.io/)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://developer-autodesk.github.io/)
[![Viewer](https://img.shields.io/badge/Forge%20Viewer-v2.10-green.svg)](http://developer-autodesk.github.io/)

# Description

This template (or boiler plate) implements a basic infrastrucutre for [Autodesk Forge 3 Legged OAuth](https://developer.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) with NodeJS. 

# Setup

For using this sample, you need an Autodesk developer credentials. Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account, then [create an app](https://developer.autodesk.com/myapps/create). For this new app, use <b>http://localhost:3000/api/autodesk/callback</b> as Callback URL. Finally take note of the <b>Client ID</b> and <b>Client Secret</b>.

Install [NodeJS](https://nodejs.org) if you don't have yet.

Clone this project or download it. To clone it via command line, use the following:

    git clone https://github.com/augustogoncalves/forge-3leg.nodejs-template
    cd forge-3leg.nodejs-template
    
To run it, install the required packages, set the enviroment variables with your client ID & secret and finally run it. Via command line, use the following:

    npm install
    export FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    npm start

Open the browser: [http://localhost:3000](http://localhost:3000). 

## Packages used

All Autodesk Forge NPM packages are included by default, see complete list of what's available at [NPM website](https://www.npmjs.com/browse/keyword/autodesk). Some other non-Autodesk packaged are used, including [express](https://www.npmjs.com/package/express) and its session/cookie middlewares ([express-session](https://www.npmjs.com/package/express-session) and [cookie-parser](https://www.npmjs.com/package/cookie-parser)) for user session handling. The front-end uses [bootsrap](https://www.npmjs.com/package/bootstrap) and [jquery](https://www.npmjs.com/package/jquery).

## Suggestions (tips & tricks)

For local development/testing, consider use <b>nodemon</b> package, which auto restart your node application after any modification on your code. To install it, use:

    sudo npm install -g nodemon

To use it, instead of <b>npm start</b>, use the following:

    nodemon server.js --ignore www/

Trick: the <b>--ignore</b> parameter indicates that the app should not restart if files under <b>www</b> folder are modified.

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.

## Written by

Augusto Goncalves (Forge Partner Development)<br />
http://forge.autodesk.com<br />
