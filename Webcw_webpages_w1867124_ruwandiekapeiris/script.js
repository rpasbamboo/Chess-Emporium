//intro animation

let intro = document.querySelector('.bodyIntro');
let logo = document.querySelector('.mylogo-header');
let logoSpan = document.querySelectorAll('.myLogo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('.active');
            }, (idx + 1) * 450)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 400)
            })
        }, 1000);
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 400)
    })
})


//Buy Products
let addToCartButtons = document.getElementsByClassName('btn-primary')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)

}
// This function helps to add items to our cart
function addToCart(event) {


    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText


    itemContainer.innerHTML = `
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    for (let i = 0; i < quantityFields.length; i++) {
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)

    }

    // Accessing individual quantity fields
    for (let i = 0; i < delete_buttons.length; i++) {
        delete_buttons[i].addEventListener('click', removeItem)
    }

    grandTotal()


}



// This function helps to multiply the quantity and the price
function totalCost(event) {
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerText = '$' + quantity.value * price_field_content
    grandTotal()
    if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1
    }



}

// This function helps to add up the total of the items
function grandTotal() {
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for (let i = 0; i < all_total_fields.length; i++) {
        all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
        total += all_prices
    }
    grand_total.children[0].innerText = "$" + total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event) {
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()

}

// ---------------------------------------------------------------------------Query Form----------------------------------------------------------------------------
var unfilled = [];

function getRadioValue(radioArray) {
    // <!--Returns the value of the selected radio button -->
    var i;
    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

function alertHandler(array) {
    // Checks for empty fields from the array and shows the relavent alert 
    var i;
    for (i = 0; i < array.length; i++) {
        if (array[i] == "query subject") {
            alert("Please select your " + array[i] + " from list provided")
            break;
        } else {
            alert("Please enter your " + array[i] + " to the relavent field")
            break;
        }
    }
}

function validation(formRef) {
    // If there are empty fields relavent field will be added to an array and if there is no empty fileds, writes summary of the details to the div tag -->
    var radioSelected = getRadioValue(formRef.QuerySubject);
    unfilled = [];
    if (formRef.name.value == "") {
        unfilled.push("name");
    }
    if (formRef.email.value == "") {
        unfilled.push("email");
    }
    if (radioSelected == "") {
        unfilled.push("query subject");
    }
    if (formRef.details.value == "") {
        unfilled.push("query details");

    }

    alertHandler(unfilled);
    if (unfilled.length == 0) {
        // Hides the div with the form and displays the div with summary -->
        document.getElementById("main").style.display = 'none';
        document.getElementById("summaryView").style.display = 'block';
        // Writes summary details to the div -->
        document.getElementById("summaryView").innerHTML = '<dl class="querySummary"><dt class="topic">Name : </dt>' +
            '<dd class="value">' + formRef.name.value + '</dd>' +
            '<dt class="topic">Email : </dt>' +
            '<dd class="value">' + formRef.email.value + '</dd>' +
            '<dt class="topic">Subject : </dt>' +
            '<dd class="value">' + radioSelected + '</dd>' +
            '<dt class="topic">Details : </dt>' +
            '<dd class="value">' + formRef.details.value + '</dd></dl>' +
            '<div class="alignCenter"><input class="editandsendbuttons" type="button" name="edit" value="Edit" id="edit" onclick="previousPage()">' +
            '<button class="editandsendbuttons" type="button" value="submitted" onclick="previousAndClear(this.form)">Send</button></div>'
    }
}

function previousPage() {
    // Hides the div with summary and displays the div with the form /  Resets the form
    document.getElementById("summaryView").style.display = 'none';
    document.getElementById("main").style.display = 'block';
    document.getElementById("form").reset();
}

function previousAndClear(formRef) {
        // Hides the div with summary and displays the div with the form / Opens email client of the user with filled details of the sender,description and receiver /  Resets the form-->
        alert("Your query will be sent to your E-Mail client.Please send the E-Mail to our team and we will try our best to get back to you soon")
        document.getElementById("summaryView").style.display = 'none';
        document.getElementById("main").style.display = 'block';
        document.getElementById("form").submit();
        document.getElementById("form").reset();
    }
    // -------------------------------------------------------------------------Query Form End--------------------------------------------------------------------------

// -------------------------------------------------------------------------QUIZ--------------------------------------------------------------------------


// -------------------------------------------------------------------------QUIZ END--------------------------------------------------------------------------



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}