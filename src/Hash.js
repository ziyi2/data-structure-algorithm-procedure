/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-10 08:47:12  
 * @Desc:   散列 
 */

/*
散列是一种常用的数据存储技术，散列后的数据可以快速的插入和使用。散列使用的数据结构叫做散列表，在散列上插入、删除和取用数据都非常快。
但是散列的查找操作效率低下（例如查找一组数据中的最大值和最小值，此时采用二叉查找树是一个非常好的选择）。

散列基于数组设计，数组的长度需要预先设定，如果需要可以随时增加。
使用散列表存储数据时，需要通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列表的长度，因此散列是一种随机存储的数据结构。

理想情况下散列函数会将每一个键值映射为一个唯一的数组索引，但是键的数量无限，而数组的长度有限，
一个理想的目标是让散列函数尽量将键均匀的映射到数组中。

即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为碰撞，当碰撞发生时，可以通过特殊的算法解决碰撞问题。
*/


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-10 09:13:16  
 * @Desc:   散列表 
 * @Parm:    
 */
function HashTable() {
  // 散列基于数组设计，数组的长度需要预先设定
  // 数组的长度应该是一个质数
  this.table = new Array(137)
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-10 09:15:34  
 * @Desc:   简单的可能产生碰撞的散列函数(除留余数法)
 * @Parm:    
 */
HashTable.prototype.simpleHash = function (data) {
  var total = 0
  // 如果键是整型，则最简单的散列函数就是以数组的长度对键取余
  // 但是如果数组的长度是10，键值很容易是10的整数倍，那么取余的结果容易导致一致产生碰撞
  // 因此数组的长度最好是质数，取余的结果不容易产生碰撞
  // 如果键是随机的整数，则散列函数应该更为均匀的分布这些键，这种散列方式称为除留余数法
  // 在JavaScript中，键很容易是字符串类型，可以通过将字符串中的每一个字符的ASCII码相加的和除以数组的长度得到的余数作为散列值
  for(var i=0; i<data.length; i++) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 07:54:13  
 * @Desc:   存数据到散列表 
 * @Parm:    
 */
HashTable.prototype.put = function(data) {
  var pos = this.simpleHash(data)
  this.table[pos] = data
}
 

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 07:55:22  
 * @Desc:   显示散列表数据 
 * @Parm:    
 */
HashTable.prototype.showDistro = function() {
  var n = 0
  for(var i=0; i<this.table.length; i++) {
    if(!this.table[i]) continue
    console.log(`${i} : ${this.table[i]}`) 
  }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

var hTable = new HashTable()

for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}

// 需要注意Raymond和Clayton的散列值冲突，因此Raymond的存储被Clayton覆盖
// 导致Raymond存储失败
hTable.showDistro()


/*
这里使用霍纳算法对散列函数进行优化，但是好像并没有解决散列值碰撞问题。
*/

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:02:52  
 * @Desc:   霍纳算法散列函数 
 * @Parm:    
 */
HashTable.prototype.betterHash = function(data) {
  const H = 37
  var total = 0

  for (var i = 0; i < data.length; ++i) {
    total += H * total + data.charCodeAt(i)
  }

  total = total % this.table.length

  if (total < 0) {
    total += this.table.length-1
  }

  return parseInt(total)
}


HashTable.prototype.betterPut = function(data) {
  var pos = this.betterHash(data)
  this.table[pos] = data
}


var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

var hBetterTable = new HashTable()

for (var i = 0; i < someNames.length; ++i) {
  hBetterTable.betterPut(someNames[i]);
}

// 这种算法好像还是会有冲突的键
hBetterTable.showDistro()


/*
之前讲述都是如何将数据存储到散列表，但是存储的数据最终都是为了可以使用，只对存储的数据进行散列化并存储是无法拿到数据的
这里使用键值对存储，将键进行散列化，然后通过键的散列值存储数据，如果要获取同样通过键的散列化获取对应的值
*/


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-10 08:47:12  
 * @Desc:   散列键值对存储
 */
HashTable.prototype.withKeyPut = function(key, data) {
  this.table[this.betterHash(key)] = data
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:24:12  
 * @Desc:   通过键获取值 
 * @Parm:    
 */
HashTable.prototype.withKeyGet = function(key) {
  var pos = this.betterHash(key)
  return this.table[pos]
}

var hKeyBetterTable = new HashTable()
hKeyBetterTable.withKeyPut('ziyi2', 'ziyi2')
hKeyBetterTable.withKeyPut('ziyi3', 'ziyi3')
hKeyBetterTable.showDistro()
console.log(hKeyBetterTable.withKeyGet('ziyi3'))



/*
解决碰撞处理的算法

- 开链法
尽管键值发生了碰撞，但是如果键值所在的数据不是一个数组单元（如果是数组单元那么碰撞的键值会将存储的数据进行覆盖），
而是又一个数组，那么数据将不会被覆盖，只是在这个散列值键对应的数组中存储的位置不一样而已，其实就类似于整个散列表是一个二维数组表。

*/

function HashChainTable() {
  this.table = new Array(137)

  // 创建了一张二维数组表
  for(var i=0; i<this.table.length; i++) {
    this.table[i] = []
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:41:46  
 * @Desc:   散列算法 
 * @Parm:    
 */
HashChainTable.prototype.betterHash = function(data) {
  const H = 37
  var total = 0

  for (var i = 0; i < data.length; ++i) {
    total += H * total + data.charCodeAt(i)
  }

  total = total % this.table.length

  if (total < 0) {
    total += this.table.length-1
  }

  return parseInt(total)
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:39:25  
 * @Desc:   显示散列表数据 
 * @Parm:    
 */
HashChainTable.prototype.showDistro = function() {
  var n = 0
  for(var i=0; i<this.table.length; i++) {
    if(!this.table[i][0]) continue
    console.log(`${i} : ${this.table[i]}`)
  }
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:40:46  
 * @Desc:   散列键值对存储 
 * @Parm:    
 */
HashChainTable.prototype.put = function(key, data) {
  var pos = this.betterHash(key)
  var index = 0
  
  while(this.table[pos][index]) {

    let keyIndex = index % 2 ? index + 1 : index
    
    // key值一样则做覆盖处理
    if(this.table[pos][keyIndex] === key) {
      index = keyIndex
      break
    }

    ++ index
  }

  this.table[pos][index] = key
  this.table[pos][index + 1] = data
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-11 08:46:36  
 * @Desc:   散列表数据获取 
 * @Parm:    
 */
HashChainTable.prototype.get = function(key) {
  var index = 0
  var pos = this.betterHash(key)

  while(this.table[pos][index] !== key) {
    index += 2
  }

  console.log(index)
 
  return this.table[pos][index + 1]
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan", "Jonathan", "Danny", "Jonathan"]


var hashChainTable = new HashChainTable()

for (var i = 0; i < someNames.length; ++i) {
  hashChainTable.put(someNames[i], someNames[i])
}

hashChainTable.showDistro()

console.log(hashChainTable.get('Jonathan'))



/*
解决碰撞处理的算法

- 线性探测法

如果数组大小是待存储数据个数的1.5倍，这使用开链法，当待数组的大小是待存储数据的两倍及以上，这可以优先使用线性探测法

当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空，如果为空，将数据存储该位置，
如果不为空，这继续检查下一个位置，直到找到空位置为止。

*/


function HashLineTable() {
  this.table = new Array(137)
  this.values = new Array(137)
}


HashLineTable.prototype.betterHash = function(data) {
  const H = 37
  var total = 0

  for (var i = 0; i < data.length; ++i) {
    total += H * total + data.charCodeAt(i)
  }

  total = total % this.table.length

  if (total < 0) {
    total += this.table.length-1
  }

  return parseInt(total)
}



HashLineTable.prototype.showDistro = function() {
  var n = 0
  for(var i=0; i<this.table.length; i++) {
    if(!this.values[i]) continue
    console.log(`${i} : ${this.values[i]}`)
  }
}


HashLineTable.prototype.put = function(key, data) {
  var pos = this.betterHash(key)
  var index = 0

  // 如果key值已经存在，则覆盖当前散列表中key值对应的数据
  let findIndex = this.table.findIndex(item => item === key)
  
  if(findIndex !== -1) {
    this.values[findIndex] = data
    return
  }


  while(this.table[pos]) {
    pos ++
    index ++

    if(pos >= this.table.length) {
      pos = 0
    }

    // 说明遍历整个散列表都没有可插值的空间
    if(index >= this.table.length) {
      break
    }
  }


  if(index !== this.table.length) {
    this.table[pos] = key
    this.values[pos] = data
    return true
  } 

  return false
}


HashLineTable.prototype.get = function(key) {
  let findIndex = this.table.findIndex(item => item === key) 
  return this.values[findIndex]
}



var hashLineTable = new HashLineTable()
hashLineTable.put('ziyi2', 'ziyi2')
hashLineTable.showDistro()

hashLineTable.put('ziyi2', 'ziyi3')
hashLineTable.showDistro()

hashLineTable.put('2ziyi', 'ziyi3')
hashLineTable.showDistro()

console.log(hashLineTable.get('2ziyi'))

console.log(hashLineTable.get('ziyi2'))