window.addEventListener('load', () => {
	const form = document.querySelector("#idea_form");
	const input = document.querySelector("#idea_input");
	const list_el = document.querySelector("#idea");

	 form.addEventListener('submit', (e) => {
		e.preventDefault(); 

		const idea = input.value;

		const idea_el = document.createElement('div');
		idea_el.classList.add('idea');

		const idea_content_el = document.createElement('div');
		idea_content_el.classList.add('content');

		idea_el.appendChild(idea_content_el);

		const idea_input_el = document.createElement('input');
		idea_input_el.classList.add('text');
		idea_input_el.type = 'text';
		idea_input_el.value = idea;
		idea_input_el.setAttribute('readonly', 'readonly');

		idea_content_el.appendChild(idea_input_el);

		const idea_actions_el = document.createElement('div');
		idea_actions_el.classList.add('actions');

		const idea_edit_el = document.createElement('button');
		idea_edit_el.classList.add('edit');
		idea_edit_el.innerText = 'Edit';

		const idea_delete_el = document.createElement('button');
		idea_delete_el.classList.add('delete');
		idea_delete_el.innerText = 'Delete';

		idea_actions_el.appendChild(idea_edit_el);
		idea_actions_el.appendChild(idea_delete_el);

		idea_el.appendChild(idea_actions_el);

		list_el.appendChild(idea_el);

		input.value = '';

		idea_edit_el.addEventListener('click', (e) => {
			if (idea_edit_el.innerText.toLowerCase() == "edit") {
				idea_edit_el.innerText = "Save";
				idea_input_el.removeAttribute("readonly");
				idea_input_el.focus();
			} else {
				idea_edit_el.innerText = "Edit";
				idea_input_el.setAttribute("readonly", "readonly");
			}
		});

		idea_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(idea_el);
		});
	});
});