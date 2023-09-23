function registration() {
  // Get form field values
  // change document get element by id
  const teamName = document.getElementById('teamName')?.value;
  const topic = document.getElementById('topic')?.value;
  const email = document.getElementById('email')?.value;
  const phoneNumber = document.getElementById('phoneNumber')?.value;
  const category = document.getElementById('category')?.value;
  const groupSize = document.getElementById('groupSize')?.value;
  const privacy = document.getElementById('privacy')?.value;

  // Construct the API request URL
  const baseUrl = 'https://backend.getlinked.ai';
  const apiUrl = `${baseUrl}/hackathon/registration`; // Replace with your API URL

  // Create a JSON object with the form data
  const formData = {
    email: email || 'adknjf@yu.com',
    phone_number: phoneNumber || '0903322445533',
    team_name: teamName || 'engineers',
    group_size: groupSize || 10, // get that via getElem,entbyid
    project_topic: topic || 'Web server propagation',
    category: category || 1,
    privacy_poclicy_accepted: privacy || true,
  };

  console.log(formData);

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response here, e.g., display a success message
      console.log('API response:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}
