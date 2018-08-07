import Person from "./people/person";

// let lastUpdate = new Date().getTime();
const personNameField = document.getElementById("person_name");
const personalityTable = document.getElementById("personality_table");
const personTable = document.getElementById("person_table");
const religionTable = document.getElementById("religion_table");
const hobbyTable = document.getElementById("hobby_table");
const quirkTable = document.getElementById("quirk_table");

const hidden = document.querySelectorAll(".hidden");

export function updatePersonDetails(person) {
  personNameField.innerText = `${person.name} - ${person.profession}`;
  const personTableHTML = [
    `
    <tr>
      <td class="data__text">${person.personality.type.description}</td>
    </tr>
    <tr>
      <td class="data__text">Driven by the need ${
        person.personality.motivator.description
      }</td>
    </tr>
    <tr>
      <td class="data__text">Loves to talk about ${person.personality.conversationTopics.join(
        ""
      )}</td>
    </tr>
  `
  ];
  if (person.personality.disorder) {
    personTableHTML.push(`
      <tr>
        <td class="data__text">Suffers from ${
          person.personality.disorder.name
        }. ${person.personality.disorder.description}</td>
      </tr>
    `);
  }

  personTable.innerHTML = personTableHTML.join("");

  const personalityHTML = Object.keys(person.personality)
    .map(trait => {
      if (
        trait !== "spirituality" &&
        trait !== "quirks" &&
        trait !== "hobbies" &&
        trait !== "disorder" &&
        trait !== "conversationTopics"
      ) {
        return `
          <tr>
            <td class="data__label">${trait.charAt(0).toUpperCase() +
              trait.substring(1).toLowerCase()}</td>
            <td class="data__value">${person.personality[trait].name}</td>
          </tr>
        `;
      }
    })
    .join("");

  const religionHTML = Object.keys(person.personality.spirituality)
    .map(trait => {
      if (trait !== "demeanor") {
        return `
          <tr>
            <td class="data__label">${trait.charAt(0).toUpperCase() +
              trait.substring(1).toLowerCase()}</td>
            <td class="data__value">${
              person.personality.spirituality[trait].name
            }</td>
          </tr>
        `;
      } else {
        return `
        <tr>
          <td class="data__label">Expression</td>
          <td class="data__value">${
            person.personality.spirituality[trait].expression.name
          }</td>
        </tr>
        <tr>
          <td class="data__label">Conversion</td>
          <td class="data__value">${
            person.personality.spirituality[trait].conversion.name
          }</td>
        </tr>
        <tr>
          <td class="data__label">Attitude</td>
          <td class="data__value">${
            person.personality.spirituality[trait].attitude.name
          }</td>
        </tr>
        `;
      }
    })
    .join("");

  const hobbyHTML = person.personality.hobbies
    .map(hobby => {
      return `
      <tr class="data__single">
        <td>${hobby.name}</td>
      </tr>
    `;
    })
    .join("");

  const quirkHTML = person.personality.quirks
    .map(quirk => {
      return `
      <tr class="data__single">
        <td>${quirk.name}</td>
      </tr>
    `;
    })
    .join("");

  religionTable.innerHTML = religionHTML;
  hobbyTable.innerHTML = hobbyHTML;
  quirkTable.innerHTML = quirkHTML;
  personalityTable.innerHTML = personalityHTML;
}

export function newPerson() {
  const newPerson = new Person();
  hidden.forEach(hidden => hidden.classList.remove("hidden"));
  updatePersonDetails(newPerson);
}
