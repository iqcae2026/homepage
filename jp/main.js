const sections = ["hero", "program", "cfp", "about"];

sections.forEach(function(sec) {
    fetch(`./${sec}.html`)
        .then(function(res) { return res.text(); })
        .then(function(html) {
            var el = document.getElementById(sec);
            if (el) el.innerHTML = html;
        });
});