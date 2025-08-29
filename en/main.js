const sections = ["hero", "program", "cfp", "about"];

sections.forEach(function(sec) {
    fetch(`./${sec}.html`)
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
