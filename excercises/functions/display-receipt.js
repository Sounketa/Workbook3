"use strict";

function displayReceipt(totalDue, amountPaid) {
    var change = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);

    if (change > 0) {
        console.log("Change: $" + change);
    } else if (change == 0) {
        console.log("No change needed");
    } else if (change < 0) {
        console.log("You still owe another: $" + Math.abs(change));
    }
        console.log("Change: $" + change);

}

displayReceipt(12.50, 20);
displayReceipt(12.50, 12.50);
displayReceipt(12.50, 11);

