/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-10 08:53:32  
 * @Desc:   队列  
 */

/*
队列是一种先进先出的数据结构，队列被用在很多地方，例如打印任务池、模拟排队的顾客等。
*/


function Queue() {
  this.queue = []
}

Queue.prototype.enqueue = function(element) {
  this.queue.push(element)
}

Queue.prototype.dequeue = function() {
  this.queue.shift()
}

Queue.prototype.front = function() {
  return this.queue[0]
}

Queue.prototype.back = function() {
  return this.queue[this.queue.length - 1]
}

Queue.prototype.isEmpty = function() {
  return this.queue.length ? true : false
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.queue)
queue.dequeue()
console.log(queue.queue)
console.log(queue.front())
console.log(queue.back())


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-28 08:54:21  
 * @Desc:   优先队列(根据权重设置dequeue的顺序，而不是先进先出) 
 * @Parm:    
 */
function PriorityQueue() {
  this.queue = []
}

PriorityQueue.prototype.enqueue = function(element) {
  this.queue.push(element)
}

PriorityQueue.prototype.dequeue = function(priorityKey) {
  let maxPriority = this.queue[0][priorityKey]
  let index = 0

  for(let i=1; i<this.queue.length; i++) {
    let priority = this.queue[i][priorityKey]
    if(priority <= maxPriority) continue
    maxPriority = priority
    index = i
  }
  return this.queue.splice(index, 1)
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue({
  name: 'ziyi4',
  key: 4
})

priorityQueue.enqueue({
  name: 'ziyi1',
  key: 1
})

priorityQueue.enqueue({
  name: 'ziyi2',
  key: 2
})

priorityQueue.enqueue({
  name: 'ziyi2-2',
  key: 2
})

priorityQueue.enqueue({
  name: 'ziyi3',
  key: 3
})

console.log(priorityQueue.queue)
console.log(priorityQueue.dequeue('key'))
console.log(priorityQueue.dequeue('key'))
console.log(priorityQueue.dequeue('key'))