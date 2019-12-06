/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
axios.get("https://api.github.com/users/viscountfam")
  .then(response => {
    // console.log(response);
    cards.appendChild(CardMaker(response.data));
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 



   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'israelgonzalezb',
  'johnnweke',
  'aaronjan98',
  'asbaden',
  'damonbogich',
  'informagician'
];
// followersArray.forEach(item =>{
//  axios.get( `https://api.github.com/users/${item}`)
//   .then(res => {
//     console.log(item);
//     cards.appendChild(CardMaker(res.data));
//   });
  
// })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function CardMaker(data) {
  const
    card = document.createElement('div'),
    profilepic = document.createElement('img'),
    cardinfo = document.createElement('div'),
    name = document.createElement('h3'),
    username = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    address = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p'),
    githubChart = document.createElement('img'),
    githubDiv = document.createElement('div'),
    closebtn = document.createElement('button'),
    openbtn = document.createElement('button'),
    btnbar = document.createElement('div');

    //add text content
    profilepic.src = data.avatar_url;
    name.textContent = data.name;
    username.textContent = `username: ${data.login}`;
    location.textContent = `Location: ${data.location}`;
    address.textContent = `GitHub: ${data.html_url}`;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
    bio.textContent = data.bio;
    githubChart.src = `http://ghchart.rshah.org/${data.login}`;
    githubChart.alt = `${name}'s GitHub chart`;
    openbtn.textContent = "11166U+2b9e";
    closebtn.textContent = "11164U+2b9c";


    //add classes
    card.classList.add("card");
    cardinfo.classList.add("card-info");
    name.classList.add("name");
    username.classList.add("username");

    //add styles 
    githubDiv.style.margin = "0px 40px"
    githubChart.style.width = "100%";
    githubChart.style.objectFit = "scale-down";

    //append the children
    card.appendChild(profilepic);
    card.appendChild(cardinfo);
    card.appendChild(githubDiv);
    cardinfo.appendChild(name);
    cardinfo.appendChild(username);
    cardinfo.appendChild(location);
    cardinfo.appendChild(profile);
    profile.appendChild(address);
    cardinfo.appendChild(followers);
    cardinfo.appendChild(following);
    githubDiv.appendChild(githubChart);
    
    return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get('https://api.github.com/users/viscountfam/followers')
  .then(response => {
    console.log(response);
    //for each object in the array
    response.data.forEach(item => {
      axios.get( `https://api.github.com/users/${item.login}`)
    .then(res => {
     console.log(item);
     cards.appendChild(CardMaker(res.data));
   });
    })
  })
  .catch (err => {
    console.log(err);
  })