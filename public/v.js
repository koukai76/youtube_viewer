const MOVIE = 'movie';

const main = () => {
  const url = new URL(window.location.href);
  const v = url.searchParams.get('v');
  document.getElementById(MOVIE).src = `https://www.youtube.com/embed/${v}`;

  const w = document.body.clientWidth;
  if (w > 992) {
    document.getElementById(MOVIE).style.width = 0.8 * w + 'px';
    document.getElementById(MOVIE).style.height =
      (438 / 768) * (0.8 * w) + 'px';
    return;
  }

  document.getElementById(MOVIE).style.width = w + 'px';
  document.getElementById(MOVIE).style.height = w * 0.5625 + 'px';
};

main();
