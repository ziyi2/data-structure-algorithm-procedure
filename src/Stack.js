/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 09:08:27  
 * @Desc:   栈 
 * @Parm:    
 */

function Stack() {
  this.top = 0
  this.stack = []
}

Stack.prototype.push = function(element) {
  this.stack[this.top++] = element
}

Stack.prototype.pop = function() {
  if(this.top) {
    let stack = this.stack[--this.top]
    this.stack.splice(this.top, 1)
    return stack
  }
}

Stack.prototype.peek = function() {
  return this.stack[this.top - 1]
}

Stack.prototype.clear = function() {
  if(this.top) this.stack.splice(0, this.top)
  this.top = 0
}

Stack.prototype.length = function() {
  return this.top
}


let stack = new Stack()
stack.push({name: 'ziyi2'})
console.log(stack.stack)
console.log(stack.top)

stack.pop()
console.log(stack.stack)
console.log(stack.top)

stack.pop()
console.log(stack.stack)
console.log(stack.top)

stack.push({name: 'ziyi2'})
stack.push({name: 'ziyi3'})
console.log(stack.peek())

stack.clear()
console.log(stack.stack)
console.log(stack.top)


stack.push({name: 'ziyi2'})
stack.push({name: 'ziyi3'})
console.log(stack.length())



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 08:40:35  
 * @Desc:   进制转化(只适合2至9进制)
 * @Parm:   num  -> 被转化的数字
 *          base -> 进制数 
 */
function mulBase(num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num / base)
  } while(num)

  let converted = ''

  while(s.length()) {
    converted += s.pop()
  }

  return converted
}

// 将10转化为2进制
console.log(mulBase(10, 2))
// 将10转化为8进制
console.log(mulBase(10, 8))


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 09:00:48  
 * @Desc:   递归阶乘 
 * @Parm:    
 */

 function factorial(n) {
   return n ? n* factorial(n-1) : 1
 }
 console.log(factorial(4))


 // 使用栈模拟
 function stackFactorial(n) {
   let s = new Stack()
   let num = n --
   while(n) {
     s.push(n--)
   }
   while(s.length()) {
     num *= s.pop()
   }
   return num
 }
 console.log(stackFactorial(4))
