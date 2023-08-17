import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "music-player",

  initialize() {
    withPluginApi("0.8", (api) => {
      
      api.onPageChange((url, title) => {
        const scMusicPlayerOpened = document.querySelector(".below-footer-outlet.sc-music-player .music-player.open");

        if (scMusicPlayerOpened) {
          scMusicPlayerOpened.classList.remove("open");
        }
      });
    });
  }
};
