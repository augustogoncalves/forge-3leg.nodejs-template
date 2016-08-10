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

module.exports = {

  // this this callback URL when creating your client ID and secret
  callbackURL: 'http://localhost:3000/api/autodesk/callback',

  // set enviroment variables or hard-code here
  credentials: {
    client_id: process.env.CLIENT_ID || '<replace with your consumer key>',
    client_secret: process.env.CLIENT_SECRET || '<replace with your consumer secret>',
  },

  // Required scopes for your application on server-side
  scopeInternal: 'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete',
  // Required scope of the token sent to the client
  scopePublic: 'data:read',
};