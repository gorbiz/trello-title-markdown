function markdownAll() {
  var cards = document.getElementsByClassName('list-card-title');
  for (var i = 0; i < cards.length; i++) {
  cards[i].innerHTML = cards[i].innerHTML
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\`(.+?)\`/g, '<code>$1</code>')
      .replace(/~~(.+?)~~/g, '<strike>$1</strike>');
  }
  setTimeout(markdownAll, 500);
}
markdownAll();
