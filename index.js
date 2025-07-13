const form = document.getElementById("studentform");
const table = document.getElementById("studenttableresult");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;

  const row = document.createElement("tr");
  row.innerHTML = `
        <td class="border px-4 py-2 text-center">${name}</td>
        <td class="border px-4 py-2 text-center">${age}</td>
        <td class="border px-4 py-2 text-center">${gender}</td>
        <td class="border px-4 py-2 text-center">${course}</td>
        <td class="border px-4 py-2 text-center">${email}</td>
        <td class="text-center"><button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 delete-btn">Delete</button></td>`;

  table.appendChild(row);
  form.reset();
});

table.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("tr").remove();
  }
});
