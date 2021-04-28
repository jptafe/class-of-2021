const form = document.getElementById("form"),
        weight = document.getElementById("weight"),
        height = document.getElementById("height"),
        msg = document.getElementById("flash-msg"),
        calc = document.getElementById("calc");

function calculate() {
    let final = weight.value / Math.pow(height.value , 2);
    msg.innerHTML = `kg = ${weight.value}kg <br>m = ${height.value} <br>m^2 = ${Math.pow(height.value , 2)} <br>BMI = ${final}`;
    msg.classList.add(`flash-good`);
}
calc.addEventListener("click" , () => {
    calculate()
});

form.addEventListener("keypress" , (e) => {
    if (e.key === "Enter") {
        if (e.target === weight) {
            height.focus();
        } else if (e.target === height) {
            calculate()
            weight.focus()
        }
    };
})