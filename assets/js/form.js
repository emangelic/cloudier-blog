document.addEventListener('DOMContentLoaded', function() {
  const userNameInput = document.getElementById('userNameInput');
  const titleInput = document.getElementById('titleInput');
  const blogPostInput = document.getElementById('blogPostInput');
  const submitButton = document.getElementById('submitButton');

  // Function to save form data to local storage
  const saveFormData = () => {
      // Get the values entered by the user
      const username = userNameInput.value;
      const title = titleInput.value;
      const blogPost = blogPostInput.value;

      // Create an object to store the form data
      const formData = {
          username: username,
          title: title,
          blogPost: blogPost
      };

      // Convert the object to a string and save it to local storage
      localStorage.setItem('formData', JSON.stringify(formData));

      // Log the saved data to the console
      console.log('Form data saved to local storage:', formData);
  };

  // Add event listener to the save button
  submitButton.addEventListener('click', saveFormData);

  // Add event listener to the document for the "keypress" event
  document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          saveFormData();
      }
  });
});