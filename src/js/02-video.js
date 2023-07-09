import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('#iframe');
const localKey = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(localKey, currentTime);
}
const timeupdate = () => {
  const currentTime = localStorage.getItem(localKey);
  if (currentTime) {
    const timeJson = JSON.parse(currentTime);
    const { seconds } = timeJson;
    return seconds;
  }
};
player
  .setCurrentTime(timeupdate())
  .then(function (seconds) {})

  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
