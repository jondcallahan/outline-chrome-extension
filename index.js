function openPageInOutline(event) {
  const target = event.linkUrl || event.pageUrl;
  const url = `https://outline.com/${target}`;
  chrome.tabs.create({url});
}
chrome.contextMenus.create({
  title: 'Outline this page',
  contexts: ['page', 'link'],
  onclick: openPageInOutline,
  type: 'normal',
});
