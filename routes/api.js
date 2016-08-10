/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////
'use strict';

var utils = require('./utils');

var express = require('express');
var router = express.Router();

var forgeOAuth2 = require('forge-oauth2');
var config = require('./config');

router.get('/user/logoff', function (req, res) {
  req.session.destroy();
  res.end('/');
});

router.get('/user/profile', function (req, res) {
  forgeOAuth2.ApiClient.instance.authentications ['oauth2_access_code'].accessToken = req.session.internaltoken;
  var oa3Info = new forgeOAuth2.InformationalApi();
  oa3Info.aboutMe().then(function (data) {
    var profile = {
      'name': '{0} {1}'.format(data.firstName, data.lastName),
      'picture': data.profileImages.sizeX20
    };
    res.end(JSON.stringify(profile));
  });
});

router.get('/user/token', function (req, res) {
  res.end(req.session.publictoken);
});

router.get('/user/authenticate', function (req, res) {
  // redirect the user to this page
  res.end('{0}/authentication/v1/authorize?response_type={1}&client_id={2}&redirect_uri={3}&scope={4}'.format(
    forgeOAuth2.ApiClient.instance.basePath, 'code', config.credentials.client_id, config.callbackURL, config.scopeInternal));

  // and wait for Autodesk callback
  router.get('/autodesk/callback', function (req, res) {
    var code = req.query.code;
    var oauth3legged = new forgeOAuth2.ThreeLeggedApi();

    // first get a full scope token for internal use (server-side)
    oauth3legged.gettoken(config.credentials.client_id, config.credentials.client_secret, 'authorization_code', code, config.callbackURL)
      .then(function (data) {
        req.session.internaltoken = data.access_token; // store in-session
        console.log('Internal token (full scope): ' + req.session.internaltoken); // debug

        // then refresh and get a limited scope token that we can send to the client
        oauth3legged.refreshtoken(config.credentials.client_id, config.credentials.client_secret, 'refresh_token', data.refresh_token, config.scopePublic)
          .then(function (data) {
            req.session.publictoken = data.access_token; // store in-session
            console.log('Public token (limited scope): ' + req.session.publictoken); // debug
            res.redirect('/');
          })
          .catch(function (error) {
            res.end(JSON.stringify(error));
          });
      })
      .catch(function (error) {
        res.end(JSON.stringify(error));
      });
  });
});

module.exports = router;