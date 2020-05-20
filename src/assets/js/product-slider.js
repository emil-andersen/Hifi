document.addEventListener("DOMContentLoaded", function(){
    //VARIABLES//
    let productSlider = document.querySelector(".product-slider");
    let productIMG = document.querySelector(".product-slider__img");
    let productIMGArray = ["Project_prebox", "harbeth_p3es2", "Pro_ject_rpm_5"];
    let productCatagoryArray = ["forforstaerkere", "hojtalere", "pladespillere"];
    let productNameArray = ["Project<br>Prebox", "Harbeth<br>p3es2", "Project<br>rpm5"];
    let productName = document.querySelector(".product-slider__name");
    let productArrowLeft = document.querySelector(".product-slider__arrow-left");
    let productArrowRight = document.querySelector(".product-slider__arrow-right");
    let i=0;
    let click = false;

    //FUNCTIONS/EVENTS//
    function changeProductIMG(){
        productIMG.setAttribute("src", "assets/images/Produktbilleder/"+productCatagoryArray[i]+"/"+productIMGArray[i]+".jpg");
        productName.innerHTML = productNameArray[i];
    }

    function productSliderLoop(){
        if(click === false){
            ProductSliderForward();
        }
    };

    setInterval(productSliderLoop, 3000);

    function ProductSliderForward(){
        if(i<productIMGArray.length-1){
            i++
        }else{
            i = 0;
        }
        changeProductIMG();
    }

    function ProductSliderBack(){
        if(i<productIMGArray.length-1){
            i++
        }else{
            i = 0;
        }
        changeProductIMG();
    }

    productSlider.addEventListener("click", function(){
        if(event.target === productArrowLeft){
            ProductSliderBack();
            click = true;
        }
        if(event.target === productArrowRight){
            ProductSliderForward();
            click = true;
        }
    })
});