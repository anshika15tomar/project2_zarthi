
import jsonData from './data.json' with { type: "json" };


let mainContent = document.querySelector('.main-content');
let section_2_cards = document.querySelector('#section-2-part-2 .card-container');
let filtered_services = jsonData;
let service_input_box = document.getElementById('search-input-box');

function threeLines(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
const display_service_data =(filtered_services)=>{
    console.log(filtered_services);
    let str = filtered_services.map(elem => `
        <div class="cards">
            <div class="card-upper">
                <h3>${elem.service_name}</h3>
                <p>${threeLines(elem.service_description)}</p>
            </div>
            <hr/>
            <div class="card-bottom">
                <button class="cloud-btn">${elem.practice_name}</button>
                <div class="price">Starting from &#8377; ${elem.price}</div>
            </div>
        </div>
    `).join(''); 
    
    
    mainContent.innerHTML = str;

}
let filter_data = ()=>{
   const service_input_text = service_input_box.value.toLowerCase()
   console.log(service_input_text);
   filtered_services = filtered_services.filter((value)=>{
    if(value.service_name.toLowerCase().includes(service_input_text)){
        return true 
    }
    return false 
})
 display_service_data(filtered_services)
}
service_input_box.addEventListener("input" , filter_data)
console.log(filter_data);

display_service_data(jsonData)


let Part_1_cards = document.querySelectorAll('.main-content .cards');
let section_2 = document.querySelector('.section-2');
let mid_bar= document.querySelector('.mid-bar');


Part_1_cards.forEach(function(elem){
    let isSelected = false;
    elem.addEventListener("click", function(){
        if (!isSelected) {
            elem.style.border = `1px solid #ffb938`;
            // mainContent.style.width = '30%';
            mid_bar.style.flexDirection ='column';
            section_2_cards.style.flexDirection = 'column';
            section_2.style.width='30%';
            // document.querySelector('.mid-bar').style.flexDirection = 'column';
            Part_1_cards.forEach(function(card){
                card.style.width = '100%';
            });

            let div2 = document.getElementById("section-2-part-2");
            console.log(div2);
            
            div2.style.display = "block";
        } else {
            elem.style.border = `1px solid #d4d4d4`;
            mainContent.style.width = '100%';
            section_2_cards.style.flexDirection = 'row';
           
            document.querySelector('.mid-bar').style.flexDirection = 'row';
            Part_1_cards.forEach(function(card){
                card.style.width = '32.5%';
            });
        }
        isSelected = !isSelected;
    });
});


let str2 = '';
for (let i = 0; i < 20; i++) {
    let elem = jsonData[i % jsonData.length]; 
    str2 += `
        <div class="card">
            <div class="left-side">
                <h2>${elem.service_name}</h2>
                <p>${elem.service_description}</p>
                <div class="reviews">
                    <img src="zarthiassets/Frame (3).svg" alt="">
                    <h4>100+ Successful Deliveries</h4>
                    <h4 id="review">12 Reviews</h4>
                    <img src="zarthiassets/external-link 1.svg" alt="">
                </div>
            </div>
            <div class="right-side">
                <h3>&#8377; ${elem.price} <span>/ wireframe</span></h3>
                <h4>Avg. SLA 12hr</h4>
                <button>Request</button>
            </div>
        </div>`;
}


section_2_cards.innerHTML = str2;
let allCard = document.querySelector('.card');


allCard.addEventListener("click", function () {
    console.log("click");
    let div2 = document.getElementById("section-2-part-2");
    div2.style.display = "flex"; // Show div2 when div1 is clicked
});
