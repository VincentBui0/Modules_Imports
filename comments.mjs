export async function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((element, index) => {
        if (index < 50) {
          // Process only the initial 50 comments
          let commentsContainer = document.querySelector(".commentsContainer");

          // Generate a new div for each comment
          let newComment = document.createElement("div");
          newComment.setAttribute("class", "comment");
          // Apply alternating background colors for comments
          newComment.style.backgroundColor =
            index % 2 === 0 ? "#f0faff" : "transparent"; // Light blue for even comments, transparent for odd

          // Populate the inner HTML with commenter's details and comment body
          newComment.innerHTML = `
            <div><strong>${element.name}</strong><br>${element.email}</div>
            <div>${element.body}<br><br></div>
          `;

          // Add the new comment div to the comments container
          commentsContainer.appendChild(newComment);
        }
      });
    });
}
