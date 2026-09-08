#Task 6 – Contact Form with JavaScript Validation
Objective

Build a contact form with client-side validation for Name, Email, and Message fields, using vanilla HTML, CSS, and JavaScript.

Files
index.html – Form markup (Name, Email, Message, Submit)
style.css – Styling for the form and error/success states
script.js – Validation logic (regex email check, required-field checks, dynamic error messages)
What it does
Validates that Name, Email, and Message are not empty.
Validates Email format using a regex pattern.
Requires Message to be at least 10 characters.
Shows inline error messages under each field, updating live as the user types.
Calls event.preventDefault() to stop the form from submitting/reloading the page when invalid.
Shows a success message on valid submission (no data is actually sent anywhere).
Resets the form after a successful "submission."
How to run

Open index.html in a browser — no build steps or dependencies required.

Edge cases tested
Empty fields on submit
Invalid email formats (missing @, missing domain, spaces)
Very short / whitespace-only messages
Special characters in name and message fields
