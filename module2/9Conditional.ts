{
  //conditional type
  type a1 = number;
  type b1 = string;
  type x = a1 extends null ? true : false; //Conditional type
  // its result is false, because number can't extends null, if a1 value is null , its result will be true
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // its result any type, if b1 value will be undefined , its will be undefined type
  type sheikh = {
    bike: string;
    car: string;
    tiger: string;
    dear: string;
  };
  type checkVehicle<T> = T extends keyof sheikh ? true : false;
  type hasShip = checkVehicle<"ship">; // result false
  type hasTiger = checkVehicle<"tiger">; //result false
}
