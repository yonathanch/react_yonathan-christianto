// Invalid feedback
(function (){
    'use strict'
var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
.forEach(function (form){
    form.addEventListener('submit', function (event){
        if (!form.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
})
}) ()

// DOM
const productName = document.getElementById("productName");
const Pcategory = document.getElementById("Pcategory");
const productImage = document.getElementById("productImage");
const productFreshness = document.forms["Myform"]["exampleRadios"];
const additional = document.getElementById("additional");
const productPrice = document.getElementById("productPrice");
const form = document.querySelector("form");

     // Validasi DOM
     form.addEventListener("submit", (e) => {
        e.preventDefault()

        if(productName.value === ""){
            alert("Please enter a valid Product name.")
            productName.focus()
            return;
        }
        if(productName.value.length > 25){
            alert("Last Name must not exceed 25 characters")
            productName.focus()
            return;
        }
        if(Pcategory.value === ""){
            alert("The Product Category field must be filled in")
            Pcategory.focus()
            return;
        }
        if(/[@/{}#]/.test(productName.value)){
            alert("Name must not contain symbols.")
            productName.focus()
            return;
        }
        if(productImage.value === ""){
            alert("The Image of Product field must be filled in")
            productImage.focus()
            return;
        }
        if(productFreshness.value === ""){
            alert("Product Freshnes field must be filled in")
            productFreshness.focus()
            return;
        }
        if(additional.value === ""){
            alert("The Additional Description field must be filled in")
            additional.focus()
            return;
        }
        if(productPrice.value === ""){
            alert("Please enter a valid Prouct price.")
            productPrice.focus()
            return;
        }
      
        alert(
            ` Product Name : ${productName.value}`+
            `\n Product Category : ${Pcategory.value}` +
            `\n Image of Producte : ${productImage.value}` + 
            `\n Product Freshnes : ${productFreshness.value}` +
            `\n Additional Description : ${additional.value}` + 
            `\n Product Price : $${productPrice.value}`
        );

    })

    // Insert Data
    const table = () => {
        const list = document.getElementById("table")
        let rowtable = list.insertRow(1);
        let cell =rowtable.insertCell(0);
        let cell1 =rowtable.insertCell(1);
        let cell2 =rowtable.insertCell(2);
        let cell3 =rowtable.insertCell(3);
        let cell4 =rowtable.insertCell(4);
        let cell5 =rowtable.insertCell(5);

        cell.innerHTML = productName.value;
        cell1.innerHTML = Pcategory.value;
        cell2.innerHTML = productImage.value;
        cell3.innerHTML = productFreshness.value;
        cell4.innerHTML = additional.value;
        cell5.innerHTML = productPrice.value;

    }
    // Delete data(table)
    const deletetable = () => {
        document.getElementById ("table").deleteRow(1);
    }
