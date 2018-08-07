// religion/spirituality values. referenced when generating a person.
export const spirituality = {
  adherence: [
    {
      range: [1, 25],
      name: "Non-believer"
    },
    {
      range: [26, 50],
      name: "Agnostic"
    },
    {
      range: [51, 75],
      name: "Casual"
    },
    {
      range: [76, 100],
      name: "Orthodox"
    }
  ],
  tolerance: [
    {
      range: [1, 33],
      name: "Inclusive"
    },
    {
      range: [34, 66],
      name: "Tolerant"
    },
    {
      range: [67, 100],
      name: "Intolerant"
    }
  ],
  demeanor: {
    expression: [
      {
        range: [1, 33],
        name: "None"
      },
      {
        range: [34, 66],
        name: "Occasional"
      },
      {
        range: [67, 100],
        name: "Constant"
      }
    ],
    conversion: [
      {
        range: [1, 33],
        name: "Never"
      },
      {
        range: [34, 66],
        name: "Casual"
      },
      {
        range: [67, 100],
        name: "Aggressive"
      }
    ],
    attitude: [
      {
        range: [1, 20],
        name: "Irreverent"
      },
      {
        range: [21, 40],
        name: "Fearful"
      },
      {
        range: [41, 60],
        name: "Judgemental"
      },
      {
        range: [61, 80],
        name: "Humble"
      },
      {
        range: [81, 100],
        name: "Ecstatic"
      }
    ]
  },
  association: [
    {
      range: [1 - 20],
      name: "Church",
      description: "Generally an established, hierarchical organization"
    },
    {
      range: [21 - 40],
      name: "Cult",
      description:
        "A large or small group usually attached to a single charismatic leader"
    },
    {
      range: [41 - 60],
      name: "Fellowship",
      description:
        "Small group(s) that lack(s) formal organization and a charismatic leader"
    },
    {
      range: [61 - 80],
      name: "Solitary",
      description:
        "When a character either has unique beliefs or chooses not to affiliate religiously with others"
    },
    {
      range: [81 - 100],
      name: "Indigenous",
      description:
        "Religious traditions within a cultural group, such as a family or village"
    }
  ],
  role: [
    {
      range: [1, 7],
      name: "Abbot/Abbess",
      description: "Leader of a monastery or convent."
    },
    {
      range: [8, 13],
      name: "Cult Leader",
      description:
        "Usually a charismatic head of a small group of highly devoted followers"
    },
    {
      range: [14, 20],
      name: "Disciple",
      description: "Dedicated follower of a religious teacher or leader"
    },
    { range: [21, 26], name: "Guru", description: "Spiritual teacher" },
    {
      range: [27, 33],
      name: "Hermit",
      description: "One who follows a solitary and isolated spiritual path"
    },
    {
      range: [34, 40],
      name: "Inquisitor",
      description:
        "An official tasked with finding and “correcting” people who have broken religious rules"
    },
    { range: [41, 46], name: "Jihadist", description: "A religious warrior" },
    {
      range: [47, 53],
      name: "Missionary",
      description:
        "Dedicated to converting others, usually in distant geographic areas"
    },
    {
      range: [54, 59],
      name: "Monk/Nun",
      description: "Belongs to a monastery or convent"
    },
    {
      range: [60, 66],
      name: "Patriarch/Matriarch",
      description: "Leader of an organized religion, such as a pope"
    },
    {
      range: [67, 73],
      name: "Pilgrim",
      description: "One traveling to a holy site or landmark"
    },
    {
      range: [74, 79],
      name: "Priest/Priestess",
      description:
        "Someone authorized to administer sacraments as an ordained member of a church"
    },
    {
      range: [80, 86],
      name: "Prophet",
      description:
        "One inspired to utter revelations or predictions, often in service to a specific deity"
    },
    {
      range: [87, 93],
      name: "Sacred Courtesan",
      description:
        "Has sex, often with strangers, in service to a religion and for a symbolic price"
    },
    {
      range: [94, 100],
      name: "Shaman",
      description:
        "A medium between the material and spirit world who practices healing and divination"
    }
  ]
};

module.exports = spirituality;
