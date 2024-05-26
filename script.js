let itemCount = 0;

function submitItems() {

    const inputItem = document.getElementById('inputItem');
    const inputQuan = document.getElementById('inputQuan');
    const inputCost = document.getElementById('inputCost');


    const item = inputItem.value;
    const quantity = inputQuan.value;
    const cost = inputCost.value;

    if (item && quantity && cost) {
        itemCount ++

        const tableBody = document.getElementById('tableResult');
        
        const showResult = `<tr class="text-center w-75">
                                 <td>${itemCount}</td>
                                 <td>${item}</td>
                                 <td>${quantity}</td>
                                 <td>${cost}</td>
                                 <td>
                                 <div class="btn-group gap-2">
                                     <button type="button" class="btn btn-danger btn-sm d-inline d-sm-none" onclick="deleteItem(this)">
                                         <img src="svg/delete.svg" alt="">
                                     </button>
                                     <button type="button" class="btn btn-success btn-sm border d-inline d-sm-none" onclick="editItem(${itemCount})">
                                         <img src="svg/edit.svg" alt="">
                                     </button>
                                     <button type="button" class="btn btn-danger btn-sm d-none d-sm-inline" onclick="deleteItem(this)">
                                         Delete <img src="svg/delete.svg" alt="">
                                     </button>
                                     <button type="button" class="btn btn-success btn-sm border d-none d-sm-inline" onclick="editItem(${itemCount})">
                                         Edit <img src="svg/edit.svg" alt="">
                                     </button>
                                 </div>
                                 </td>
                             </tr>`;


        tableBody.innerHTML += showResult;

        inputItem.value = '';
        inputQuan.value = '';
        inputCost.value = '';


        tableCon.style.display = 'block';


    } else {
        alert('Fill in the required gap')
    }
}


function deleteItem(button) {
    const row = button.parentNode.parentNode.parentNode; // Get the parent row of the button
    const tableBody = document.getElementById('tableResult');
    tableBody.removeChild(row);

    // Update item numbers after deletion
    const rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        cells[0].textContent = i + 1;
    }
}




