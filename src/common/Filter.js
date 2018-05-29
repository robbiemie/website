/* eslint-disable */
function addZero (num) {
  if (num < 10) return `0${num}`;
  return `${num}`;
}

export default {
  formatDate(timestamp) {
    const dateObj = new Date(timestamp * 1000);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    return `${month}-${date} ${addZero(hour)}:${addZero(minute)}`;
  },
  getReadMoney(money) {
    return money * 100
  },
  formatMin(sec) {
    const hour = parseInt(sec / 60, 10);
    const minute = parseInt(sec % 60, 10);

    return `${addZero(hour)}:${addZero(minute)}`;
  },
  imageview(img, size) {
    if (/bs2dl/.test(img)) {
      return `${img}?imageview/0/w/${size}/h/${size}`;
    }
    return img;
  },
  formatNum(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  https(url) {
    return String(url).replace(/^http:/, 'https:');
  },
  valueFixed(val) {
    return val.toFixed(2);
  }
};
