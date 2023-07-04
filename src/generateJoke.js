import axios from 'axios';
async function generatejoke () {
    const joke = await axios.get('https://api.chucknorris.io/jokes/random');
    document.querySelector('#joke').innerHTML = joke.data.value;
}
export default generatejoke;