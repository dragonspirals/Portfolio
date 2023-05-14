
//content
const content = [];
const contentBox = document.getElementById("content-box")



/* -------------------------------------------------------------------------- */
/*                               Portfolio Items                              */
/* -------------------------------------------------------------------------- */
// Put items here
/* Details of creating elements:

createElement(elementname) creates an object has variable name:
[elementname where spaces are replaced by underscores]

and the following properties:
title : elementname [[automatically assigned when object is created ]]
link: "examplelink.com"
img: "/images/exampleimage.jpg"
desc: "A short description of the item"
categories: [category1, category2, ...] 
}
*/

/* -------------------------------------------------------------------------- */
/*                                   Modules                                  */
/* -------------------------------------------------------------------------- */

/* ---------------------------- React to do list ---------------------------- */
createElement("React ToDo");
React_ToDo.gitHubLink = "https://github.com/dragonspirals/React-To-Do-List";
React_ToDo.img = "images\\react_to_do_list.png";
React_ToDo.desc = "A to-do list created in react - ongoing project";
React_ToDo.categories = ["React JS", "JavaScript", "CSS", "SCSS"];

/* ----------------------------- Gallery module ----------------------------- */
createElement("Gallery");
Gallery.link = "https://dragonspirals.github.io/Modules/gallery.html";
Gallery.gitHubLink = "https://github.com/dragonspirals/Modules"
Gallery.img = "images\\gallery.png";
Gallery.desc = "JS module which displays a carousel of images with navigation elements";
Gallery.categories = ["HTML", "CSS", "JavaScript", "JS Module", "SCSS"];


/* -------------------------------- portfolio ------------------------------- */
createElement("Portfolio");
Portfolio.link = "https://dragonspirals.github.io/portfolio";
Portfolio.gitHubLink = "https://github.com/dragonspirals/portfolio"
Portfolio.img = "images\\portfolio.png";
Portfolio.desc = "Portfolio page - initially made for my website, now being used here. 'View Page' will just reload this webpage";
Portfolio.categories = ["HTML", "CSS", "JavaScript"];



/* -------------------------------- car game -------------------------------- */
createElement("Car Game")
Car_Game.link = "https://dragonspirals.github.io/Car_Game";
Car_Game.gitHubLink = "https://github.com/dragonspirals/Car_Game"
Car_Game.img = "images\\car_game.png";
Car_Game.desc = "A simple car game where a player has to move lanes to avoid obstacles";
Car_Game.categories = ["HTML", "CSS", "JavaScript"];



/* ------------------------------ Website Menu ------------------------------ */
createElement("Menu")
Menu.link = "https://dragonspirals.github.io/Expanding-Menu";
Menu.gitHubLink = "https://github.com/dragonspirals/Expanding-Menu"
Menu.img = "images\\menu.png";
Menu.desc = "An expandable menu made for my website with animations";
Menu.categories = ["HTML", "CSS", "JavaScript"];



/* ------------------------------ Jellyfish Website ------------------------------ */
createElement("Jellyfish Website")
Jellyfish_Website.link = "https://dragonspirals.github.io/Jellyfish-Website/";
Jellyfish_Website.gitHubLink = "https://github.com/dragonspirals/Jellyfishe-Website"
Jellyfish_Website.img = "images\\jellyfish.png";
Jellyfish_Website.desc = "A HTML and CSS mini website created for an assignment";
Jellyfish_Website.categories = ["HTML", "CSS"];



addItems();


/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------- check name ------------------------------- */
//function that checks if the element already exists in content array
function namecheck(name) {
    var nameExists = false;
    for (let i = 0; i < content.length; i++) {
        if (content[i].title == name) {                
            nameExists = true;
        }
    }
    return(nameExists);
}

/* ----------------------------- create element ----------------------------- */
// function to create a new element in content array
// element stored as var as (elementname + "var")
// The variable replaces spaces with underscore
function createElement(elementname){
    if (namecheck(elementname) === false) {
        var newElement = new Object();
        content.push(newElement);
        newElement.title = elementname;
        elementname = elementname.replace(" ", "_");
        window[elementname] = newElement;
    } else {
        createElement(elementname + "new");
    }
}

/* ----------------------- elements of portfolio items ---------------------- */
function addItems(){
    for (let i = 0; i<content.length; i++) {

        var contentBox = document.getElementById("content-box");


        //create item box (class=item-box) and item title (class=item-title)
        //and add it into the content box
        var itemBox = document.createElement("div");
        var itemTitle = document.createElement("h2");
        var titleText = document.createTextNode(content[i].title);
        itemBox.classList.add("item-box");
        itemTitle.classList.add("item-title")
        itemTitle.appendChild(titleText);
        itemBox.appendChild(itemTitle);
        contentBox.appendChild(itemBox);


        //create image (class=item-image)
        if (content[i].hasOwnProperty("img")){
            var itemImage = document.createElement("img");
            var itemImageBox = document.createElement("div")
            itemImage.src = content[i].img;
            itemImage.classList.add("item-image")
            itemImageBox.classList.add("item-image-box")
            itemBox.appendChild(itemImageBox);
            itemImageBox.appendChild(itemImage);
        }
        // else ADD A FILLER IMAGE if there is no image set
        
        
        // create categories (class=item-categories  each category has class=category-box)
        if (content[i].hasOwnProperty("categories")) {
                var categoriesBox = document.createElement("div");
                categoriesBox.classList.add("categories-box");
            for (let j=0; j<content[i].categories.length; j++) {
                var categoryBox = document.createElement("div");
                var itemCategory = document.createElement("p");
                var categoryText = document.createTextNode(content[i].categories[j]);
                categoryBox.classList.add("category-box");
                itemCategory.classList.add("item-category")
                itemCategory.appendChild(categoryText);
                categoryBox.appendChild(itemCategory);
                categoriesBox.appendChild(categoryBox);
                itemBox.appendChild(categoriesBox);
                
            }
        }


        //create description (class=item-desc)
        if (content[i].hasOwnProperty("desc")) {
            var itemDesc = document.createElement("p");
            var descText = document.createTextNode(content[i].desc)
            itemDesc.classList.add("item-desc")
            itemDesc.appendChild(descText);
            itemBox.appendChild(itemDesc);
        }



        /* -------------------------------- add link -------------------------------- */

        

        if (content[i].hasOwnProperty("link") || content[i].hasOwnProperty("gitHubLink")){
            var linksBox = document.createElement("div");
            linksBox.classList.add("links-box");
            itemBox.appendChild(linksBox);

            // github pages link
            if (content[i].hasOwnProperty("link")) {
                var linkBox = document.createElement("div");
                linkBox.classList.add("link-box");
                
                var itemLink = document.createElement("p");
                var linkText = document.createTextNode("View Page");
                itemLink.classList.add("item-link");
                itemLink.appendChild(linkText);
                linkBox.appendChild(itemLink);
                linksBox.appendChild(linkBox)
                
    
                linkBox.onclick = function() {
                    window.location.href =  content[i].link;
                }
                itemBox.onclick = function() {
                    window.location.href = content[i].link;
                }
                
            }

            // github repo link
            if (content[i].hasOwnProperty("gitHubLink")) {
                var gitHubLinkBox = document.createElement("div");
                gitHubLinkBox.classList.add("link-box");
                var itemGitHubLink = document.createElement("p");
                var gitHubLinkText = document.createTextNode("View Repository");
                itemGitHubLink.classList.add("item-link")
                itemGitHubLink.appendChild(gitHubLinkText);
                gitHubLinkBox.appendChild(itemGitHubLink);
                linksBox.appendChild(gitHubLinkBox)
    
                gitHubLinkBox.onclick = function() {
                    window.location.href =  content[i].gitHubLink;
                }
                
            }
        }


             // create github link 
        
    }

        


       
    
}








