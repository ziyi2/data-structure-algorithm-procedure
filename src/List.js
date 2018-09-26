/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-26 08:59:27  
 * @Desc:   列表  
 */


function List() {
  this.listSize = 0
  this.listPos = 0
  this.lists = []
}

List.prototype.append = function(list) {
  this.lists[this.listSize ++] = list
}

List.prototype.find = function(list) {
  for(var i=0; i<this.lists.length; i++) {
    if(this.lists[i] === list) {
      return i
    }
  }
  return -1
}

List.prototype.remove = function(list) {
  var foundAt = this.find(list)
  if(foundAt > -1) {
    this.lists.splice(foundAt, 1)
    -- this.listSize
    return true
  }
  return false
}

List.prototype.length = function() {
  return this.listSize
}

List.prototype.toString = function() {
  return this.lists.join(',')
}

List.prototype.insertBefore = function(list, after) {
  var insertAt = this.find(after)
  if(insertAt > -1) {
    this.lists.splice(insertAt, 0, list)
    ++ this.listSize
    return true
  }
  return false
}


List.prototype.insertAfter = function(list, before) {
  var insertAt = this.find(before)
  if(insertAt > -1) {
    this.lists.splice(insertAt + 1, 0, list)
    ++ this.listSize
    return true
  }
  return false
}

List.prototype.clear = function() {
  delete this.lists
  this.lists = []
  this.listSize = this.listPos = 0
} 

List.prototype.contains = function(list) {
  for(var i=0; i<this.lists.length; i++) {
    if(this.lists[i] === list) {
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
  return this.lists[this.listPos] 
}