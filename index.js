
// Add close button
var myNodelist = document.getElementsByClassName("cross");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.insertBefore(txt, span.firstChild);
    myNodelist[i].appendChild(span);
}

// Remove Item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        console.log(i);
        var div = this.parentElement.parentElement.parentElement;
        div.style.display = "none";
    }
}

// Add a new Article
function addListItem() {
    var inputValue = document.getElementById("textarea").value;
    var title = document.getElementById("title").value;

    var li = document.createElement("li");

    var div_container = document.createElement("div");
    div_container.classList.add('container', 'comment-text');

    var div_row = document.createElement("div");
    div_row.classList.add('row');

    var div_col_11 = document.createElement("div");
    div_col_11.classList.add('col-11');

    var div_col = document.createElement("div");
    div_col.classList.add('col');

    var h4 = document.createElement("h4");
    var i = document.createElement("i");

    var t = document.createTextNode(title);
    var t2 = document.createTextNode(inputValue);

    var br = document.createElement("hr");

    li.appendChild(div_container);
    div_container.appendChild(div_row);
    div_row.appendChild(div_col_11);
    div_row.appendChild(div_col);

    h4.appendChild(t);
    h4.appendChild(br);
    div_col_11.appendChild(h4);
    // i.appendChild(t);
    div_col_11.appendChild(t2);

    if (inputValue === '' || title === '') {
        alert("Both the fields are required!");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("textarea").value = "";
    document.getElementById("title").value = "";

    // Add close sign
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.insertBefore(txt, span.firstChild);
    div_col.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement.parentElement;
            div.style.display = "none";
        }
    }
}

var high = document.getElementsByClassName("high");
console.log(document.getElementsByClassName("nav-link")[1]);
var nav_span = document.createElement("SPAN");
nav_span.classList.add('sr-only');
var current = document.createTextNode("(current)");
nav_span.appendChild(current);
var j;
for (j = 0; j < high.length; j++) {
    high[j].onclick = function () {
        console.log(j);
        document.getElementsByClassName("high")[j].appendChild(nav_span);
    }
}



function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validate() {
    console.log("Called");
    var firstName = document.contactUs.firstName.value;
    var lastName = document.contactUs.lastName.value;
    var email = document.contactUs.email.value;
    var firstNameErr = lastNameErr = emailErr = true;


    // Validation for First Name
    if (firstName == "") {
        printError("firstNameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstName) === false) {
            printError("firstNameErr", "Please enter a valid first name");
        } else {
            printError("firstNameErr", "");
            firstNameErr = false;
        }
    }

    // Validation for Last Name
    if (lastName == "") {
        printError("lastNameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastName) === false) {
            printError("lastNameErr", "Please enter a valid last name");
        } else {
            printError("lastNameErr", "");
            lastNameErr = false;
        }
    }

    // Validation for email
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(firstNameErr || lastNameErr || emailErr) {
        return false;
    } else {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";

        alert('You have submitted the form..')
    }
}

