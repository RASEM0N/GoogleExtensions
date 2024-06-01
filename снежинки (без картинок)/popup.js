const show = document.querySelector('#show');
show.addEventListener('click', async () => {
	// получем доступ к текущему Табу
	// permissions: ['activeTab']
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	// дает возможность выполнять скрипты
	// на данном Табе
	// permissions: ['scripting']
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
	});
});

// показываем снежинки на страница
// Можно контент удалить
// вместо снежинок
const showFail = () => {

	// 🤡🤡🤡🤡
	document.body.innerHTML = '';
};
