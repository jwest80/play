const container = document.querySelector('#container');

function createGrid(r,c) {
    for(let x = 0; x < r; x++) {
        for(let y = 0; y < c; y++) {
            let btn = document.createElement("div");
            btn.classList.add('child');
            container.appendChild(btn);
        }
        let br = document.createElement('br');
        container.appendChild(br);
    }
}

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  if (e.target.className == 'child') {
    e.target.style.backgroundColor = rndCol;
    console.log(e);      
  }

}

async function showAvatar() {
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/jwest80`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    container.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  
    img.remove();
  
    return githubUser;
}

function init() {
    createGrid(100,100);
    container.addEventListener('click', (event) => console.log(event));
    container.addEventListener('pointermove', (event) => {bgChange(event)});
    document.addEventListener('click', () => {showAvatar()});
}

init();


