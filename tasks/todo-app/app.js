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
	<button class="edit-task app-edit-task">
	<svg><use href="#edit-icon"></use></svg>
	</button>
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

function editTask(key) {
	const index = tasks.findIndex((item) => item.id === Number(key));
	const taskTextArea = document.querySelector(`[data-key='${tasks[index].id}']`);
	taskTextArea.innerHTML = `
    <input id="${tasks[index].id}" type="checkbox"/>
    <label for="${tasks[index].id}" class="tick app-tick"></label>
    <form class="edit-tasks-form"><input autofocus type="text" placeholder="${tasks[index].text} | Press Enter" class="app-edit-task-input"/></form>
    <span>${tasks[index].time} | ${tasks[index].date}</span>
	<button class="edit-task app-edit-task">
	<svg><use href="#edit-icon"></use></svg>
	</button>
    <button class="delete-task app-delete-task">
    <svg><use href="#delete-icon"></use></svg>
    </button>`
	document.querySelector(`.app-edit-task-input`).focus()
	const form = document.querySelector(".edit-tasks-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const input = document.querySelector(".app-edit-task-input");
		const text = input.value.trim();
		function isInputEmpty()
		{
			return text.length === 0 ? tasks[index].text : text
		}
		if (isInputEmpty() === text){
			tasks[index].text = text;
		}
		taskTextArea.innerHTML = `
		<input id="${tasks[index].id}" type="checkbox"/>
		<label for="${tasks[index].id}" class="tick app-tick"></label>
		<span>${isInputEmpty()}</span>
		<span>${tasks[index].time} | ${tasks[index].date}</span>
		<button class="edit-task app-edit-task">
		<svg><use href="#edit-icon"></use></svg>
		</button>
		<button class="delete-task app-delete-task">
		<svg><use href="#delete-icon"></use></svg>
		</button>`

	});
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

	if (event.target.classList.contains("app-edit-task")) {
		const itemKey = event.target.parentElement.dataset.key;
		editTask(itemKey);
	}
});
