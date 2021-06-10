window.onload= function () {
    addUserTable()
};

function addUserTable(){
    for (let i = 0; i < users.length; i++){
        tbody.innerHTML+=`
        <tr>
           <td id="userID" class="border py-2 px-2">${users[i].id}</td>
           <td id="userName" class="border py-2 px-3">${users[i].name}</td>
           <td id="userEmail" class="border py-2 px-3">${users[i].email}</td>
           <td id="userAddress" class="border py-2 px-3">${users[i].address.street +" "+ users[0].address.suite}</td>
           <td id="userPhone" class="border py-2 px-3">${users[i].phone}</td>
           <td id="userWebsite" class="border py-2 px-3">${users[i].website}</td>
        </tr>
      `;
    }
}

searchBtn.onclick = function(){
    let isFound = false;
    for (let i=0;i<users.length;i++){
        if (searchInput.value == users[i].id){   //typeof number & string => ==
            tbody.innerHTML = "";
            tbody.innerHTML+=`
            <tr>
               <td id="userID" class="border py-2 px-2">${users[i].id}</td>
               <td id="userName" class="border py-2 px-3">${users[i].name}</td>
               <td id="userEmail" class="border py-2 px-3">${users[i].email}</td>
               <td id="userAddress" class="border py-2 px-3">${users[i].address.street +" "+ users[0].address.suite}</td>
               <td id="userPhone" class="border py-2 px-3">${users[i].phone}</td>
               <td id="userWebsite" class="border py-2 px-3">${users[i].website}</td>
            </tr>
          `;
            isFound = true;
        }
    }
    if (!isFound){
        alert("No user found!")
    }
};