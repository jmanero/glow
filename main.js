'use strict';
const electron = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const Express = require('express');
const HTTP = require('http');
const Path = require('path');
const URL = require('url');

const app = Express();
const server = HTTP.createServer(app);

require('./lib/dist').attach(app);

app.set('views', Path.resolve(__dirname, './view'));
app.get('/v1/electron/main', (req, res) => res.render('main.ejs'));

server.listen(7777);

let main = null;

function start () {
  if (main !== null) return;

  main = new BrowserWindow({width: 800, height: 600, titleBarStyle: 'hidden'});

  main.loadURL('http://localhost:7777/v1/electron/main');
  main.on('closed', () => { main = null; });
}

electron.on('ready', start);
electron.on('activate', start);
electron.on('window-all-closed', () => electron.quit());
