
let currentpage = 1



async function fetchData(pageNumber) {
  const limit = 10
  const offset = (pageNumber - 1) * limit;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`error fetching data:`, error);
  }
}


showCharacters(currentpage);

async function showCharacters(page) {
  const data = await fetchData(page);
  RenderData(data);
}

function RenderData(data) {
  const container = document.getElementById("container1");
  container.innerHTML = ""
  data.results.forEach((character) => {
    //console.log(element.name);
    const characterElement = document.createElement("div");
    //  repeat process
    const nameElement = document.createElement("h2");
    nameElement.className = "text-2xl font-bold";
    nameElement.innerHTML = character.name;
    characterElement.appendChild(nameElement);
    // repeat process
    container.appendChild(characterElement);
  });
}
// write logic to render data from api

 
const itemsperpage = 10;
// const pagecount = Math.ceil(items.length) / itemesperpage;

function displayitems(page) {
  const startindex = (page - 1) * itemsperpage;
  const endindex = startindex + itemsperpage;

  items.forEach((item, index) => {
    if (index >= startindex && index < endindex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function updatepaginationcontrols() {}

function handlepageclick(newpage) {
  currentpage = newpage;
  displayitems(currentpage);
  updatepaginationcontrols();
}




// const itemesperpage = 10;
// const pagecount = Math.ceil(items.length) / itemsperpage;

// function fetchposts(page) {
//   const startIndex = (page - 1) * itemesperpage;
//   const endIndex = startIndex + itemesperpage;
 

// }

function nextbutton() {
  

  currentpage++;
  showCharacters(currentpage)
}

function previousbutton() {
  showCharacters(currentpage)
  currentpage--;
  
}



//image slideshow

// const slides = document.querySelectorAll('.slides');
// const prevbtn = document.getElementById('prevbtn');
// const nextbtn = document.getElementById('nextbtn');

// let currentindex = 0;

// function showslide(index) {
//   slides.forEach((slide, i) => {
//     if (i === index) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   });
// }

// function nextslide() {
//   currentindex = (currentindex + 1) % slides.length
//   showslide(currentindex);
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   showSlide(currentIndex);
// }

// showslide(currentindex);



// nextbtn.addEventListener('click', nextslide);
// prevbtn.addEventListener('click', prevslide);















