const insert = document.getElementById('insert');

document.querySelector('input').click()

window.addEventListener('keydown', (e) => {
	console.log(e);
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>Key</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>Key Code</small>
		</div>
		<div class="key">
			${e.code}
			<small>Code</small>
		</div>
	`
});