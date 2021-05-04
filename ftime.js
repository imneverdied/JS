function paddingLeft(str) {
  //時間補0
  if (str.length == 1) return "0" + str;
  else return str;
}

function getTime() {
  //取得時間
  let today = new Date();
  let Sec = today.getSeconds().toString();
  let min = today.getMinutes().toString();
  let hour = today.getHours().toString();
  var currentDateTime =
    paddingLeft(hour) + ":" + paddingLeft(min) + ":" + paddingLeft(Sec);

  return currentDateTime;
}
