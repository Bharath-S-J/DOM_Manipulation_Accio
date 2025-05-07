let count = 0;

const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const errorMsg = document.getElementById("error");

incrementBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  errorMsg.textContent = "";
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.textContent = count;
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Error: Count is already 0";
  }
});

clearBtn.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  errorMsg.textContent = "";
  // Removed the line: clearBtn.style.display = 'none';
});
