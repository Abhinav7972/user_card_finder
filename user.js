const Users = [
    {
        name: 'Alpha pandey',
        pic: 'https://i.pinimg.com/736x/10/33/ee/1033ee522dc3e6106f5c855e064daeee.jpg',
        bio: 'i am a cool guy '
    },

    {
        name: 'miss sabrina',
        pic: 'https://i.pinimg.com/736x/18/42/1a/18421a37923619ac2af422043357237d.jpg',
        bio: 'preety women'
    },

     {
        name: 'palak pandey',
        pic: 'https://i.pinimg.com/736x/b5/b9/3c/b5b93c0a894f5f65866406e3fd9b373b.jpg',
        bio: 'Desi girl'
    },
     
      {
        name: 'hamza ali mazari',
        pic: 'https://i.pinimg.com/736x/f7/c1/27/f7c1272f453f1ae191f4d6b61ebeee7c.jpg',
        bio: 'lyari king'
    },
      
       
      {
        name: 'Arjun singh',
        pic: 'https://i.pinimg.com/736x/67/e3/f7/67e3f74f6e3825923f0360ad71613583.jpg',
        bio: 'Desi guy'
    },
      
       {
        name: 'Tanya',
        pic: 'https://i.pinimg.com/736x/77/33/33/773333a3b545f53abde404265047b6aa.jpg',
        bio: 'Boss Lady'
    },
       

       {
        name: 'Yalina',
        pic: 'https://i.pinimg.com/736x/6d/fc/de/6dfcde554b4ab61d89d1cac6107664ad.jpg',
        bio: 'Hamzas wife'
      }
]


//vision

//showing user
//filter on input
//show filterd users
        const card_container = document.querySelector(".card-container");


function showUsers(arr)
{
    arr.forEach(function (user) {
    const card = document.createElement("div");
card.classList.add("card");

// Image
        const img = document.createElement("img");
        const avatarSrc = user.pic; 
img.src = avatarSrc;
img.alt = user.name;
img.classList.add("bg-img");

// Blurred Layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`; 
        blurredLayer.classList.add("blurred-layer");

// Content
const content = document.createElement("div");
content.classList.add("content");

// Heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Paragraph
const paragraph = document.createElement("p");
paragraph.textContent = user.bio;

// Append elements
content.appendChild(heading);
content.appendChild(paragraph);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Add to body or container
card_container.appendChild(card);
    })
}

 

showUsers(Users)


let input = document.querySelector("input")

input.addEventListener("input", function () {
    const searchValue = input.value.toLowerCase();
    const newUsers = Users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchValue);
    });

    card_container.innerHTML = "";

    if (newUsers.length === 0) {
        card_container.textContent = 'no user found';
    } else {
        showUsers(newUsers);
    }
});