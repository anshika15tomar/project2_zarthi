// Import JSON data correctly
import jsonData from './data.json' with { type: "json" };

// Select the main content container
let mainContent = document.querySelector('.main-content');

// Function to truncate text to 3 lines (approximate character limit)
function threeLines(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Generate dynamic card content
let str = jsonData.map(elem => `
    <div class="cards">
        <div class="card-upper">
            <h3>${elem.service_name}</h3>
            <p>${threeLines(elem.service_description)}</p>
        </div>
        <hr/>
        <div class="card-bottom">
            <button class="cloud-btn">Cloud Operations</button>
            <div class="price">Starting from &#8377; ${elem.price}</div>
        </div>
    </div>
`).join(''); // Join array elements into a single string

// Inject content into `.main-content`
mainContent.innerHTML =  str;
