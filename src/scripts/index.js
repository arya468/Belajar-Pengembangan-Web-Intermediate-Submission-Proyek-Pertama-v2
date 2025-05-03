// CSS imports
import "../styles/styles.css";

import App from "./pages/app";
import Navbar from "./components/navbar";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    drawerButton: document.querySelector("#drawer-button"),
    navigationDrawer: document.querySelector("#navigation-drawer"),
  });

  // Initialize navigation
  Navbar.init();

  await app.renderPage();

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });
});
