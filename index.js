function openPageInOutline(event) {
  const url = `https://outline.com/${event.pageUrl}`;
  chrome.tabs.create({url});
}
chrome.contextMenus.create({
  title: 'Outline this page',
  contexts: ['page'],
  onclick: openPageInOutline,
  type: 'normal',
});
