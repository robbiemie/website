/* eslint-disable */

import Helper from '../common/Helper';
import Platform from '../common/Platform';

const result = new RegExp('channel=([^&]*)', 'i').exec(window.location.search)
const channel = (result && decodeURI(result[1])) || 'feidao'
const pkCode = Helper.getParam('pkCode'); // PK码
const pkId = Helper.getParam('pkId'); // pkId
const gameId = Helper.getParam('gameId'); // 游戏Id
const inviteCode = Helper.getParam('inviteCode'); // 邀请码
const downloadUrl = `https://kxd.yy.com/m/?vendor=${channel}&auto=1`;
// const schemeDownload = 'makefriends://'; // 仅仅是唤起appid
const schemeAcceptInvite = `makefriends://`; // 唤起APP，进入小资料卡
const backDownloadUrl = encodeURIComponent(downloadUrl); // 唤不起app跳转的URL
const ulinkAcceptInvite = `//xh.yy.com/linkapp/?redirect=${backDownloadUrl}`;
let timer;

const pageHide = () => {
  clearTimeout(timer);
};

const visibilityChanges = ['visibilitychange', 'webkitvisibilitychange'];
const cancelJump = () => {
  const isHidden = document.hidden || document.webkitHidden;
  if (isHidden) {
    pageHide(timer);
  }
};

const iframeJump = (schemaUrl, fail) => {
  const iframe = document.createElement('iframe');
  const body = document.body;
  iframe.style.cssText = 'display:none;width=0;height=0';
  body.appendChild(iframe);
  iframe.src = schemaUrl;
  timer = setTimeout(() => {
    fail();
  }, 1500);
};

const canAutoAccept = () => {
  const accept = localStorage.getItem('accept');

  // 60秒内有效

  const last = Number(accept) || 0;

  const time = Date.now() - last;

  console.log('canAutoAccept time:', time);

  if (time < 60 * 100) {
    return true;
  }

  return false;
};


visibilityChanges.forEach((eventName) => {
  document.addEventListener(eventName, cancelJump);
});
document.addEventListener('pagehide', () => {
  pageHide();
});

export default {
  downloadUrl,
  open: iframeJump,
  canAutoAccept,
  // 接受邀请，唤起App,换不起跳转到下载页面
  doAcceptInvite() {
    if (Platform.os.iOS) {
      location.href = ulinkAcceptInvite;
    } else {
      iframeJump(schemeAcceptInvite, () => {
        location.href = downloadUrl;
      });
    }
  },
};
