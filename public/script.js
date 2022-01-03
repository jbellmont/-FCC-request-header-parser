const API_ROUTE = "/api/whoami";

const codeBlockElement = document.getElementById("code-block");

const app = () => {
  fetch(API_ROUTE)
    .then((response) => response.json())
    .then((json) => {
      codeBlockElement.innerHTML = JSON.stringify(json);
    })
    .catch(() => (codeBlockElement.innerHTML = "Cannot fetch headers"));
};

app();
