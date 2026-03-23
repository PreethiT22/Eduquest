
/* =========================
   COURSE DETAILS
========================= */

const params = new URLSearchParams(window.location.search);

if (document.getElementById("title")) {

    let title = params.get("title");

    document.getElementById("title").innerText = title;
    document.getElementById("instructor").innerText = params.get("instructor");
    document.getElementById("price").innerText = params.get("price");
    document.getElementById("rating").innerText = params.get("rating");
    document.getElementById("duration").innerText = params.get("duration");

    let desc = "";
    let instructorInfo = "";
    let topics = [];

    // Web Development
    if (title === "Web Development") {
        desc = "Learn to build responsive websites using HTML, CSS, and JavaScript.";
        instructorInfo = "Anvitha Ragala is a senior web developer with 10+ years experience.";
        topics = ["HTML", "CSS", "JavaScript", "Responsive Design", "Projects"];
    }

    // Data Structures
    else if (title === "Data Structures") {
        desc = "Master Data Structures and Algorithms for coding interviews and problem solving.";
        instructorInfo = "Smith Doe is a DSA expert and competitive programmer.";
        topics = ["Arrays", "Linked Lists", "Stacks", "Trees", "Graphs", "Dynamic Programming"];
    }

    // Machine Learning
    else if (title === "Machine Learning") {
        desc = "Learn ML algorithms and build intelligent AI models.";
        instructorInfo = "Akanksh Verula is a globally recognized AI expert.";
        topics = ["Regression", "Classification", "Clustering", "Neural Networks"];
    }

    // Python
    else if (title === "Python Programming") {
        desc = "Learn Python from basics to advanced with real-world projects.";
        instructorInfo = "David Mike is a Python developer and instructor.";
        topics = ["Basics", "Functions", "OOP", "Libraries", "Projects"];
    }

    // Cloud
    else if (title === "Cloud Computing") {
        desc = "Understand cloud computing concepts and deployment using AWS.";
        instructorInfo = "James Wilson is a cloud architect.";
        topics = ["AWS", "Storage", "Deployment", "Virtual Machines"];
    }

    // Set content
    document.getElementById("desc").innerText = desc;
    document.getElementById("instructorDetails").innerText = instructorInfo;

    // Curriculum
    let list = document.getElementById("curriculum");
    list.innerHTML = ""; // clear previous

    topics.forEach(topic => {
        let li = document.createElement("li");
        li.innerText = topic;
        list.appendChild(li);
    });
}


/* =========================
   LOGIN / REGISTER TOGGLE
========================= */

let isRegister = false;

function toggleForm() {
    isRegister = !isRegister;

    const title = document.getElementById("formTitle");
    const nameField = document.getElementById("nameField");
    const confirmField = document.getElementById("confirmField");
    const btn = document.getElementById("mainBtn");
    const switchText = document.getElementById("switchText");

    if (isRegister) {
        title.innerText = "Register";
        nameField.style.display = "block";
        confirmField.style.display = "block";
        btn.innerText = "Register";
        switchText.innerText = "Already have an account?";
    } else {
        title.innerText = "Login";
        nameField.style.display = "none";
        confirmField.style.display = "none";
        btn.innerText = "Login";
        switchText.innerText = "Don't have an account?";
    }
}


/* =========================
   FORM VALIDATION
========================= */

function validateForm() {

    let name = document.getElementById("name")?.value || "";
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm")?.value || "";

    // EMPTY CHECK
    if (email === "" || password === "" || (isRegister && name === "")) {
        alert("Please fill all required fields");
        return false;
    }

    // EMAIL VALIDATION
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email");
        return false;
    }

    // PASSWORD LENGTH
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // REGISTER VALIDATION
    if (isRegister) {
        if (confirm === "") {
            alert("Please confirm password");
            return false;
        }

        if (password !== confirm) {
            alert("Passwords do not match");
            return false;
        }
    }

    // SUCCESS
    alert(isRegister ? "Registered Successfully!" : "Login Successful!");
    return true;
}