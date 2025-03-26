// Function to submit comment
function submitComment() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  // Create a new div to hold the comment
  const newComment = document.createElement("div");
  newComment.className = "comment";

  // Insert user input into the comment
  newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
  document.getElementById("comments").appendChild(newComment);

  // Clear the form
  document.getElementById("commentForm").reset();
}
