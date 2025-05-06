// CSS imports
import "../styles/styles.css";

import App from "./pages/app";
import Navbar from "./components/navbar";
import SkipToContentInitiator from "./utils/skip-to-content-initiator";

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize Skip to Content feature
  SkipToContentInitiator.init({
    skipLinkId: "skip-to-content",
    mainContentId: "main-content", // Using your existing main-content ID
  });

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
