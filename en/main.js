// ベースパスを動的に取得
const getBasePath = () => {
    const path = window.location.pathname;
    // /repo-name/preview/pr-123/jp/index.html の場合
    // /repo-name/preview/pr-123 を取得
    const match = path.match(/(.+?)\/(jp|en)\//);
    return match ? match[1] : '';
};

const basePath = getBasePath();
const lang = document.body.dataset.lang; // "jp" か "en"
const sections = ["program", "cfp", "about"];

sections.forEach(function (sec) {
    fetch(`${basePath}/${lang}/${sec}.html`)
        .then(function (res) { return res.text(); })
        .then(function (html) {
            var el = document.getElementById(sec);
            if (el) el.innerHTML = html;
        });
});

// アンカーリンクのスクロール処理
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});