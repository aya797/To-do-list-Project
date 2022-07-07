
var productBtn = document.getElementById("pr-btn")
var productDiv = document.getElementById("pr-div")

var containDiv = document.getElementsByClassName("contain")
var completedDiv = document.getElementById("completed")
var modal=document.getElementsByClassName("modal")

data = [
    { id: 1, name: "Prepare the monthly report" },
    { id: 2, name: "Meeting" },
    { id: 3, name: "Plan for a training activity" },
    { id: 4, name: "See a new customer" }
]


function draw(items) {
    productDiv.innerHTML = `<h5 style="font-weight:bold;color:#E55B13">Active:</h5>`;
    items.forEach(function (ele) {

        productDiv.innerHTML += `<div onclick='deleteItem(${ele.id})' style="cursor:pointer;border-bottom:2px solid #E55B13;padding:2px" class="content">
    
          ${ele.name}  <i class="far fa-trash-alt" style="float:right;cursor:pointer"></i>
            </div>`

           
    })

}


window.onload = function () {
    draw(data)
}

productBtn.addEventListener("click", addItem)

function addItem() {
    var productInput = document.getElementById("pr-inp");
    if (productInput.value == "")
    {
       
        alert("You don't enter any value")
    } 
    // var lastId = data[data.length - 1].id
    else{
    var lastId = data.length ? data[data.length - 1].id : 0;


    data.push({ id: ++lastId, name: productInput.value })

    var addedItem = data[data.length - 1]


    productDiv.innerHTML += `<div onclick='deleteItem(${addedItem.id})' style="cursor:pointer; border-bottom:2px solid ##E55B13;" class="content">
    
    ${addedItem.name}  <i class="far fa-trash-alt" style="float:right;cursor:pointer"></i>

      </div>

      <div class="modal fade" id="myModal" role="dialog" style="margin-top:80px">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button style="color:#8052EC;font-size:30px;"class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                  <p style="color:#E55B13;text-align: center;font-weight: 900;font-size:25px ;">Data added successfully</p>
              </div>
              <div class="modal-footer">
                  <button style="color:#E55B13;"type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
          </div>
  
      </div>
  </div>`

    productInput.value = "";
    }
}

completedDiv.innerHTML=`<h5 style="font-weight:bold;color:#E55B13">Completed:</h5>`;

function deleteItem(id) {

    var index = data.map(function (i) {
        return i.id;
    }).indexOf(id)
    if (index !== -1) {
        var deletedItem = data.splice(index, 1)
       
        draw(data)

    }

   completedDiv.innerHTML+=`<div style="text-decoration:line-through;padding:5px;border-bottom:2px solid #E55B13;padding:2px">${deletedItem[0].name}
   <i class="fas fa-clipboard-check" style="float:right;padding-top:2px"></i>
   </div>`;

}



