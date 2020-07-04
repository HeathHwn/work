# 函数式编程

## 什么是函数式编程

函数式编程(Functional Programming, FP)，FP 是编程范式之一，我们常听说的编程范式还有面向过程编程、面向对象编程。

## 面向对象编程的思维方式

把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承和多态来演示事物事件的联系

## 函数式编程的思维方式

把现实世界的事物和事物之间的联系抽象到程序世界（对运算过程进行抽象）

### 程序的本质

> 根据输入通过某种运算获得相应的输出，程序开发过程中会涉及很多有输入和输出的函数
> x -> f(联系、映射) -> y，y=f(x)

> 函数式编程中的函数指的不是程序中的函数(方法)，而是数学中的函数即映射关系，例如：y
> = sin(x)，x 和 y 的关系

> 相同的输入始终要得到相同的输出(纯函数)

> 函数式编程用来描述数据(函数)之间的映射

## 目录

- [函数是一等公民(First-class Function)](first-class-function/README.md)

- [高阶函数(Higher-order function)](higher-order-function/README.md)

- [闭包(Closure)](closure/README.md)

- [纯函数(Pure Functions)](pure-functions/README.md)

- [柯里化 (Haskell Brooks Curry)](curry/README.md)

- [函数组合(compose)](compose/README.md)

- [Point Free](point-free/README.md)

- [函子(Functor)](functor/README.md)

- [MayBe 函子](maybe/README.md)

- [Either 函子](either/README.md)

- [IO 函子](io/README.md)

- [Task 函子](task/README.md)

- [Monad 函子](monad/README.md)

- [Promise](promise/README.md)

## 附录

- [函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html)

- [函数式编程入门](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

- [Pointfree 编程风格指南](http://www.ruanyifeng.com/blog/2017/03/pointfree.html)

- [图解 Monad](http://www.ruanyifeng.com/blog/2015/07/monad.html)

- [Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)
