document.addEventListener('DOMContentLoaded', function() {
  //  console.log("loaded...");
  const userNameInput = document.getElementById('userNameInput');
  const titleInput = document.getElementById('title');
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

      // Beacuse we are dealing with LocalStorage 
      // First things is we check IF theere is EXISTING DATA (?)
      let savedData = localStorage.getItem('blogs');
    //  let savedData = JSON.parse(localStorage.getItem('blogs'));
      if(!savedData) {
        // Create a new KEY: VALUE pair in localStorage
        localStorage.setItem('blogs', JSON.stringify([]))  // [{username: "", title: "", blogPost: "" }, {}, {}]

      }
      // we CONVERT the JSON OBJECT (in localStorage) to a JS Object in our code
      let savedJS = JSON.parse(savedData)  // we CONVERT the JSON string "{"username": "Sarah", ""} to a JS ARRAY of data --> [{ key: value}]
      console.log("Saved: ", savedJS);
      // How do we add NEW DATA to a JS ARRAY?
      savedJS.push(formData);   // A JS ARRAY --> type = object
      console.log("Current: ", savedJS);
      console.log("Type: ", typeof savedJS);
    // console.log("formData: ", formData);
      // Convert the object to a string and save it to local storage
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('blogs', JSON.stringify(savedJS))  // think OVERWRITE not update

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