"use strict";

function displayReceipt(totalDue, amountPaid) {
    var change = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change: $" + change);
    
}

displayReceipt(12.50, 20);
displayReceipt(12.50, 12.50);
displayReceipt(12.50, 11);

