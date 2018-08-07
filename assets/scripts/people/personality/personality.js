import disorders from "./disorders";
import emotions from "./emotions";
import hobbies from "./hobbies";
import humors from "./humor";
import moods from "./moods";
import motivators from "./motivators";
import quirks from "./quirks";
import spirituality from "./spirituality";
import traits from "./traits";
import types from "./types";

import util from "../../util/util";

class Personality {
  constructor() {
    this.motivator = motivators[Math.floor(Math.random() * motivators.length)];
    this.emotion = emotions[Math.floor(Math.random() * emotions.length)];
    this.moodiness = Personality.getMood(this.emotion);
    this.humor = humors[Math.floor(Math.random() * humors.length)];
    this.outlook =
      traits.outlook[Math.floor(Math.random() * traits.outlook.length)];
    this.integrity =
      traits.integrity[Math.floor(Math.random() * traits.integrity.length)];
    this.impulsiveness =
      traits.impulsiveness[
        Math.floor(Math.random() * traits.impulsiveness.length)
      ];
    this.boldness =
      traits.boldness[Math.floor(Math.random() * traits.boldness.length)];
    this.agreeableness =
      traits.agreeableness[
        Math.floor(Math.random() * traits.agreeableness.length)
      ];
    this.interactivity =
      traits.interactivity[
        Math.floor(Math.random() * traits.interactivity.length)
      ];
    this.conformity =
      traits.conformity[Math.floor(Math.random() * traits.conformity.length)];
    this.spirituality = {
      adherence:
        spirituality.adherence[
          Math.floor(Math.random() * spirituality.adherence.length)
        ],
      tolerance:
        spirituality.tolerance[
          Math.floor(Math.random() * spirituality.tolerance.length)
        ],
      demeanor: {
        expression:
          spirituality.demeanor.expression[
            Math.floor(Math.random() * spirituality.demeanor.expression.length)
          ],
        conversion:
          spirituality.demeanor.conversion[
            Math.floor(Math.random() * spirituality.demeanor.conversion.length)
          ],
        attitude:
          spirituality.demeanor.attitude[
            Math.floor(Math.random() * spirituality.demeanor.attitude.length)
          ]
      },
      association:
        spirituality.association[
          Math.floor(Math.random() * spirituality.association.length)
        ],
      role:
        spirituality.role[Math.floor(Math.random() * spirituality.role.length)]
    };
    this.quirks = Personality.getQuirks();
    this.hobbies = Personality.getHobbies();
    this.disorder = Personality.getDisorders();
    this.type = types[Math.floor(Math.random() * types.length)];
  }
}

// MOOD
// get or update mood based on emotion
Personality.getMood = emotion => {
  const mood = moods.find(
    mood =>
      emotion.range[0] >= mood.range[0] && emotion.range[0] <= mood.range[1]
  );
  return mood;
};

// QUIRKS
// get some random quirks
Personality.getQuirks = () => {
  const numberOfQuirks = util.getRandomInt([1, 5]);
  const quirkIndices = [];
  while (quirkIndices.length < numberOfQuirks) {
    const index = util.getRandomInt([0, quirks.length - 1]);
    quirkIndices.indexOf(index) === -1 ? quirkIndices.push(index) : null;
  }
  const quirkList = quirkIndices.map(index => quirks[index]);
  return quirkList;
};

// HOBBIES
// get some random hobbies
Personality.getHobbies = () => {
  const numberOfHobbies = util.getRandomInt([1, 5]);
  const hobbyIndices = [];
  while (hobbyIndices.length < numberOfHobbies) {
    const index = util.getRandomInt([0, hobbies.length - 1]);
    hobbyIndices.indexOf(index) === -1 ? hobbyIndices.push(index) : null;
  }
  const hobbyList = hobbyIndices.map(index => hobbies[index]);
  return hobbyList;
};

// HOBBIES
// get some random hobbies
Personality.getHobbies = () => {
  const numberOfHobbies = util.getRandomInt([1, 5]);
  const hobbyIndices = [];
  while (hobbyIndices.length < numberOfHobbies) {
    const index = util.getRandomInt([0, hobbies.length - 1]);
    hobbyIndices.indexOf(index) === -1 ? hobbyIndices.push(index) : null;
  }
  const hobbyList = hobbyIndices.map(index => hobbies[index]);
  return hobbyList;
};

// // DISORDERS
// // get some random disorders
Personality.getDisorders = () => {
  const rando = util.getRandomInt([1, 5]);
  if (rando === 5) {
    const disorder = disorders[Math.floor(Math.random() * disorders.length)];
    return disorder;
  }
};

module.exports = Personality;
