import prof_data from "../data/prof-data.json" assert { type: "json" };

function listingAwards() {
    let parentElem = document.getElementById("profCard");

    for (var i = 0; i < prof_data.awards.length; i++) {
      let content = `
      <div class="card">
      <div class="card-header">
      <div class="col-lg-3 col-md-3 col-sm-3">
          <p>${prof_data.awards[i]?.date}, ${prof_data.awards[i]?.place}</p>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7">
          <p class="text-align-justify" id="awardTitle">${prof_data.awards[i].title}</p>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 text-align-end">
          <a class="btn" data-bs-toggle="collapse" href="#collapse${i}">
              <i class="fa fa-angle-right left-icon"></i>
            </a>
      </div>
  </div>
  <div id="collapse${i}" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
    ${prof_data.awards[i].description}
    </div>
  </div>
  </div>
      `;
      parentElem.innerHTML += content;
  }
}

function listingMonthlyGoals() {
  let monthlyGoalsParentElem = document.getElementById('goalCard');
  for(var i=0; i < 3; i++) { 
    let cardElem = `
    <div class="goal-card" style="width:400px">
      <div>
        <h2>${prof_data.monthlyGoals[i].month}</h2>
        <h3>${prof_data.monthlyGoals[i].title}</h3>
        <p>${prof_data.monthlyGoals[i].description}</p>
    </div>
  </div>`;
  monthlyGoalsParentElem.innerHTML += cardElem;
  }
}

function listingWeeklyActivities() { 
  let weeklyActivitiesElem = document.getElementById('weeklyActivities');
  let currentWeekNumber = moment().week() - 1; //Give the current week number
  for(var i=0; i < prof_data.weeklyActivities.length; i++) { 
    if(currentWeekNumber ===  parseInt(prof_data.weeklyActivities[i].week)) { 
      let tableElem =  `
      <tr>
              <td>${prof_data.weeklyActivities[i].date}</td>
              <td> <a href="${prof_data.weeklyActivities[i].link}" target="_blank">${prof_data.weeklyActivities[i].topic}</a></td>
              <td>${prof_data.weeklyActivities[i].status}</td>
      </tr>
      `;
      weeklyActivitiesElem.innerHTML +=tableElem;
    }
  } 
}

listingAwards();
listingMonthlyGoals();
listingWeeklyActivities();
