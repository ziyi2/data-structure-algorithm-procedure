/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:14:28  
 * @Desc:   Node类 
 * @Parm:    
 */
function Node(element) {
  this.element = element
  // next是指向下一个节点的链接, 尾巴节点指向null
  this.next = null
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:15:24  
 * @Desc:   链表操作类 
 * @Parm:    
 */
function LinkList() {
  // 头节点
  this.head = new Node('head')
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:18:28  
 * @Desc:   在链表中查找节点 
 * @Parm:    
 */
LinkList.prototype.find = function(element) {
  var currentNode = this.head
  while(currentNode.element !== element) {
    currentNode = currentNode.next
  }
  return currentNode
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:19:56  
 * @Desc:   向链表插入节点 
 * @Parm:    
 */
LinkList.prototype.insert = function(element, after) {
  var newNode = new Node(element)
  var currentNode = this.find(after)
  // 新节点的下一个节点指向被插入节点的下一个节点
  console.log('current: ', currentNode)
  newNode.next = currentNode.next
  // 被插入节点的下一个节点指向新节点(新节点插入在被插入节点的后面)
  currentNode.next = newNode
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:24:28  
 * @Desc:   显示链表所有节点 
 * @Parm:    
 */
LinkList.prototype.display = function() {
  var currentNode = this.head
  while(!(currentNode.next === null)) {
    console.log(currentNode.next)
    currentNode = currentNode.next
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:32:14  
 * @Desc:   查找当前节点的前一个节点 
 * @Parm:    
 */
LinkList.prototype.findPrevious = function(element) {
  var currentNode = this.head
  while(!(currentNode.next === null) && (currentNode.next.element !== element)) {
    currentNode = currentNode.next
  }
  return currentNode
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 20:34:31  
 * @Desc:   删除当前节点 
 * @Parm:    
 */
LinkList.prototype.remove = function(element) {
  delete this.find(element)
  var preNode = this.findPrevious(element)
  console.log('preNode: ', preNode)
  
  if(!(preNode.next === null)) {
    // 将删除的前一个节点指向删除的后一个节点
    preNode.next = preNode.next.next
  }
}

// var link = new LinkList()
// link.insert('ziyi2', 'head')
// console.log(link.find('ziyi2'))
// link.insert('ziyi3', 'ziyi2')
// console.log(link.find('ziyi3'))
// link.insert('ziyi4', 'ziyi3')
// console.log(link.find('ziyi4'))
// link.display()

// link.remove('ziyi3')
// link.display()



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:29:20  
 * @Desc:   可从后向前遍历的双向链表 
 * @Parm:    
 */
function DoublyNode(element) {
  this.element = element
  // 后继节点
  this.next = null
  // 前驱节点
  this.previous = null
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:32:39  
 * @Desc:   双向操作链表(可以反序遍历节点)
 * @Parm:    
 */
function DoublyLinkList() {
  this.head = new DoublyNode('head')
} 

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:34:09  
 * @Desc:   查找节点 
 * @Parm:    
 */
DoublyLinkList.prototype.find = function(element) {
  var currentNode = this.head
  while(currentNode.element !== element) {
    currentNode = currentNode.next
  }
  return currentNode
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:33:17  
 * @Desc:   插入节点 
 * @Parm:    
 */
DoublyLinkList.prototype.insert = function(element, after) {
  var newNode = new DoublyNode(element)
  var currentNode = this.find(after)
  newNode.next = currentNode.next
  newNode.previous = currentNode
  // 注意currentNode的前置节点仍然没有变化
  currentNode.next = newNode
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:36:27  
 * @Desc:   删除节点 
 * @Parm:    
 */
DoublyLinkList.prototype.remove = function(element) {
  var currentNode = this.find(element)
  delete this.find(element)
  while(!(currentNode.next === null)) {
    currentNode.previous.next = currentNode.next
    currentNode.next.previous = currentNode.previous
    currentNode.next = null
    currentNode.previous = null
  }
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:40:07  
 * @Desc:   查找最后一个节点 
 * @Parm:    
 */
DoublyLinkList.prototype.findLast = function() {
  var currentNode = this.head
  while(!(currentNode.next === null)) {
    currentNode = currentNode.next
  }
  return currentNode
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:41:42  
 * @Desc:   反序显示双向链表的元素 
 * @Parm:    
 */
DoublyLinkList.prototype.displayReverse = function() {
  var currentNode = this.findLast()
  while(!(currentNode.previous === null)) {
    console.log(currentNode)
    currentNode = currentNode.previous
  }
}

// var doublyLink = new DoublyLinkList()
// doublyLink.insert('ziyi0', 'head')
// doublyLink.insert('ziyi1', 'ziyi0')
// doublyLink.insert('ziyi2', 'ziyi1')
// doublyLink.remove('ziyi1')
// doublyLink.displayReverse()


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:52:42  
 * @Desc:   循环链表(可以反序遍历链表，不用付出额外代价创建双向链表，也可以从任何节点开始遍历链表) 
 * @Parm:    
 */
function LoopLinkList() {
  this.head = new Node()
  // 默认尾节点指向头节点
  this.head.next = this.head
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-09 08:57:19  
 * @Desc:   显示链表 
 * @Parm:    
 */
LoopLinkList.prototype.display = function() {
  var currentNode = this.head
  // 当循环到头节点时退出循环
  while(!(currentNode.next === null) && 
        !(currentNode.next.element === 'head')) {
    console.log(currentNode.next)      
    currentNode = currentNode.next
  }
}


