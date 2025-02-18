document.addEventListener("DOMContentLoaded", function () {
    const orderList = document.getElementById("order-list");
    const tableInput = document.getElementById("table");
    const submitOrderBtn = document.getElementById("submit-order");

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    function displayOrders() {
        orderList.innerHTML = "";
        orders.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", function () {
                orders.splice(index, 1);
                localStorage.setItem("orders", JSON.stringify(orders));
                displayOrders();
            });

            li.appendChild(removeBtn);
            orderList.appendChild(li);
        });
    }

    displayOrders();

    submitOrderBtn.addEventListener("click", function () {
        const tableNumber = tableInput.value;
        if (orders.length === 0 || !tableNumber) {
            alert("Please add items and enter a table number.");
            return;
        }

        alert(`Order Submitted!\nTable: ${tableNumber}\nItems: ${orders.join(", ")}`);
        localStorage.removeItem("orders");
        window.location.href = "index.html"; // Redirect to main menu
    });
});
