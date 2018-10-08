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

var links = new LinkList()
links.insert('ziyi2', 'head')
console.log(links.find('ziyi2'))
links.insert('ziyi3', 'ziyi2')
console.log(links.find('ziyi3'))
links.insert('ziyi4', 'ziyi3')
console.log(links.find('ziyi4'))
links.display()

links.remove('ziyi3')
links.display()









