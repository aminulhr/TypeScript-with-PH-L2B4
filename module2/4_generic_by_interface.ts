{
  //generic with interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }
  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    disply: string;
  }> = {
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
  const richDeveloper: Developer<{
    brand: string;
    model: string;
    palsRate: boolean;
    sleepTrack: boolean;
  }> = {
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
  };
}
