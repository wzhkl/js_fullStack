## js继承的6中方式
  提供父类：  
  ```js
    function Person(name) {
      this.name = name;
      this.sum = function() {
        alert(this.name)
      }
    }
    Person.prototype.age = 10; // 给构造函数添加了原型属性
  ```
 ### 一、原型链继承  
 ```js
  function Per() {
    this.name = 'javascript';
  }
  Per.prototype = new Person();
  var per1 = new Per();
  console.log(per1.age); // 10
  // object instanceof constructor，instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
  // per1 继承了 Person 的属性
  console.log(per1 instanceof Person); // true
 ```
 重点：让新实例的原型等于父类的实例。

特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）

缺点：  

1、新实例无法向父类构造函数传参。

　　　　　　　2、继承单一。

　　　　　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）  

### 二、借用构造函数继承  
```js
  function Con() {
    Person.call(this, 'javascript');
    this.age = 100;
  }
  var con1 = new Con();
  console.log(con1.name); // 'javascript'
  console.log(con1.age); // 100
  console.log(con1 instanceof Person) // false
```
重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））

特点：  
1、只继承了父类构造函数的属性，没有继承父类原型的属性。

　　　2、解决了原型链继承缺点1、2、3。

　　　3、可以继承多个构造函数属性（call多个）。

　　　4、在子实例中可向父实例传参。

缺点：  
1、只能继承父类构造函数的属性。

　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）

　　　3、每个新实例都有父类构造函数的副本，臃肿。  

### 三、 组合继承（组合原型链继承和借用构造函数继承） (常用)  
```js
  function SubType(name) {
    Person.call(this, name) // 借用构造函数模式
  }
  SubType.prototype = new Person(); // 原型链继承
  var sub = new SubType('javascript');
  console.log(sub.name); //'javascript' 继承构造函数属性
  console.log(sub.age); // 10 继承父类原型属性 
```
重点：结合了两种模式的优点，传参和复用

特点：  
1、可以继承父类原型上的属性，可以传参，可复用。

2、每个新实例引入的构造函数属性是私有的。

缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
### 四、 原型式继承
```js
  // 先封装一个函数容器，用来输出对象和承载继承的原型
  function content(obj) {
    function F() {}
    F.prototype = obj; // 继承了传入的参数
    return new F(); // 返回函数对象
  }
  var sup = new Person(); // 拿到父类实例
  var sup1 = content(sup); 
  console.log(sup1.age); // 10 继承了父类函数的属性
```
重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。

特点：类似于复制一个对象，用函数来包装。

缺点：  
1、所有实例都会继承原型上的属性。

2、无法实现复用。（新实例属性都是后面添加的）
### 五、寄生式继承
```js
  function content(obj) {
    function F() {}
    F.prototype = obj; // 继承了传入的参数
    return new F(); // 返回函数对象
  }
  var sup = new Person();
  // 以上是原型式继承，给原型式继承再套个壳子继承参数
  function subObject(obj) {
    var sub = content(obj);
    sub.name = 'javascript';
    return sub;
  }
  var sup2 = subObject(sup);
  // 这个函数经过声明之后就成了可增添属性的对象
  console.log(typeof subObject); // function
  console.log(typeof sup2); // object
  console.log(sup2.name); // javascript 返回了个sub对象，继承了sub的属性
```
重点：就是给原型式继承外面套了个壳子。

优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。

缺点：没用到原型，无法复用。
### 六、 寄生组合式继承（常用）
寄生： 在函数内返回对象然后调用。  
组合：
  1. 函数的原型等于另一个实例。
  2. 在函数中用apply或者call引入另一个构造函数，可传参
```js
  // 寄生
  function content(obj) {
    function F() {}
    F.prototype = obj
    return new F()
  }
  // content就是F实例的另一种表示方法
  var con = content(Person.prototype)
  // con实例（F实例）的原型继承了父类函数的原型

  // 组合
  function Sub() {
    Person.call(this); // 继承了父类构造函数的属性，解决了组合式两次调用父类构造函数的缺点
  }
  Sub.prototype = con; // 继承了con实例
  con.constructor = Sub; // 一定要修复实例
  var sub1 = new Sub();
  // Sub的实例就继承了构造函数属性，父类实例，con的函数属性
```
重点：修复了组合继承的问题。