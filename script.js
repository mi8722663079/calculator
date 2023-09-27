const buttons = document.querySelectorAll(".buttons");
const screen = document.querySelector(".screen");

buttons.forEach((num) => {
  num.addEventListener("click", () => {
    const number = num.id;
    if (number == "d") {
      screen.innerHTML = screen.innerHTML.slice(0, -1);
    } else if (number == "c") {
      screen.innerHTML = "";
    } else if (/[0-9]/g.test(number) || /\+|-|\/|\*|\./g.test(number)) {
      if (
        (/[0-9]/g.test(screen.innerHTML) == false &&
          /\+|-|\/|\*|\./g.test(screen.innerHTML) == false) ||
        screen.innerHTML.includes("=")
      ) {
        screen.innerHTML = "";
      }
      screen.innerHTML += number;
    } else if (number == "=") {
      screen.innerHTML =
        eval(screen.innerHTML) == Infinity
          ? "Rethink your life lol"
          : `=${eval(screen.innerHTML)}`;
    }
  });
});
