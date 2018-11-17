function passwordValidator() {
    if (document.getElementById('password').value != document.getElementById('verifyPassword').value) {
        window.alert("Passwords do not match!");
        return false;
    }
    return true;
}

function setDelivery(checked) {
    if (checked) {
        document.getElementById('firstName2').value = document.getElementById('firstName').value;
        document.getElementById('lastName2').value = document.getElementById('lastName').value;
        document.getElementById('middleInitial2').value = document.getElementById('middleInitial').value;
        document.getElementById('streetAddress2').value = document.getElementById('streetAddress').value;
        document.getElementById('aptUnit2').value = document.getElementById('aptUnit').value;
        document.getElementById('city2').value = document.getElementById('city').value;
        document.getElementById('state2').value = document.getElementById('state').value;
        document.getElementById('zipCode2').value = document.getElementById('zipCode').value;
    }
    else {
        document.getElementById('firstName2').value = "";
        document.getElementById('lastName2').value = "";
        document.getElementById('middleInitial2').value = "";
        document.getElementById('streetAddress2').value = "";
        document.getElementById('aptUnit2').value = "";
        document.getElementById('city2').value = "";
        document.getElementById('state2').value = "";
        document.getElementById('zipCode2').value = "";
    }
}

function nameWriter() {
    var x = location.toString();
    x = x.split('&');
    x[0] = x[0].substring(x[0].indexOf('First+Name='));
    for (var i = 0; i < 3; i++) {
        document.write(x[i].replace(/\+/g, ' ').replace("=", " = "));
        document.write("<br>");
    }
}

function billingAddressWriter() {
    var x = location.toString();
    x = x.split('&');
    x[0] = x[0].substring(x[0].indexOf('First+Name='));
    for (var i = 3; i < 8; i++) {
        if (i == 4) {
            x[4] = x[4].replace("%2F", '/');
        }
        document.write(x[i].replace(/\+/g, ' ').replace("=", " = "));
        document.write("<br>");
    }
}

function deliveryAddressWriter() {
    var x = location.toString();
    x = x.split('&');
    x[0] = x[0].substring(x[0].indexOf('First+Name='));
    for (var i = 8; i < 13; i++) {
        if (i == 8) {
            x[8] = x[8].slice(0, 14) + x[8].slice(15);
        }
        if (i == 9) {
            x[9] = x[9].replace("%2F", '/');
            x[9] = x[9].slice(0, 8) + x[9].slice(9);
        }
        if (i == 10) {
            x[10] = x[10].slice(0, 4) + x[10].slice(5);
        }
        if (i == 11) {
            x[11] = x[11].slice(0, 5) + x[11].slice(6);
        }
        if (i == 12) {
            x[12] = x[12].slice(0, 8) + x[12].slice(9);
        }
        document.write(x[i].replace(/\+/g, ' ').replace("=", " = "));
        document.write("<br>");
    }
}

function paymentWriter() {
    var x = location.toString();
    x = x.split('&');
    x[0] = x[0].substring(x[0].indexOf('First+Name='));
    for (var i = 13; i < 18; i++) {
        document.write(x[i].replace(/\+/g, ' ').replace("=", " = "));
        document.write("<br>");
    }
}

function accountWriter() {
    var x = location.toString();
    x = x.split('&');
    x[0] = x[0].substring(x[0].indexOf('First+Name='));
    for (var i = 18; i < 20; i++) {
        document.write(x[i].replace(/\+/g, ' ').replace("=", " = "));
        document.write("<br>");
    }
}