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

$(document).ready(function () {
  var currentToken = get3LegToken();

  if (currentToken === '')
    $('#signInButton').click(signIn);
  else {
    getUserProfile(function (profile) {
      $('#signInProfileImage').removeClass(); // remove glyphicon-user
      $('#signInProfileImage').html('<img src="' + profile.picture + '"/>')
      $('#signInButtonText').text(profile.name);
      $('#signInButtonText').attr('title', 'Click to logoff');
      $('#signInButton').click(logoff);
    });
  }
});

function signIn() {
  jQuery.ajax({
    url: '/api/user/authenticate',
    success: function (rootUrl) {
      location.href = rootUrl;
    }
  });
}

function logoff() {
  jQuery.ajax({
    url: '/api/user/logoff',
    success: function (oauthUrl) {
      location.href = oauthUrl;
    }
  });
}

function get3LegToken() {
  var token = '';
  jQuery.ajax({
    url: '/api/user/token',
    success: function (res) {
      token = res;
    },
    async: false // this request must be synchronous for the Forge Viewer
  });
  if (token != '') console.log('3 legged token (User Authorization): ' + token); // debug
  return token;
}

function getUserProfile(onsuccess) {
  var profile = '';
  jQuery.ajax({
    url: '/api/user/profile',
    success: function (profile) {
      onsuccess(JSON.parse(profile));
    }
  });
}