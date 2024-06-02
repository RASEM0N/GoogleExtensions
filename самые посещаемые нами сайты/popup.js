// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/topSites/basic/README.md

window.addEventListener('load', async () => {
	const topSites = await chrome.topSites.get();
	const appRef = document.getElementById('app');

	appRef.innerHTML = `
        <ul>
            ${topSites.reduce((r, { url, title }, idx) => {
				return r + `<li>${idx}. <a href="${url}" target="_blank"><b>${title}</b></a></li>`;
			}, '')}
        </ul>
    `;
});
