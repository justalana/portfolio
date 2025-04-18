// handigNgt.js

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container");
  
    container.innerHTML = `
      <div class="bg-white rounded-2xl shadow p-6 col-span-full">
        <h2 class="text-2xl font-semibold mb-4 text-blue-950">About HandigNGT</h2>
        <p class="text-gray-800 mb-4">
          HandigNGT is a web app for students of the Hogeschool Rotterdam who follow the course
          <em>‘Nederlandse Gebarentaal bij Intake’</em>. It helps students practice lesson material and win prizes by completing quizzes.
        </p>
        <p class="text-gray-800 mb-4">
          I worked on the back-end team using Laravel. My tasks included filling the database with exercises, creating endpoints for the front-end to read/write data, and ensuring reliable data storage.
        </p>
      </div>
  
      <div class="bg-white rounded-2xl shadow p-6 col-span-full">
        <h3 class="text-xl font-semibold mb-2 text-blue-950">Features</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li>Interactive quizzes with rewards</li>
          <li>Practice Dutch Sign Language exercises</li>
          <li>Persistent user progress through Laravel-backed API</li>
        </ul>
      </div>
  
      <div class="bg-white rounded-2xl shadow p-6 col-span-full">
        <h3 class="text-xl font-semibold mb-2 text-blue-950">Technologies Used</h3>
        <p class="text-gray-700">Laravel</p>
      </div>
  
      <div class="bg-white rounded-2xl shadow p-6 col-span-full">
        <h3 class="text-xl font-semibold mb-2 text-blue-700">Images</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="./images/HandigNgtGebaren.png" alt="Image 1" class="rounded-xl shadow">
            <img src="./images/HandigNgtLessen.png" alt="Image 1" class="rounded-xl shadow">
            <img src="./images/HandigNgtOefening.png" alt="Image 1" class="rounded-xl shadow">
            <img src="./images/HandigNgtVingerspellen.png" alt="Image 1" class="rounded-xl shadow">
            <img src="./images/HandigNgtVoortgang.png" alt="Image 1" class="rounded-xl shadow">
        </div>
      </div>
  
      <div class="text-center col-span-full mt-6">
        <a
          href="https://github.com/ThijsKraaijenbos/Dovelingo-API"
          target="_blank"
          class="bg-blue-950 hover:bg-blue-800 text-white py-2 px-6 rounded-xl shadow"
        >
          View on GitHub
        </a>
      </div>
    `;
  });
  