{
  //generic with interface
  interface Developer<T, X = null> {
    //null use as a defalt value, if user has mo bike, result will be null
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type casioWatch = {
    brand: string;
    model: string;
    disply: string;
  };
  const poorDeveloper: Developer<casioWatch> = {
    name: "Rana",
    computer: {
      brand: "HP",
      model: "Elitebook",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "casic",
      model: "C100",
      disply: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    palsRate: boolean;
    sleepTrack: boolean;
  }
  interface royelbike {
    model: string;
    CC: string;
  }
  const richDeveloper: Developer<AppleWatch, royelbike> = {
    name: "rakib",
    computer: {
      brand: "makbook",
      model: "pro 2",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "apple",
      model: "m1",
      palsRate: true,
      sleepTrack: true,
    },
    bike: {
      model: "Royel Enfild",
      CC: "360cc",
    },
  };
}
