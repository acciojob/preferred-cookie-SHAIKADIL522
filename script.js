//your JS code here. If required.
// Function to set cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// Function to get cookie
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

// Apply saved preferences on page load
window.addEventListener("DOMContentLoaded", function () {
  let savedFontSize = getCookie("fontsize");
  let savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let fontSize = document.getElementById("fontsize").value;
  let fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply styles immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});