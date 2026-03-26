async function getuser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await res.json();

    photos.forEach(photo => {
      document.body.innerHTML += `
        <p>${photo.id} - ${photo.title}</p>
      `;
    });

  } catch (err) {
    console.log('error', err);
  }
}

getuser();