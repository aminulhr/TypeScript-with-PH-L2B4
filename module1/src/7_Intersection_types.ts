//Intersection types. & = and ,

type frontend = {
  skills: string[];
  path1: "Frontend development";
};
type backend = {
  skills: string[];
  path2: "Backend development";
};

type fullStack = frontend & backend; // logical and

const learner: fullStack = {
  skills: ["html", "css", "javascript"],
  path1: "Frontend development",
  path2: "Backend development",
};
