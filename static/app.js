
const wrapper = document.querySelector(".sliderWrapper")
/* to select a particular division */
/*console.log(wrapper)
it changes the images according to the position
wrapper.style.transform = "translateX(-300vw)" */

const menuitems = document.querySelectorAll('.menuitem') /*selecting all*/



const products =[ {
    id: 1,
    title: "Night Lamp",
    price: 1500,
    colors: [
        {
            code: "brown",
            img: "{% static 'img/lamp.jpg%}",
        },
        {

            code: "black",
            img: "{% static 'img/lamp black.jpg' %}",
        },
    ],
},
{
    id: 2,
    title: "Show piece",
    price: 1600,
    colors: [
        {
            code: "brown",
            img: "{% static 'img/showpiece.jpg' %}",
        },
        {

            code: "gray",
            img: "{% static 'img/showpiece black.jpg' %}",
        },
    ],
},
{
    id: 3,
    title: "Wall decor",
    price: 1700,
    colors: [
        {
            code: "brown",
            img: "{% static 'img/decor.jpg' %}",
        },
        {

            code: "black",
            img: "{% static 'img/decor black.jpg' %}",
        },
    ],
},
{
    id: 4,
    title: "Flower pot",
    price: 1800,
    colors: [
        {
            code: "brown",
            img: "./img/flower pot.jpg",
        },
        {

            code: "gray",
            img: "{% static 'img/flower pot black.jpg' %}",
        },
    ],
},
   
    ];


let choosenproduct =   products[0]

const currentproductimg =  document.querySelector(".productimg");
const currentproducttitle =  document.querySelector(".producttitle");
const currentproductprice =  document.querySelector(".productprice");
const currentproductcolors =  document.querySelectorAll(".color");
const currentproductsizes =  document.querySelectorAll(".size");


    menuitems.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            /*console.log("you clickd " + index); when ever we click the menu item it runs this function
            translateX will change the poisition along the x axis ,100vw represents a single screen size(it covers the entire screen)
            -100 will remove the one screen size and display the next element in the flex division (i.e 2nd element)
            for 1st it is 0 */
            wrapper.style.transform = `translateX(${-100 * index}vw)`;

            //change choosen product
            choosenproduct=products[index];

            //change texts of current products
            currentproducttitle.textContent = choosenproduct.title;
            currentproductprice.textContent = choosenproduct.price;
            currentproductimg.src = choosenproduct.colors[0].img

            //assign colour images
            currentproductcolors.forEach((color,index) => {
                color.style.backgroundColor = choosenproduct.colors[index].code;
            });

        
        });
    });

    currentproductcolors.forEach((color,index) => {
        color.addEventListener("click", () => {
            currentproductimg.src = choosenproduct.colors[index].img;
        });
    });

    currentproductsizes.forEach((size,index)=>{
       size.addEventListener("click",()=>{
        currentproductsizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"

        })
        size.style.backgroundColor="black"
        size.style.color="white"
       });
    });

    const productbutton = document.querySelector(".productbutton")
    const payment = document.querySelector(".payment")
    const Close = document.querySelector(".close")

    productbutton.addEventListener("click",()=>{
        payment.style.display="flex"
        
    })

    Close.addEventListener("click",()=>{
        payment.style.display="none"
    })






