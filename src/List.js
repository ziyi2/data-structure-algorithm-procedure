/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-26 08:59:27  
 * @Desc:   列表  
 */


function List() {
  this.listSize = 0
  this.listPos = 0
  this.list = []
}

List.prototype.append = function(list) {
  this.list[this.listSize ++] = list
}

List.prototype.find = function(list) {
  for(var i=0; i<this.list.length; i++) {
    if(this.list[i] === list) {
      return i
    }
  }
  return -1
}

List.prototype.remove = function(list) {
  var foundAt = this.find(list)
  if(foundAt > -1) {
    this.list.splice(foundAt, 1)
    -- this.listSize
    return true
  }
  return false
}

List.prototype.length = function() {
  return this.listSize
}

List.prototype.toString = function() {
  return this.list.join(',')
}

List.prototype.insertBefore = function(list, after) {
  var insertAt = this.find(after)
  if(insertAt > -1) {
    this.list.splice(insertAt, 0, list)
    ++ this.listSize
    return true
  }
  return false
}


List.prototype.insertAfter = function(list, before) {
  var insertAt = this.find(before)
  if(insertAt > -1) {
    this.list.splice(insertAt + 1, 0, list)
    ++ this.listSize
    return true
  }
  return false
}

List.prototype.clear = function() {
  delete this.list
  this.list = []
  this.listSize = this.listPos = 0
} 

List.prototype.contains = function(list) {
  for(var i=0; i<this.list.length; i++) {
    if(this.list[i] === list) {
      return true
    }
  }
  return false
}


List.prototype.front = function() {
  this.listPos = 0
}

List.prototype.end = function() {
  this.listPos = this.listSize - 1
}

List.prototype.prev = function() {
  if(this.listPos > 0) {
    -- this.listPos
  }
}

List.prototype.next = function() {
  if(this.listPos < this.listSize - 1) {
    ++ this.listPos
  }
}

List.prototype.currPos = function() {
  return this.listPos
}

List.prototype.moveTo = function(pos) {
  this.listPos = pos
}

List.prototype.getList = function() {
  return this.list[this.listPos] 
}


let list = new List()
list.append('ziyi2')
list.append('ziyi3')
console.log(list)
console.log(list.find('ziyi2'))
console.log(list.toString())
console.log(list.length())
list.insertBefore('ziyi1', 'ziyi2')
list.insertBefore('ziyi23', 'ziyi3')
console.log(list.toString())
list.insertAfter('ziyi4', 'ziyi3')
console.log(list.toString())
list.insertAfter('ziyi223', 'ziyi2')
console.log(list.toString())
list.clear()
console.log(list.length())
console.log(list.contains('ziyi2'))
list.append('ziyi1')
console.log(list.contains('ziyi1'))
list.append('ziyi2')
list.append('ziyi3')
list.append('ziyi4')
list.front()
console.log(list.getList())
list.end()
console.log(list.getList())
list.prev()
console.log(list.getList())
console.log(list.length())
console.log(list.toString())
for(list.front(); list.currPos() < list.length() - 1; list.next()) {
  console.log(list.currPos())
  console.log(list.getList())
}