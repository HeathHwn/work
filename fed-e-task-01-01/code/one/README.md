# 第一题

## 题目

![note](https://github.com/HeathHwn/work/tree/master/fed-e-task-01-01/code/one/topic.jpg)

## 解答

```javascript
Promise.resolve('hello')
  .then((value) => {
    return value + 'logou';
  })
  .then((value) => {
    return value + 'I ♥ U';
  })
  .then((value) => console.log(value));
```
