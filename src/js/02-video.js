import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const localKey = 'videoplayer-current-time';
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(localKey, seconds);
}
const timeupdate = () => {
  const seconds = localStorage.getItem(localKey);
  if (seconds) {
    return seconds;
  }
};
player.setCurrentTime(timeupdate());
