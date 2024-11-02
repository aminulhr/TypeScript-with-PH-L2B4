{
  //
  //type of unknown
  const getSpeedmeterparsecond = (speed: unknown) => {
    if (typeof speed === "number") {
      const convertedSpeed = (speed * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^1`);
    } else if (typeof speed === "string") {
      const [value, unite] = speed.split(" "); // arrray dedtructaring
      const convertedSpeed = (parseFloat(value) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^1`);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedmeterparsecond(`1000 kmh^-1`);
  getSpeedmeterparsecond(435);
  getSpeedmeterparsecond(null);
  getSpeedmeterparsecond(undefined);
  getSpeedmeterparsecond(true);

  //
}
