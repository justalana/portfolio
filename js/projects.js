const projects = [
    {
        title: "HandigNGT",
        description: "A webapp to help students taking Dutch signlanguage practice and motivate them by offering trophies",
        image: "images/HandigNgt.png",
        languages: "PHP and Blade",
    },
    {
        title: "Open Hiring",
        description: "An alternative to applying for jobs, decide for yourself wether you are the person for the job and apply. No need to prepare for an interview anymore",
        image: "images/OpenHiring.png",
        languages: "PHP and Blade",
    },
    {
        title: "RESTful Webservice",
        description: "A school project in making a RESTful webservice using my own database.",
        image: "images/RestfulWebservice.png",
        languages: "Javascript",
    },
    {
        title: "Vitalis Systems",
        description: "A thought excersize about the future of medical care resulted in a website where you could apply for medical 'trials' to get rid of your medical debt",
        image: "images/VitalisSystems.png",
        languages: "PHP and Javascript",
    },
    {
        title: "PRG03",
        description: "A blog page about books using an API for the data, with full CRUD functionailties",
        image: "images/BookMagazine.png",
        languages: "Javascript and PHP",
    },
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-out hover:shadow-xl";
  
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-75 object-cover">
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-2">${project.title}</h2>
        <p class="mb-4 text-gray-600">${project.description}</p>
        <p class="mb-4 text-gray-600">${project.languages}</p>
      </div>
    `;
  
    container.appendChild(card);
  });