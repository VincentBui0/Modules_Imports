// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export async function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        let body =document.querySelector('body')
        console.log(json[0].thumbnailUrl)
        let image = document.createElement('img')
        image.setAttribute('src', json[0].thumbnailUrl)
        body.append(image)
      });
  }