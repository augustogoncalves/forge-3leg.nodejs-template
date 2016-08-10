# data.management.api-nodejs-sample

[![Node.js](https://img.shields.io/badge/Node.js-4.4.3-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-2.15.1-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

# Description

This template (or boiler plate) implements a basic infrastrucutre for [Autodesk Forge 3 Legged OAuth](https://developer.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) with NodeJS. 

# Setup

For using this sample, you need a valid oAuth credential. Visit the [Forge Developer Portal](https://developer.autodesk.com), create an account, then [create an app](https://developer.autodesk.com/myapps/create). Use <b>http://localhost:3000/api/autodesk/callback</b> as Callback URL. Finally take note of the <b>Client ID</b> and <b>Client Secret</b>.

First clone this template or download it. Via command line, use the following:

    git clone https://github.com/augustogoncalves/forge-3leg.nodejs-template
    cd forge-3leg.nodejs-template
    
To run it, install the required packages, set the enviroment variables with your client ID & secret and finally run it. Via command line, use the following:

    npm install
    export CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    node server.js

Open the browser: [http://localhost:3000](http://localhost:3000). 

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.


## Written by

Augusto Goncalves (Forge Partner Development)<br />
http://forge.autodesk.com<br />
