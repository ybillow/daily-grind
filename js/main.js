//alert("can you see this?");
/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that 
rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  
The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


Image (of specific coffee)
alt tag (identifies type of coffee)
description (of this typr of coffee)
weekday
color (supporting image)


The unique color could affect the background HTML, or an element on the page for each day of the week.  
All of the above must occur within one page.


*/

function coffeeTemplate(coffee){
    
    return `<p>
    <img src="images/${coffee.pic}" alt="${coffee.pic}" id="coffee" />
    <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}!</p>
` 
    
    
}
let myDate = new Date();
let today = myDate.getDay();
let coffee = {};
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{ //today's day of week
    myDay = today;
}
//change the string into a number
myDay = parseInt(myDay);


switch(myDay){
    
    case 0:
        today = "Sunday!"
        coffee = {
            color: "Orange",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Sunday!",
            desc: `Lazy day, a Mocha would taste nice!`
        };
        
    break;

    case 1:
        today = "Monday!"
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some Bubble Tea!`
        };  

    break;
    
    case 2:
        today = "Tuesday!"
        coffee = {
            color: "brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Tuesday",
            desc: `It's so cold, some Caramel Latte sounds!`
        };
        
    break;

    

    case 3:
        today = "Wednesday!"
        coffee = {
            color: "black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            day: "Wednesday",
            desc: `You need to work? Cold Brew it is!`
        };
        
    break;

    case 4:
        today = "Thursday!"
        coffee = {
            color: "purple",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a Drip",
            day: "Thursday",
            desc: `Care for a taste of Great Britain?`
        };
        
    break;

    case 5:
        today = "Friday!"
        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Friday",
            desc: `Almost the weekend, Pumpkin Spice Latte would taste good!`
        };
        
    break;

    case 6:
        today = "Saturday!"
        coffee = {
            color: "teal",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Saturday",
            desc: `Have some Frappaccino while you shop!`
        };
        
    break;

    default:
        alert("something went wrong!");


}



console.log(coffee);

// change the background color of the HTML element
document.getElementById("coffee-template").innerHTML=coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;