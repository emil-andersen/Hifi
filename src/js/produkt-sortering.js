document.addEventListener("DOMContentLoaded", function(){
    // -- CREATE CARDS -- //

    //VARIABLES//
    let cardWrapper = document.querySelector(".card-wrapper");

    // -- SORT CARDS --//
    //VARIABLES//
    let sortSelect = document.querySelector(".sort__select");

    // -- VIEW CARDS --//
    //VARIABLES//
    let viewBox = document.querySelector(".view__box");
    let viewBars = document.querySelector(".view__bars");
    var viewSwitch = "column";

    // -- COUNT CARDS -- //

    // -- SHOW CARDS -- //
    //VARIABLES//
    let countNumber = document.querySelector(".count__number");

    //VARIABLES//
    let showSelect = document.querySelector(".show__select");
    let showSelectActiveAmount;

    // -- FUNCTIONS/EVENTS -- //
    function createCard(cardWrapper, product){
        let cardIMGsrc = "./assets/images/Produktbilleder/cd_afspillere/" + product.image;
        cardWrapper.innerHTML += `
        <div class="produkt-kort">
            <div class="img-holder">
                <img src="${cardIMGsrc}"
                    alt="${product.manufacturer} ${product.title}" class="img-holder__billede">
            </div>
            <p class="produkt-info">${product.title}</p>
            <div class="price-section">
                <p class="old-price">${product.prize}£</p>
                <p class="new-price">${product.prize}£</p>
            </div>
            <div class="button-section">
                <button class="add-to-cart">Add to cart!</button>
            </div>
        </div>`
    }

    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }

     function deleteProducts(cardWrapper){
        const cards = document.querySelectorAll(".produkt-kort")
        cards.forEach(card => cardWrapper.removeChild(card));
    }

    function handleSelectOptions(cardWrapper, products){
        sortSelect.addEventListener("change", event => {
            const sortSelectOptionsValue = event.target.value;
            deleteProducts(cardWrapper);
                let newProductsArray;
                if(sortSelectOptionsValue === "Price"){
                    newProductsArray = products.sort(sortByProperty("prize"))
                }else if(sortSelectOptionsValue === "Name"){
                    newProductsArray = products.sort(sortByProperty("title"))
                }
                newProductsArray.forEach((product, index) => {
                    if(showSelectActiveAmount && index < showSelectActiveAmount){
                        createCard(cardWrapper, product)
                    }
                });
        })
    }

    function countProducts(cardArray){
        countNumber.innerHTML = cardArray.length;
    }

    function handleAmountShown(cardArray, cardWrapper, showSelectValue){
        let newArray;
        newArray = cardArray.filter((card, index) => index < showSelectValue) 
        newArray.forEach(card => createCard(cardWrapper, card));
        countProducts(newArray);
        showSelectActiveAmount = showSelectValue;
        localStorage.setItem("showSelectActiveAmount", showSelectActiveAmount);
    }
    // -- -- //

    // -- JSON FETCH -- //
    fetch("assets/json/TEST.json")
    .then(response => response.json())
    .then(data =>{
        showSelectActiveAmount = localStorage.getItem("showSelectActiveAmount")
        if (!showSelectActiveAmount) showSelectActiveAmount = 10
        handleSelectOptions(cardWrapper, data.products)
        countProducts(data.products)
        handleAmountShown(data.products, cardWrapper, showSelectActiveAmount)
        showSelect.addEventListener("change", event => {
            deleteProducts(cardWrapper)
            handleAmountShown(data.products, cardWrapper, event.target.value)
        })
        data.products.forEach((product, i) =>{

            let cards = document.querySelectorAll(".produkt-kort")
            
            viewBox.addEventListener("click", function(){
                if(viewSwitch === "row"){
                    for(i=0; i<cards.length; i++){
                        cards[i].style.flexDirection = "column"
                    }
                    cardWrapper.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
                    viewSwitch = "column"
                    viewBox.classList.add("view__box_active")
                    viewBars.classList.remove("view__bars_active")
                }
            });
        
            viewBars.addEventListener("click", function(){
                if(viewSwitch === "column"){
                    for(i=0; i<cards.length; i++){
                        cards[i].style.flexDirection = "row"
                    }
                    cardWrapper.style.gridTemplateColumns = "1fr"
                    viewSwitch = "row";
                    viewBars.classList.add("view__bars_active")
                    viewBox.classList.remove("view__box_active")
                }
            });
            
        });
        //TESTING

    });
});
