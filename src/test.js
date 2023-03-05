class MyHttp {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  createServer() {
    console.log("this is createServer method");
    return this;
  }

  listen() {
    console.log("this is listen for :8080");
    return this;
  }
}

const customHttp = new MyHttp("someOne", 99);
