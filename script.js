window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then((response) => {
        return response.json();
    })
     .then((astronautJason) => {
         const container = document.querySelector("#container");
         const count = document.getElementById("count");
         count.innerHTML = `Number of Astronauts: ${astronautJason.length}`;
         let astronauts = "";
         const organizedAstronauts = astronautJason.sort(
             (a, b) => b.hoursInSpace - a.hoursInSpace
         );
         for (astronaut of astronautJason) {
             if (astronaut.active) {
                astronauts += `
                <div class="astronaut">
                <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                  <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li style='color: green'>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(", ")}</li>
                  </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
              </div>
             `;
             } else {
             astronauts += `
             <div class="astronaut">
             <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                   <li>Hours in space: ${astronaut.hoursInSpace}</li>
                   <li style='color: red'>Active: ${astronaut.active}</li>
                   <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
             </div>
             <img class="avatar" src="${astronaut.picture}">
           </div>
           `;
           }
         }
         container.innerHTML = astronauts;

     });
});
    

