const container = document.getElementById("root");

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => {

    users.forEach((user) => {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="name">${user.name}</div>
            <p class="email">${user.email}</p>
            <p><b>Username:</b> ${user.username}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> ${user.website}</p>
            <p class="company"><b>Company:</b> ${user.company.name}</p>
            <p><b>City:</b> ${user.address.city}</p>
        `;

        container.appendChild(card);
    });

})
.catch((error)=>{
    console.log("Error fetching data:", error);
});