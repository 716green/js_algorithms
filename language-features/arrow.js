function fn() {
  console.log({ this: this });
}

fn();

const fn2 = () => console.log({ this: this });

fn2();
