/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || "Anonymous";
  });