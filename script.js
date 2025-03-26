function encodeInput(el) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>”‘]/g, function (m) {
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
  newComment.innerHTML = `<strong>${name.value}:</strong> ${comment.value}`;
  document.getElementById("comments").appendChild(newComment);

  // Clear the form
  document.getElementById("commentForm").reset();
}
