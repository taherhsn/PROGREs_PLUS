const students = [
  {
  name: "Taher HASNAOUI",
  id: "1111",
  dateOfBirth: "0000-00-00",
  academicYear: "0000–00-00",
  program:"2nd Year CS",

  
},
{
  name: "Djilali REBAHI",
  id: "2222",
  dateOfBirth: "0000-00-00",
  academicYear: "2025–2026",
  program:"2nd Year CS",

 
},{
  name: "Houcine BELHACENE",
  id: "3333",
  dateOfBirth: "0000-00-00",
  academicYear: "2025–2026",
  program:"2nd Year CS",
},
{
  name: "Toufik ",
  id: "4xl",
  dateOfBirth: "0000-00-00",
  academicYear: "2025–2026",
  program: "FASTFOOD Engineering ",
  
}]; 



const form = document.getElementById("loginForm");
const errorText = document.getElementById("errorText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("regNumber").value.trim();
  const password = document.getElementById("password").value.trim();

  errorText.textContent = "";

  if (id === "" || password === "") {
    errorText.textContent = "Please fill all fields.";
    return;
  }

  
  const student = students.find(s => s.id === id);

  if (!student) {
    errorText.textContent = "Registration Number not found.";

    setTimeout(() => {
      errorText.textContent = "";
    }, 2500);

    return;
  }

  
  const correctPassword = student.dateOfBirth.replace(/-/g, "");

  if (password !== correctPassword) {
    errorText.textContent = "Wrong password";
    setTimeout(() => {
      errorText.textContent = "";
    }, 2500);
    return;
  }

  document.getElementById("sidebarName").textContent=student.name;
  document.getElementById("sidebarP").textContent=student.program;
  document.getElementById("sidebarID").textContent=student.id;

  

  document.getElementById("loginView").style.display = "none";
  document.getElementById("Layout").style.display    = "flex";
 
  showView("notif");
});

function showView(viewName) {
 
  document.getElementById("viewNotif").style.display     = "none";
  document.getElementById("viewMarks").style.display     = "none";
  document.getElementById("viewTimetable").style.display = "none";
  document.getElementById("viewAdmin").style.display     = "none";
  document.getElementById("viewElearn").style.display    = "none";

  
  document.getElementById("navNotif").classList.remove("active");
  document.getElementById("navMarks").classList.remove("active");
  document.getElementById("navTimetable").classList.remove("active");
  document.getElementById("navAdmin").classList.remove("active");
  document.getElementById("navElearn").classList.remove("active");

  
  if (viewName === "notif") {
    document.getElementById("viewNotif").style.display = "block";
    document.getElementById("navNotif").classList.add("active");
  }

  if (viewName === "marks") {
    document.getElementById("viewMarks").style.display = "block";
    document.getElementById("navMarks").classList.add("active");
  }

  if (viewName === "timetable") {
    document.getElementById("viewTimetable").style.display = "block";
    document.getElementById("navTimetable").classList.add("active");
  }

  if (viewName === "admin") {
    document.getElementById("viewAdmin").style.display = "block";
    document.getElementById("navAdmin").classList.add("active");
  }

  if (viewName === "elearn") {
    document.getElementById("viewElearn").style.display = "block";
    document.getElementById("navElearn").classList.add("active");
  }
}

document.getElementById("navNotif").addEventListener("click", () => showView("notif"));
document.getElementById("navMarks").addEventListener("click", () => showView("marks"));
document.getElementById("navTimetable").addEventListener("click", () => showView("timetable"));
document.getElementById("navAdmin").addEventListener("click", () => showView("admin"));
document.getElementById("navElearn").addEventListener("click", () => showView("elearn"));

window.showView = showView;

function showDay(day, btn) {
  const map = {
    sat: "daySat",
    sun: "daySun",
    mon: "dayMon",
    tue: "dayTue",
    wed: "dayWed",
    thu: "dayThu",
  };

  
  Object.values(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  
  const targetId = map[day];
  const target = document.getElementById(targetId);
  if (target) target.style.display = "block";

  
  const allBtns = document.querySelectorAll(".day-tab");
  allBtns.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}
window.showDay = showDay;
