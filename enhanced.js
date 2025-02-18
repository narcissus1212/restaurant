document.addEventListener("DOMContentLoaded", function () {
    const orderList = document.getElementById("order-list");
    const tableInput = document.getElementById("table");
    const submitOrderBtn = document.getElementById("submit-order");

    document.querySelectorAll(".add-to-order").forEach(button => {
        button.addEventListener("click", function () {
            const itemName = this.parentElement.getAttribute("data-name");
            addItemToOrder(itemName);
        });
    });

    function addItemToOrder(item) {
        const li = document.createElement("li");
        li.textContent = item;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(removeBtn);
        orderList.appendChild(li);
    }

    submitOrderBtn.addEventListener("click", function () {
        const orderItems = [];
        document.querySelectorAll("#order-list li").forEach(li => {
            orderItems.push(li.textContent.replace("Remove", "").trim());
        });

        const tableNumber = tableInput.value;
        if (orderItems.length === 0 || !tableNumber) {
            alert("Please add items to your order and enter your table number.");
            return;
        }

        alert(`Order Submitted!\nTable: ${tableNumber}\nItems: ${orderItems.join(", ")}`);
    });
});
