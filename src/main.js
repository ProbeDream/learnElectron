import { app, BrowserWindow } from "electron";

const createWindow = () => {
  let win = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("../index.html");
};
app.on("ready", createWindow);
