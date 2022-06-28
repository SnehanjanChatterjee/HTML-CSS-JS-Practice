var items = [];
var itemsCart = []
var counter = 1;

function setWarning(text) {

    var alertWarningHTML = ''
    alertWarningHTML += '<div class="alert alert-dismissible alert-danger">'
    alertWarningHTML += '<button type="button" class="close" data-dismiss="alert">&times;</button>'
    alertWarningHTML += '<h4 class="alert-heading">Warning!</h4>'
    alertWarningHTML += '<p class="mb-0">' + text + '</p>'
    alertWarningHTML += '</div>'

    document.getElementById('message').style.display = 'block'
    document.getElementById('message').innerHTML = alertWarningHTML;

}

function validate() {
    if (isNaN(document.orderForm.itemQty.value) || (document.orderForm.itemQty.value == '') || (document.orderForm.itemQty.value <= 0)) {
        setWarning('Quantity has to be a positive number and cannot be empty either.');
        return true;
    } else if (parseInt(document.orderForm.itemQty.value) < 0) {
        setWarning('Quantity has to be a positive number.');
        return true;

    } else if (isNaN(document.orderForm.itemPrice.value) || document.orderForm.itemPrice.value == '' || document.orderForm.itemPrice.value <= 0) {
        setWarning('Price has to be a positive number and cannot be empty either.');
        return true;

    } else if (parseInt(document.orderForm.itemPrice.value) < 0) {
        setWarning('Price has to be a positive number.');
        return true;
    }
    return false;
}

function addItem() {
    var item = {};
    if (validate()) {
        return;
    }
    document.getElementById('message').style.display = 'none';
    item.id = counter;
    item.itemName = document.orderForm.itemName.value
    item.itemCode = document.orderForm.itemCode.value
    item.itemQty = document.orderForm.itemQty.value
    item.itemUnitPrice = document.orderForm.itemPrice.value
    item.itemNetPrice = parseInt(item.itemUnitPrice) * parseInt(item.itemQty)

    ++counter

    console.log('Item')
    console.log(item)

    var table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var idCell = row.insertCell(0);
    var itemNameCell = row.insertCell(1);
    var itemCodeCell = row.insertCell(2);
    var itemQtyCell = row.insertCell(3);
    var itemUnitPriceCell = row.insertCell(4);
    var itemNetPriceCell = row.insertCell(5);

    idCell.innerText = item.id;
    itemNameCell.innerText = item.itemName;
    itemCodeCell.innerText = item.itemCode;
    itemQtyCell.innerText = item.itemQty;
    itemUnitPriceCell.innerText = item.itemUnitPrice
    itemNetPriceCell.innerText = item.itemNetPrice

    items.push(item)

    totalBill()
}

function totalBill() {
    var itemCount = items.length;
    var itemAmount = 0;

    for (let i = 0; i < itemCount; i++) {
        itemAmount += parseInt(items[i].itemNetPrice);
    }
    var totalAmount = itemAmount + ((18 / 100) * itemAmount);

    document.getElementById('count').innerText = '';
    document.getElementById('cost').innerText = '';
    document.getElementById('costwithgst').innerText = '';

    document.getElementById('count').innerText = itemCount;
    document.getElementById('cost').innerText = itemAmount;
    document.getElementById('costwithgst').innerText = totalAmount;
}

function addModal() {
    $('#ordersTable1').empty();
    $("#ordersTable").clone().appendTo("#ordersTable1");
}

//Luhn Algorithm to validate credit card no
// Valid No = '4485275742308327' 
function validateCreditCard() {
    let num = $('#creditCARD').val();
    let arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
}

// Validating address
function validateAddress() {
    if ($('#address').val() == "") {
        alert("Enter address!!")
        return false;
    }
    return true;
}

function createInvoice() {
    $('#exampleModal1').hide();
    if (!(validateCreditCard() && validateAddress())) {
        alert("Please enter correct info.");
    }
    else {
        if (confirm("Are you sure you want to proceed??")) {
            invoice();
            // $(window).on('shown.bs.modal', function () {
            //     $('#exampleModal2').modal('hide');
            //     $('#exampleModal3').modal('show');
            // });
            // $('#exampleModal1').hide();
            // location.reload();
        }
    }
}
function invoice() {
    $('#exampleModal2').hide();
    $('#exampleModal3').show();
    $('#ordersTable2').empty();
    $("#ordersTable").clone().appendTo("#ordersTable2");
    $('#addressPara').html($('#address').val());
}

function clearAll() {
    $('#exampleModal3').hide();
    location.reload();
}

