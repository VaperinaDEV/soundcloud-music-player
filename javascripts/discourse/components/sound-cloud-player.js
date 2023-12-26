import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SoundCloudPlayer extends Component {
  @tracked SoundCloudPlayer = JSON.parse(settings.sound_cloud_player);

  @action
  toggleScIframe() {
    const scPlayersFull = document.querySelector(".below-footer-outlet.sc-music-player .music-player .player-iframes .player-sc-iframe:hover");
    const scPlayersHidden = document.querySelectorAll(".below-footer-outlet.sc-music-player .music-player .player-iframes .player-sc-iframe:not(:hover)");

    scPlayersFull.closest("div").classList.toggle("full-size");

    scPlayersHidden.forEach((scHidden) => {
      scHidden.classList.toggle("hidden");
    });
  }
}    
