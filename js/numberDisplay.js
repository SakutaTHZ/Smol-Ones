const digits = document.querySelectorAll(".digit");

let total = 500;
let current = 0;

let custom_points = 1;

const setCustomPoint = (input) => {
  custom_points = input.value;
};

const addCustomPoint = () => {
  calculate(custom_points);
};
const reduceCustomPoint = () => {
  calculate(-custom_points);
};

const calculate = (amount) => {
  total += amount;

  if (amount > 0) {
    let count = 0;
    const interval = setInterval(() => {
      if (count < Math.abs(amount)) {
        addNUmber(digits[digits.length - 1], digits.length - 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 1000 / Math.abs(amount));
  } else {
    let count = 0;
    const interval = setInterval(() => {
      if (count < Math.abs(amount)) {
        reduceNUmber(digits[digits.length - 1], digits.length - 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 1000 / Math.abs(amount));
  }
};

const addNUmber = (digit, num) => {
  const divs = digit.querySelectorAll("span");
  const newSpan = document.createElement("span");
  newSpan.classList.add("new");
  newSpan.innerHTML =
    Number(divs[divs.length - 1].innerText) < 9
      ? Number(divs[divs.length - 1].innerText) + 1
      : 0;
  digit.appendChild(newSpan);
  setTimeout(() => {
    divs.forEach((div) => {
      div.remove();
    });
  }, 1000);

  if (Number(divs[divs.length - 1].innerText) == 9) {
    addNUmber(digits[num - 1], num - 1);
  }
};

const reduceNUmber = (digit, num) => {
  const divs = digit.querySelectorAll("span");
  const newSpan = document.createElement("span");
  newSpan.classList.add("new");
  newSpan.innerHTML =
    Number(divs[divs.length - 1].innerText) > 0
      ? Number(divs[divs.length - 1].innerText) - 1
      : 9;
  digit.appendChild(newSpan);
  setTimeout(() => {
    divs.forEach((div) => {
      div.remove();
    });
  }, 1000);

  if (Number(divs[divs.length - 1].innerText) == 0) {
    reduceNUmber(digits[num - 1], num - 1);
  }
};
