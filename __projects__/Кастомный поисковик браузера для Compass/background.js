// почему-то данное событие не перехватывается
// так что делаю через onInputChanged
// chrome.omnibox.onInputEntered.addListener;

chrome.omnibox.onInputChanged.addListener((text) => {
	let link;

	if (text.includes('git')) {
		link = 'https://git.skn.dev/';
	}

	if (text.includes('jira')) {
		link = 'https://jira.elon.team';
	}

	if (text.includes('wiki')) {
		link = 'https://wiki.elon.team';
	}

	if (text.includes('api')) {
		link = 'https://com-api.elon.team/';
	}

	if (!link) return;

	chrome.tabs.create({ url: link });
});
