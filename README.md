# Express Web Application Skeleton

This repository contains a skeleton for creating new web applications using:
* Node.js
* Express
* Handlebars

## Running website

    $ git clone git@github.com:pjanuario/express-webapp-skeleton.git

    $ cd express-webapp-skeleton

    $ npm install

    $ npm start
    Loading development configuration...
    Started webapp at port 8080

    $ open http://localhost:8080

## Basic Auth

The skeleton is configured to have Basic Authentication when running with NODE_ENV=production. To remove the basic Auth just do the following steps:

**Remove basic-auth-connect package**


    $ npm uninstall basic-auth-connect --save

**Remove the basic auth config from index.js **


    // remove line 4
    basicAuth = require('basic-auth-connect'),

    ...

    // Configure basic auth - until is not live
    if(!isDev){
      app.use(basicAuth('user', 'password'));
    }
