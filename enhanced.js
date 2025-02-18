document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const tableNumber = document.getElementById("table").value;
        if (tableNumber) {
            alert("Order received for Table " + tableNumber);
            // Here you would send the table number to the backend or the robot
        } else {
            alert("Please enter a valid table number.");
        }
    });
});
