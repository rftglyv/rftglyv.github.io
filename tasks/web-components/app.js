// Expand Card button
function expCard() {
    let cardCounter = document.querySelectorAll("#card-counter");
    let expBtn = document.querySelectorAll("#expBtn");

    cardCounter.forEach((elem) => {
        if (elem.style.display !== "none") {
            elem.style.display = "none";
            expBtn.forEach((btn) => {
                btn.classList.replace("fa-chevron-up", "fa-chevron-down");
                btn.style.color = "rgb(31 41 55)";
            });
        } else {
            elem.style.display = "grid";
            expBtn.forEach((btn) => {
                btn.classList.replace("fa-chevron-down", "fa-chevron-up");
                btn.style.color = "rgba(255, 255, 255, 0.7)";
            });
        }
    });
}

// Expand input pane button
function expInputPane() {
    let inputPane = document.getElementById("inputPane"),
        inputPaneBtn = document.getElementById("inputPaneBtn"),
        inputWrapper = document.getElementById("inputWrapper"),
        form = document.querySelector("form")

    if (form.style.display !== "none") {
        form.style.display = "none";
        inputPaneBtn.style.display = "none";
        inputPane.classList.remove("space-y-4")
        inputWrapper.classList.remove("border-2")
    } else {
        form.style.display = "flex";
        inputPaneBtn.style.display = "block";
        inputPane.classList.add("space-y-4");
        inputWrapper.classList.add("border-2")
    };
}

// User Construction
class Storage {
    constructor() {
        this.data = [];
    }

    addUser(user) {
        this.data.push(user);
    }

    allUsers() {
        return this.data;
    }

    getUser(i) {
        return this.data[i];
    }

    numberOfUsers() {
        return this.data.length;
    }
}

let usersDb = new Storage();

class User {
    constructor(
        username,
        img,
        first,
        last,
        follows,
        projects,
        completion,
        fbURL,
        liURL,
        twURL
    ) {
        this.username = username;
        this.img = img;
        this.firstName = first;
        this.lastName = last;
        this.date = new Date();
        this.follows = follows;
        this.projects = projects;
        this.completion = completion;
        this.fbURL = fbURL;
        this.liURL = liURL;
        this.twURL = twURL;
    }

    getCard() {
        return `
    <div id="card" class="card-wrapper w-full border-blue-500 border-2 p-8 rounded-3xl">
              <div class="card flex">
                <div class="profile-pic rounded-full bg-center w-36 h-36" alt="Profile" style="background-image: url('${this.img
            }');"></div>
                <div class="ml-16 mt-6">
                  <h1 id="name" class="text-3xl font-bold">${this.firstName.charAt(0).toUpperCase() +
            this.firstName.slice(1) +
            " " +
            this.lastName.charAt(0).toUpperCase() +
            this.lastName.slice(1)
            }</h1>
                  <h3 id="mSince" class="text-md text-gray-600 select-none mt-2">Joined just now</h3>
                  <ul class="flex text-gray-800 text-xl mt-4 space-x-4">
                    ${this.liURL !== "" ? `<li><a href="${"https://www.linkedin.com/in/" + this.liURL}"><i class="fa-brands fa-linkedin-in"></i></a></li>` : ``}
                    ${this.fbURL !== "" ? `<li><a href="${"https://www.facebook.com/" + this.fbURL}"><i class="fa-brands fa-facebook"></i></a></li>` : ``}
                    ${this.twURL !== "" ? `<li><a href="${"https://twitter.com/" + this.twURL}"><i class="fa-brands fa-twitter"></i></a></li>` : ``}
                    <button><i id="expBtn" class="text-gray-300 fa-solid fa-chevron-up"></i></button>
                  </ul>
                </div>
              </div>
              <div id="card-counter" class="scale-up-top select-none grid grid-cols-3 pt-4 mt-8 border-t-2 border-gray-300 border-dashed text-center">
                <span>
                  <h1 class="font-medium">Following</h1>
                  <p id="${this.username + "-count-f"}">${this.follows == "" ? Math.floor(Math.random() * 999) : this.follows
            }</p>
                </span>
                <span>
                  <h1 class="font-medium">Projects</h1>
                  <p id="${this.username + "-count-p"}">${this.projects == "" ? Math.floor(Math.random() * 999) : this.projects
            }</p>
                </span>
                <span>
                  <h1 class="font-medium">Completion</h1>
                  <p id="${this.username + "-count-c"}">${this.completion == "" ? Math.floor(Math.random() * 999) : this.completion
            }</p>
                </span>
              </div>
            </div>
    `;
    }
}

function createUser() {
    let uNameInput = document.getElementById("uName"),
        fNameInput = document.getElementById("fName"),
        lNameInput = document.getElementById("lName"),
        imgInput = document.getElementById("img").value;

    if (uNameInput.value && fNameInput.value && lNameInput.value !== "") {
        document.getElementById("detailsInput").classList.add("hidden")
        usersDb.addUser(
            new User(
                uNameInput.value.trim(),
                imgInput !== ""
                    ? imgInput
                    : `assets/` + Math.floor(Math.random() * 4) + `.svg`,
                fNameInput.value.trim(),
                lNameInput.value.trim(),
                document.getElementById("follows").value,
                document.getElementById("projects").value,
                document.getElementById("completion").value,
                document.getElementById("fbURL").value,
                document.getElementById("liURL").value,
                document.getElementById("twURL").value
            )
        );

        document.querySelector(".glide__slides").innerHTML = "";
        for (i in usersDb.data) {
            document.querySelector(
                ".glide__slides"
            ).innerHTML += `<li class="glide__slide">
      ${usersDb.data[i].getCard()}
      </li>`;
        }

        document.querySelector(".cards").style.display = "block";
        document.querySelectorAll("#expBtn").forEach((expButton) => {
            expButton.addEventListener("click", expCard);
        });
        document.querySelectorAll(".input").forEach((input) => {
            input.value = "";
            if (input.classList.contains("invalid")) {
                input.classList.remove("invalid");
            }
        });
    } else {
        let requiredInputs = document.querySelectorAll(".required");
        requiredInputs.forEach((elem) => {
            elem.classList.add("shake", "invalid");
        });
        setTimeout(() => {
            requiredInputs.forEach((elem) => {
                elem.classList.remove("shake", "invalid");
            });
        }, 500);
    }
}

// Member since

function memberSince() {
    if (usersDb.numberOfUsers() !== 0) {
        document.querySelectorAll("#mSince").forEach((e, i) => { document.querySelectorAll("#mSince")[i].innerHTML = counter(i) })
    }
}

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    month = day * 30

function counter(i) {
    if (usersDb.numberOfUsers() !== 0) {
        const regDate = new Date(usersDb.data[i].date),
            today = new Date(),
            timeSpan = today - regDate,
            seconds = Math.floor((timeSpan % minute) / second),
            minutes = Math.floor((timeSpan % hour) / minute),
            hours = Math.floor((timeSpan % day) / hour),
            days = Math.floor((timeSpan % month) / day),
            months = Math.floor(timeSpan / month);

        if (minutes <= 0) {
            return `Joined ${seconds} seconds ago`
        } else if (minutes > 0) {
            return `Joined ${minutes + " " + (minutes == 1 ? "minute" : "minutes")} ago`
        } else if (minutes >= 60) {
            return `Joined ${hours + " " + (hours == 1 ? "hour" : "hours")} ago`
        } else if (hours >= 24) {
            return `Joined ${days + " " + (days == 1 ? "day" : "days")} ago`
        } else if (days >= 30) {
            return `Joined ${months + " " + (months == 1 ? "month" : "months")} ago`
        }
    }
}

setInterval(() => { memberSince() }, 1000);

document.getElementById("uName").addEventListener("keydown", () => { document.getElementById("detailsInput").classList.remove("hidden") })

document.getElementById("submitBtn").addEventListener("click", () => {
    document.querySelector("form").style.display !== "none" ? createUser() : expInputPane()
})
document.getElementById("inputPaneBtn").addEventListener("click", expInputPane);
expInputPane()