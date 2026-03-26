function encodeInput(input) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#38;",
  };
  return input.replace(/[&<>”‘]/g, function (m) {
    return map[m];
  });
}

// Function to submit comment
function submitComment() {
  const name = document.getElementById("name");
  const comment = document.getElementById("comment");

  // Create a new div to hold the comment
  const newComment = document.createElement("div");
  newComment.className = "comment";

  // Insert user input into the comment
  newComment.innerHTML = `<strong>${encodeInput(name.value)}:</strong> ${encodeInput(comment.value)}`;
  document.getElementById("comments").appendChild(newComment);

  // Clear the form
  document.getElementById("commentForm").reset();
}

function submitCommentSafe() {
  const name = document.getElementById("name");
  const comment = document.getElementById("comment");

  const newComment = document.createElement("div");
  newComment.className = "comment";

  const strong = document.createElement("strong");
  strong.textContent = name.value + ":";
  newComment.appendChild(strong);
  newComment.append(" " + comment.value);

  document.getElementById("comments").appendChild(newComment);

  document.getElementById("commentForm").reset();
}

// very new and not fully supported setHTML approach

function submitCommentSanitized() {
  const name = document.getElementById("name");
  const comment = document.getElementById("comment");

  const newComment = document.createElement("div");
  newComment.className = "comment";

  // setHTML parses the input as HTML but strips anything dangerous
  // <strong>, <em>, <a> etc. survive — <script>, onerror, onclick do not
  newComment.setHTML(`<strong>${name.value}:</strong> ${comment.value}`);

  document.getElementById("comments").appendChild(newComment);

  document.getElementById("commentForm").reset();
}
