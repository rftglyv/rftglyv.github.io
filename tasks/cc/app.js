const inputs = document.querySelectorAll(".ccEdit");

inputs.forEach((input) => {
    input.addEventListener("click", (input) => {
        const formatter = (elemId) => {
            const inputBox = document.getElementById(elemId)
            inputBox.addEventListener("keypress", (event) => {
                if (inputBox.value != "" && event.key === "Enter") {
                    if (elem.id == "ccUserInput") {
                        const arr = inputBox.value.split(" ");
                        for (i in arr) {
                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                        }
                        input.target.innerHTML = arr.join(" ")
                    }
                    else if (elem.id == "ccNumInput" && inputBox.value.charAt(0) == "4" || inputBox.value.charAt(0) == "5") {
                        const ccCompanyLogo = document.querySelector(".ccCompany")
                        ccCompanyLogo.classList.remove("w-11","h-4")
                        input.target.innerHTML = inputBox.value.match(/.{1,4}/g).join(" ")
                        if (inputBox.value.charAt(0) == "4") { 
                            ccCompanyLogo.src = "assets/visa.png"
                            ccCompanyLogo.classList.remove("w-8","h-5")
                            ccCompanyLogo.classList.add("w-11","h-4")
                        }
                        else if (inputBox.value.charAt(0) == "5") { 
                            ccCompanyLogo.src = "assets/mastercard.png"
                            ccCompanyLogo.classList.remove("w-11","h-4")
                            ccCompanyLogo.classList.add("w-8","h-5")
                        }
                    }
                    else {
                        input.target.innerHTML = inputBox.value
                    }
                }
            })
        };

        if (input.target.innerHTML != `<input id="input" placeholder="Press Enter" type="text">`) {
            elem = input.target
            if (elem.id == "ccUser") {
                elem.innerHTML = `<input id=${elem.id + "Input"} placeholder="Press Enter" type="text">`
            }
            else if (elem.id == "ccNum") {
                elem.innerHTML = `<input id=${elem.id + "Input"} placeholder="Press Enter" type="text">`
            }
            else if (elem.id == "ccExpDate") {
                elem.innerHTML = `<input id=${elem.id + "Input"} maxlength="5" placeholder="Press Enter" type="text">`
            }
            else if (elem.id == "ccCCV") {
                elem.innerHTML = `<input id=${elem.id + "Input"} maxlength="3" pattern="\d" placeholder="Press Enter" type="text">`
            }
            formatter(elem.id + "Input")
        }
    })
})

// Screenshot

const screenshotBtn = document.querySelector("#src-btn"),
    screenshotPreview = document.querySelector(".src-preview"),
    utils = document.querySelector(".utils"),
    closeBtn = screenshotPreview.querySelector("#close-btn");

const captureScreen = async () => {
    try {
        screenshotPreview.classList.toggle("hidden")
        screenshotBtn.classList.add("hidden")
        utils.classList.add("hidden")
        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
        const video = document.createElement("video");

        video.addEventListener("loadedmetadata", () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            video.play();
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop();

            screenshotPreview.querySelector("img").src = canvas.toDataURL();
            screenshotPreview.classList.add("show");
        });
        video.srcObject = stream;
    } catch (error) {
        alert("Failed to capture screenshot!");
        screenshotBtn.classList.toggle("hidden")
        utils.classList.toggle("hidden")
    }
}

closeBtn.addEventListener("click", () => {
    screenshotPreview.classList.toggle("show")
    screenshotBtn.classList.toggle("hidden")
    utils.classList.toggle("hidden")
    screenshotPreview.classList.toggle("hidden")
});
screenshotBtn.addEventListener("click", captureScreen);