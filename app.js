import { weeks } from "./words.js";

const weekList = document.querySelector("#week-list");

weeks.forEach(({ title, words }) => {
  const section = document.createElement("section");

  section.innerHTML = `
    <h3>${title}</h3>
    <ul>
      ${words
        .map(
          ({ question, answer }) => `
            <li>
              ${question} :
              <label>
                <input class="answer-toggle" type="checkbox">
                <span class="answer">${answer}</span>
              </label>
            </li>
          `,
        )
        .join("")}
    </ul>
  `;

  weekList.appendChild(section);
});