function getDay() {
    //let currentDay = (new Date).getDate();
    let month = document.getElementById("month").value;
    month = parseInt(month) + 1;
    let option = '<option value="-1">Day</option>'; // First option
    let currentDay = document.getElementById("day").value;
    
    // if month 31 days
    if(month === 4 || month === 6 || month === 9 || month === 11) {
        for(var i=1; i<=30; i++) {
            let selected = (i == currentDay ? ' selected' : '');
            option += '<option value="' + i + '"' + selected + '>' + i + '</option>'; 
            //option += '<option value="' + i + '">' + i + '</option>';
        }
    }

    // if month 28 days
    else if(month === 2) {
        for(var i=1; i<=28; i++) {
            let selected = (i == currentDay ? ' selected' : '');
            option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
            //option += '<option value="' + i + '">' + i + '</option>'; 
        }
    }

    // if month 30 days
    else {
        for(var i=1; i<=31; i++) {
            let selected = (i == currentDay ? ' selected' : '');
            option += '<option value="' + i + '"' + selected + '>' + i + '</option>'; 
            //option += '<option value="' + i + '">' + i + '</option>';
        }
    }

    document.getElementById("day").innerHTML = option;
}

function getMonth() {
    const month = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    let currentMonth = (new Date).getMonth();

    let option = '<option value="-1">Month</option>'; // First option

    for(var i=0; i<12; i++) {
        //let selected = (i === currentMonth ? ' selected' : '');
        //option += '<option value="' + i + '"' + selected + '>' + month[i] + '</option>';  
        option += '<option value="' + i + '">' + month[i] + '</option>';
    }

    document.getElementById("month").innerHTML = option;
}

function getYear() {
    let yearStart = 1900;
    let yearEnd = (new Date).getFullYear(); // Current year
    //let yearSelected = yearEnd;
    
    let option = '<option value="-1">Year</option>'; // First option
    
    for(var i=yearEnd; i>=yearStart; i--) {
        //let selected = (i === yearSelected ? ' selected' : '');
        //option += '<option value="' + i + '"' + selected + '>' + i + '</option>'; 
        option += '<option value="' + i + '">' + i + '</option>';
    }
    
    document.getElementById("year").innerHTML = option;
}

getMonth();
getDay();
getYear();

function calculate() {
    // Get user inputs
    const day = document.getElementById("day");
    var dayV = day.value;

    const month = document.getElementById("month");
    var monthV = parseInt(month.value) + 1;

    const year = document.getElementById("year");
    var yearV = year.value;

    // Validate form
    if(dayV == -1 || monthV == -1 || yearV == -1) {
        alert("no u");
        return;
    }

    // convert user input to date format
    var date = new Date(yearV + "-" + monthV + "-" + dayV);

    // get the current date
    var cDay = (new Date).getDate();
    var cMonth = (new Date).getMonth();
    cMonth = parseInt(cMonth) + 1;
    var cYear = (new Date).getFullYear();
    var currentDate = new Date(cYear + "-" + cMonth + "-" + cDay);

    // declare age variables
    var ageYear;
    var ageMonth;
    var ageDay;
    var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    // Calculate year
    ageYear = cYear - yearV;

    // calculate month
    if(cMonth >= monthV) {
        ageMonth = cMonth - monthV;
    }

    else {
        ageYear--;
        ageMonth = 12 + cMonth - monthV;        
    }

    //calculate day
    if(cDay >= dayV) {
        ageDay = cDay - dayV;
    }

    else {
        ageMonth--;
        ageDay = monthDays[monthV-1] + cDay - dayV;
    }

    var yearText = document.getElementById("year-age");
    var monthText = document.getElementById("month-age");
    var dayText = document.getElementById("day-age");

    yearText.innerHTML = ageYear;
    monthText.innerHTML = ageMonth;
    dayText.innerHTML = ageDay;
}