// step 1: creating the six squares

//CREATE six individual buttons in HTML 
//GIVE each button a class name of square
//GIVE them unique IDs

// step 2: Determining a way to change their color when clicked

// ADD a CLICK Event Listener to each button
let buttons = document.querySelectorAll(".square");

for (const button of buttons) {
       button.addEventListener ("click", UpdateSquares);
}


// step 3: Create a mechanism to track which squares have been clicked

//CREATE an array called `array_sqr` that stores the unique ID of a clicked button
let array_sqr = [];

//CALL a function called UpdateSquares() that changes the color of a clicked button
//When a button has been clicked, add the ID to the array
//When `array_sqr.length == 6` call a function called ReverseSquares()

function UpdateSquares(event) {
       const btn = event.target;
       btn.style.backgroundColor = 'green';
       array_sqr.push(btn.id); // push the ID to the array
       
       if (array_sqr.length == 7) {
              ReverseSquares();
          }
}



// step 4: devise a method for the squares to return to their original state in the reverse order they were clicked
//In the ReverseSquares() function, loop through `array_sqr`
//Inside the loop, SELECT each button with the unique IDs in `array_sqr`
//REMOVE the color green from the selected button

function ReverseSquares() {
       array_sqr.reverse();
   
       for (const id of array_sqr) {
           const reverse_btn = document.getElementById(id);
   
           // Remove the color 
           reverse_btn.style.backgroundColor = 'white';
   
           /* Also clear the array */
           array_sqr = [];
       }
   };


//getElementById is a JavaScript method that returns the element that has the ID attribute with the specified value. It’s a way to directly access a specific element in the DOM.