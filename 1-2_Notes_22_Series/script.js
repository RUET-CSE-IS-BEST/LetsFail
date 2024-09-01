// Get all the note elements
const notes = document.querySelectorAll(".note");

// Loop through all notes
notes.forEach((note) => {
  // Get the note ID
  const noteId = note.getAttribute("data-note-id");

  // Check if this note has been marked as read (saved in localStorage)
  const isRead = localStorage.getItem(noteId) === "true";

  // Set the background color based on localStorage
  if (isRead) {
    note.classList.add("read"); // Apply the green background if marked as read
  }

  // Add click event listener to each note
  note.addEventListener("click", () => {
    const isCurrentlyRead = note.classList.contains("read");

    // Toggle read state
    if (isCurrentlyRead) {
      note.classList.remove("read"); // Unmark as read
      localStorage.setItem(noteId, "false"); // Save as unread
    } else {
      note.classList.add("read"); // Mark as read
      localStorage.setItem(noteId, "true"); // Save as read
    }
  });
});
