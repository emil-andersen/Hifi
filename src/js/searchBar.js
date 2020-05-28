function searchFunction() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let products = document.getElementById("products");
    let product = products.getElementsByTagName("article");

    for (i = 0; i < product.length; i++) {
        p = product[i].getElementsByTagName("p")[0];

        if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            product[i].style.display = ""
        }

        else {
            product[i].style.display = "none";
        }
    }
}
