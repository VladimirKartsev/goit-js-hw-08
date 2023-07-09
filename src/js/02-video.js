import Vimeo from '@vimeo/player';

import throttle from 'lodash.throttle';

const localKey = 'videoplayer-current-time';
const iframe = document.querySelector('#iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(localKey, currentTime);
}
const timeupdate = () => {
  const currentTime = localStorage.getItem(localKey);
  if (currentTime) {
    const timeJson = JSON.parse(currentTime);
    const { second } = timeJson;
    return second;
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
