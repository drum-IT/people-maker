// traits. values are randomly assigned when generating a person
const traits = {
  outlook: [
    {
      name: "Optimistic",
      description: "Idealistic, confident, trusting, hopeful, upbeat"
    },
    {
      name: "Pessimistic",
      description: "Cynical, bleak, distrustful, foreboding, resigned"
    }
  ],
  integrity: [
    {
      name: "Conscientious",
      description: "Industrious, honest, responsible, meticulous, pragmatic"
    },
    {
      name: "Unscrupulous",
      description:
        "Lazy, deceitful, unreliable, manipulative, slipshod, impractical"
    }
  ],
  impulsiveness: [
    {
      name: "Controlled",
      description: "Deliberate, focused, steady, thoughtful"
    },
    {
      name: "Spontaneous",
      description: "Capricious, flighty, hyperactive, rash"
    }
  ],
  boldness: [
    {
      name: "Intrepid",
      description: "Daring, reckless, valorous, dauntless, audacious, confident"
    },
    {
      name: "Cautious",
      description: "Timid, paranoid, vigilant, nervous, tentative"
    }
  ],
  agreeableness: [
    {
      name: "Agreeable",
      description:
        "Warm, empathic, tolerant, forgiving, open-minded, adaptable, altruistic"
    },
    {
      name: "Disagreeable",
      description:
        "Cold, rigid, tense, intractable, narrow-minded, cantankerous, stingy"
    }
  ],
  interactivity: [
    {
      name: "Engaging",
      description: "Talkative, candid, entertaining, touchy"
    },
    {
      name: "Reserved",
      description: "Shy, loner, taciturn, evasive, cryptic"
    }
  ],
  conformity: [
    {
      name: "Conventional",
      description: "Orthodox, formal, down-to-earth, mainstream, traditional"
    },
    {
      name: "Heterodox",
      description: "Rebellious, arty, shocking, freethinking, exotic"
    }
  ]
};

module.exports = traits;
