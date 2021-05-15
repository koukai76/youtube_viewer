const MOVIE = 'movie';

const w = document.body.clientWidth;

const main = () => {
  if (w > 768) {
    document.getElementById(MOVIE).style.width = '768px';
    document.getElementById(MOVIE).style.height = '438px';
    return;
  }

  document.getElementById(MOVIE).style.width = w + 'px';
  document.getElementById(MOVIE).style.height = w * 0.5625 + 'px';
};

document.getElementById('input').addEventListener('keydown', e => {
  const key = e.keyCode || e.charCode || 0;
  if (key !== 13) {
    return;
  }

  const url = e.target.value;
  const rs = url.match(/https:\/\/www.youtube.com\/watch\?v=(.*)$/);

  if (rs[1]) {
    document.getElementById(
      MOVIE
    ).src = `https://www.youtube.com/embed/${rs[1]}`;
    return;
  }
});

const url = new URL(window.location.href);
const v = url.searchParams.get('v');

document.getElementById(MOVIE).src = `https://www.youtube.com/embed/${v}`;

main();

