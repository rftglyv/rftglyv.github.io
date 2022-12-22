let tasks = [];

function main(task) {
	const list = document.querySelector(".app-task-list");
	const item = document.querySelector(`[data-key='${task.id}']`);

	if (task.deleted) {
		item.remove();
		return;
	}

	const isChecked = task.checked ? "done" : "";
	const node = document.createElement("li");
	node.setAttribute("class", `task-item ${isChecked}`);
	node.setAttribute("data-key", task.id);
	node.innerHTML = `
    <input id="${task.id}" type="checkbox"/>
    <label for="${task.id}" class="tick app-tick"></label>
    <span>${task.text}</span>
    <span>${task.time} | ${task.date}</span>
    <button class="delete-task app-delete-task">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

	if (item) {
		list.replaceChild(node, item);
	} else {
		list.append(node);
	}
}

function addTask(text) {
    function pad(num)
    {
        return num<10 ? '0'+ num : num
    }
	dateInit = new Date();
	const task = {
		text,
		checked: false,
		id: Date.now(),
		date: dateInit.toLocaleDateString(),
		time: pad(dateInit.getHours()) + `:` + pad(dateInit.getMinutes()) + `:` + pad(dateInit.getSeconds())
	};

	tasks.push(task);
	main(task);
}

function toggleDone(key) {
	const index = tasks.findIndex((item) => item.id === Number(key));
	tasks[index].checked = !tasks[index].checked;
	main(tasks[index]);
}

function deleteTask(key) {
	const index = tasks.findIndex((item) => item.id === Number(key));
	const Task = {
		deleted: true,
		...tasks[index],
	};
	tasks = tasks.filter((item) => item.id !== Number(key));
	main(Task);
}

const form = document.querySelector(".tasks-form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.querySelector(".app-task-input");

	const text = input.value.trim();
	if (text !== "") {
		addTask(text);
		input.value = "";
		input.focus();
	}
});

const list = document.querySelector(".app-task-list");
list.addEventListener("click", (event) => {
	if (event.target.classList.contains("app-tick")) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}

	if (event.target.classList.contains("app-delete-task")) {
		const itemKey = event.target.parentElement.dataset.key;
		deleteTask(itemKey);
	}
});
