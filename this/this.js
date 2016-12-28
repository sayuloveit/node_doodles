function foo() {
  console.log(this.bar);
}

let bar = "bar1";
let o2 = {bar: "bar2", foo: foo};
let o3 = {bar: "bar3", foo: foo};

foo();
o2.foo();
o3.foo();

foo.call(o2);

console.log(this);
foo.call(this);
