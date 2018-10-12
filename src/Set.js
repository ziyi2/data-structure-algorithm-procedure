/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 08:43:07  
 * @Desc:   集合 
 * @Parm:    
 */

/*
集合是一种包含不同元素的数据结构，集合中的元素称为成员。

集合的特性：
1、集合中的成员是无序的。
2、集合不允许相同成员存在。


集合的类型：
1、空集：不包含任何成员的集合。
2、全集：包含一切可能成员的集合。
3、子集：A集合中所有的成员都属于B集合，则称A集合是B集合的子集。
4、并集：将两个成员的集合进行合并得到新集合。
5、交集：两个集合中共同存在的成员组成的新的集合。
6、补集：属于一个集合而不属于另一个集合的成员组成的集合。
*/


/** 
 *  ES6中集合的应用
 */

const s = new Set()
s.add('ziyi2')
s.add('ziyi3')
s.add('ziyi4')
console.log(s.add('ziyi4'))
console.log([...s])
console.log(s.size)

// 去除数组重复成员
console.log([...new Set([1,1,1,1,4,4,4,5,5,5,6,6,7,7,7,7])])


// new Set也可以接受类数组对象作为参数,例如Dom元素集

// 将Set结构转化成数组
console.log([...s])
console.log(Array.from(s))

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 08:59:38  
 * @Desc:   数组去重 
 * @Parm:    
 */
function dedupe(arr) {
  return Array.from(new Set(arr))
}

console.log(dedupe([1,1,1,1,2,2,2,2,3,3,3]))

// 遍历方法
// keys()
// values()  由于Set结构没有键名，只有键值，所以keys和values方法的行为完全一致
// entries() 返回键值对的遍历器
// forEach() 

for(let value of s.values()) {
  console.log(value)
}

// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
// 这意味着，可以省略values方法，直接用for...of循环遍历 Set。
for(let value of s) {
  console.log(value)
}


s.forEach((value, key) => console.log(`${key} : ${value}`))

// 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
console.log(...s)
console.log([...s])

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 09:08:19  
 * @Desc:   数组去重 
 * @Parm:    
 */
function bestDedupe(arr) {
  return [...new Set(arr)]
}

// 数组的map和filter方法也可以直接用于map
// 用Set可以很容易实现并集、交集和补集

let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
console.log(union)

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
console.log(intersect)

// 补集
let difference = new Set([...a].filter(x => !b.has(x)))
console.log(difference)


/** 
 *  ES5中集合的模拟实现
 */

function Es5Set() {
  this.data = []
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 09:14:16  
 * @Desc:   添加元素 
 * @Parm:    
 */

Es5Set.prototype.add = function(element) {
  if(this.data.indexOf(element) < 0) {
    this.data.push(element)
    return true
  }
  return false
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 09:16:39  
 * @Desc:   删除元素 
 * @Parm:    
 */
Es5Set.prototype.remove = function(element) {
  var pos = this.data.indexOf(element)
  if(pos > -1) {
    this.data.splice(pos, 1)
    return true
  }
  return false
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-12 09:17:48  
 * @Desc:   显示集合 
 * @Parm:    
 */
Es5Set.prototype.show = function () {
  console.log(this.data)
}


let set = new Es5Set()
set.add('ziyi2')
set.add('ziyi3')
set.add('ziyi4')
set.show()
set.remove('ziyi3')
set.show()

// 除此之外也可以手动实现has、union（并集）、intersect（交集）、subset（子集）、size、difference（补集）等方法。
