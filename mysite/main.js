let cars = [{brand:'Doner in a loaf',model:'loaf,chicken,fries,tomato...','price':39,image_url:"img/property_1.jpg"},{brand:'Doner Kebab',model:'lavash,chicken,fries,tomato...',price:25,image_url:"img/property_1.jpg"},{brand:'Pizza Doner',model:'dough,chicken,cheese,fries,tomato,сucumbers..',price:15,image_url:"img/property_1.jpg"},{brand:'Doner in a loaf',model:'loaf,chicken,fries,tomato...','price':39,image_url:"img/property_1.jpg"},{brand:'Doner Kebab',model:'lavash,chicken,fries,tomato...',price:25,image_url:"img/property_1.jpg"},{brand:'Pizza Doner',model:'dough,chicken,cheese,fries,tomato,сucumbers..',price:15,image_url:"img/property_1.jpg"},{brand:'Doner in a loaf',model:'loaf,chicken,fries,tomato...','price':39,image_url:"img/property_1.jpg"},{brand:'Doner Kebab',model:'lavash,chicken,fries,tomato...',price:25,image_url:"img/property_1.jpg"},{brand:'Pizza Doner',model:'dough,chicken,cheese,fries,tomato,сucumbers..',price:15,image_url:"img/property_1.jpg"}];

let sum = document.getElementById("sum");
let items = document.getElementById("items");
let carsElement = document.getElementById("listings");



for(let i=0;i<cars.length;i++){
    carsElement.innerHTML += '  <div class="wrapper1"><div class="properties_list"><img src="http://iseekmate.com/uploads/posts/2015-03/1425558596_unnamed.png" class="malmak"></div><img src="'+cars[i]["image_url"]+'" alt="" class="property_img"><div class="property_details"><h1>'+cars[i]["brand"]+ '</h1> ' + '<h2> '+cars[i]["model"]+'</h2></div> ' + '<span class="price">'+cars[i]["price"]+'$'+'</span>' +'</div>';
}

// <section class="listing">
//     <div class="wrapper"> --
//         <div class="properties_list">
//             <img src="http://iseekmate.com/uploads/posts/2015-03/1425558596_unnamed.png" class="malmak"> //iconka
//         </div>

//         <img src="'+cars[i]["image_url"]+'" alt="" class="property_img">  //tamak

//         <div class="property_details">
//             <h1>'+cars[i]["brand"]+ '</h1> ' + '<h2> '+cars[i]["model"]+'</h2> //aty markasy
//         </div>

//         <span class="price">$</span> //baga
//     </div>
// </section>;

let baskets = document.getElementsByClassName("properties_list");
console.log(baskets);
for(let j=0;j<baskets.length;j++){
    console.log(baskets[j]);
    baskets[j].addEventListener("click",function(){

    	console.log(this.className);
        console.log(this.classList.value);

        if(this.classList.value === 'basket1'){

            items.innerHTML = parseInt(items.innerHTML) - 1;
            
            this.className = "properties_list";
            this.children[0].setAttribute("src","http://iseekmate.com/uploads/posts/2015-03/1425558596_unnamed.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) - parseInt(cars[j]["price"]); 
            
            console.log(items, sum);   
        }
        else{
            items.innerHTML = parseInt(items.innerHTML) + 1;
            
            this.className= "basket1";
            this.children[0].setAttribute("src","https://image.flaticon.com/icons/png/512/21/21004.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) + parseInt(cars[j]["price"]); 
            

            
        } 
    }); 
}
