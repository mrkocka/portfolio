
const nameInput = document.querySelector('#nametext');

nameInput.addEventListener('input', (e) => {
    nameText = e.target.value;

});


/*Delete the loginContainer and display the treeConztainer */

let toggled = false;
    function toggle(){
        if(!toggled){
            toggled = true;
            document.getElementById("loginContainer").style.display = "none";
        
        }

/*This if moves the user name to Merry Christmas text. But it doesn't displayed yet!*/ 

        if (toggled){
            toggled = false;
            document.getElementById("treeContainer").style.display = "flex";
            document.getElementById("username").innerHTML = nameText;
        }
    };




/**/


var score = 0;

$( function() {
	$("#ball1, #tree-star, #ball2, #ball3, #ball4, #ball5, #ball6, #bow, #bow2, #bow3 ").draggable({ revert: "invalid" });
  $("#dropzone, #dropzone-1, #dropzone-2").droppable({
			accept: "#ball1, #tree-star, #ball2, #ball3, #ball4, #ball5, #ball6, #bow, #bow2, #bow3 ",
      classes: {
        "ui-droppable-active": "tree-active",},
      drop: function() {
	  score++  
	finish();
  },
    });

function finish() {
	if(score === 12)
	{
		$('#game-complete').delay(300).fadeIn("fast");
       }
     }
   }); 