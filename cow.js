//
//  COW.js
//
//  Created by CRUDSLAG.
//
//  WTFPL. Good Luck.

window.onload = function () {
  setInterval(function () {
    next();
  }, 1000);
};

function next() {
  const caps = Array.from(
    document.querySelector("ul[aria-label='必修教材リスト']").childNodes
  );
  const cap = caps.find(
    (child) =>
      !child.textContent.includes("視聴済み") &&
      child.querySelector('path').getAttribute('fill') === '#b3b3b3'
  );

  cap.childNodes?.[0].click();
}
