(() => {
  const INTERVAL = 1000;
  const markdown = window.markdownit({html: true, linkify: true});

  setInterval(markdownAll, INTERVAL);

  function markdownAll() {
    document.querySelectorAll('.list-card-title').forEach(markdownTitle);
  }

  function markdownTitle(title) {
    const rendered = markdown.render(title.innerHTML);

    if (rendered !== title.innerHTML) {
      title.innerHTML = rendered;
      window.Gator(title).on('click', 'a', handleTitleLink);
    }
  }

  function handleTitleLink(e) {
    e.stopPropagation();
    this.target = '_blank';
  }
})();
