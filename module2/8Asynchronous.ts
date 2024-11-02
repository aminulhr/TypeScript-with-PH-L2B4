{
  //promise
  type ToDo = {
    id: number;
    userID: number;
    title: string;
    completed: boolean;
  };
  const getToDO = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
    //console.log(data);
  };
  getToDO();
  type something = { something: string };
  //simulate
  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const data: something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("fail to load data");
      }
    });
  };

  //calling crated new Promise function
  const showData = async (): Promise<something> => {
    const data: something = await createPromise();
    console.log(data);
    return data;
  };
  showData();
}
