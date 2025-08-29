// body の data-lang を取得
const lang = document.body.dataset.lang; // "jp" か "en"

const sections = ["hero", "program", "cfp", "about"];

sections.forEach(function(sec) {
    fetch(`/${lang}/${sec}.html`)  // lang に応じてフォルダ切り替え
        .then(function(res) { return res.text(); })
        .then(function(html) {
            var el = document.getElementById(sec);
            if (el) el.innerHTML = html;
        });
});

// アンカーリンクのスクロール処理
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
