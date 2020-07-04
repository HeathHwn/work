const MyPromise = require('./promise');

let promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('成功');
  // }, 5000);
  // resolve('成功');
  reject('失败');
  // JSON.parse('');
});

let p1 = () => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('失败：other');
    }, 5000);
    // resolve('成功：other');
    // reject('失败：other');
  });
};
let p2 = () => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功1');
    }, 5000);
    // reject('失败：other');
  });
};

// MyPromise.all([1, 2, p1(), p2(), 3]).then((value) => console.log(value));
// MyPromise.resolve(p2()).then((value) => console.log(value));
p1()
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
  .finally(() => {
    console.log('finally');
  });
// my-promise
//   .then(
//     (res) => {
//       console.log(res, '1');
//       JSON.parse('');
//     },
//     (e) => {
//       console.log(e);
//       JSON.parse('');
//       return '2';
//     },
//   )
//   .then(
//     (res) => {
//       console.log(res, '2');
//     },
//     (e) => {
//       console.log(e);
//     },
//   );
