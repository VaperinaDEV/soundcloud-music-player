import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class extends Component {
  @action
  toggleMusicPlayer() {
    const scMusicPlayer = document.querySelector(".below-footer-outlet.sc-music-player .music-player");
    scMusicPlayer.classList.toggle("open");
  }
}
