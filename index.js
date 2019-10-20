//function called while clicking add button
function add_item() {

  //getting box and ul by selecting id;
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if(item.value != ""){

      //creating element and adding value to it
      let make_li = document.createElement("LI");
      make_li.appendChild(document.createTextNode(item.value));

      //adding li to ul
      list_item.appendChild(make_li);

      //reset the value of box
      item.value=""
      
      //delete a li item on click 
      make_li.onclick = function(){
        this.parentNode.removeChild(this);
      }

  }
  else{
    //alert msg when value of box is "" empty.
    alert("plz add a value to item");
  }

}
