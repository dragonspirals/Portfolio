
//content
const content = [];
const contentBox = document.getElementById("contentbox")



/* ---------------------- Portfolio Items ------------------------*/
// Put items here
/* Details of creating elements:

createElement(elementname) creates an object has variable name:
[elementname + "var"]

and the following properties:
title : elementname [[automatically assigned when object is created ]]
link: "examplelink.com"
img: "/images/exampleimage.jpg"
desc: "A short description of the item"
categories: [category1, category2, ...] 
}
*/


// example element 1
createElement("Portfolio Element");
Portfolio_Element.link = "https:dragonspirals.co.uk";
Portfolio_Element.img = "./images/moynme.jpg";
Portfolio_Element.desc = "emample element description";
Portfolio_Element.categories = ["category1", "category2", "category3"];

//example element 2
createElement("Second Item")
Second_Item.link = "dragonspirals.co.uk";
Second_Item.img = "./images/moynme.jpg";
// Second_Item.desc = "Another example element";
Second_Item.categories = ["category1", "category2"]

//example element 3
createElement("Third Item")
Third_Item.link = "dragonspirals.co.uk";
Third_Item.img = "./images/moynme.jpg";
Third_Item.desc = "Another example element";
Third_Item.categories = ["category1", "category2"]

//example element 4
createElement("Fourth Item")
Fourth_Item.link = "dragonspirals.co.uk";
Fourth_Item.img = "./images/moynme.jpg";
Fourth_Item.desc = "Another example element";
Fourth_Item.categories = ["category1", "category2"]



addItems();
/* -------------------------------- functions ------------------------------- */

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

        var contentBox = document.getElementById("contentbox");


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
            itemImage.src = content[i].img;
            itemImage.classList.add("item-image")
            itemBox.appendChild(itemImage);
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

        itemBox.onclick = function() {
            window.location.href =  content[i].link;
        }

    }
}







