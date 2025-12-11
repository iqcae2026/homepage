const sections = ["header", "hero", "overview", "program", "about", "speaker"];

sections.forEach(function (sec) {
    fetch(`./component/${sec}.html`)
        .then(function (res) { return res.text(); })
        .then(function (html) {
            var el = document.getElementById(sec);
            if (el) el.innerHTML = html;
        });
});