const commentsForm = document.querySelector("#commentsForm");
const commentContainer = document.querySelector("#commentContainer");

// form handler
commentsForm.addEventListener("submit", (e) => {
  const username = commentsForm.elements.username;
  const comment = commentsForm.elements.comment;
  e.preventDefault();
  addComment(username.value, comment.value);
});

// add comments
function addComment(username, comment) {
  const bTag = document.createElement("b");
  const newComment = document.createElement("li");

  bTag.textContent = username;
  newComment.append(bTag);
  newComment.append(` - ${comment}`);
  commentContainer.append(newComment);
}

// delete comments
commentContainer.addEventListener("dblclick", (e) => {
  const li = e.target.closest("li");
  if (li) {
    li.remove();
  }
});
