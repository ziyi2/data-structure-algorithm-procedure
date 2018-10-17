/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 19:49:19  
 * @Desc:   图 
 */


/*

图的定义

图由"边"的集合以及"顶点"的集合组成。

边：由顶点对（顶点1，顶点2）定义。
顶点：有权重，也称为成本。

有序图：图的顶点是有序的，称之为有向图，有向图表明了顶点的流向。
无序图：图是无序的。

路径：由一系列顶点构成，路径中的所有顶点都由边链接。
路径的长度：用路径中的第一个顶点到最后一个顶点之间边的数量表示。
环：由指向自身顶点组成的路径称为环，环的长度称为0。
圈：至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同。
简单圈：没有重复边或重复顶点的圈。
平凡圈：除了第一个和最后一个顶点外，路径的其他顶点有重复的圈。

*/


/*

图建模

交通流量建模：顶点可以表示街道的十字路口，边可以表示街道。
加权的边可以表示限速或者车道的数量，建模人员可以用这个系统来判最佳路线以及最有可能堵车的街道。

任何运输系统都可以用图来建模。例如航空公司可以用图来为飞行系统建模。将每个机场看成顶点，将经过两个顶点的每条航线看作一条边。
加权的边可以表示从一个机场到另一个机场的航班成本，或两个机场的距离，这取决于建模的对象是什么。

任何计算器网络同样经常用图来建模。

*/


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:33:48  
 * @Desc:   图类 
 * @Parm:    
 */
function Graph(v) {
  // 顶点数
  this.vertices = v
  // 边数
  this.edges = 0
  this.adj = []
  for(let i=0; i<this.vertices; i++) {
    this.adj[i] = []
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:35:37  
 * @Desc:   添加边 
 * @Parm:    
 */
Graph.prototype.addEdge = function(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges ++
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:38:47  
 * @Desc:   显示图 
 * @Parm:    
 */
Graph.prototype.show = function() {
  for(let i=0; i<this.vertices; i++) {
    console.log('i -> ', i)
    for(j=0; j<this.vertices; j++) {
      if(this.adj[i][j] !== undefined) {
        console.log(this.adj[i][j])
      }
    }
  }
}


let g = new Graph(10)
console.log(g)

g.addEdge(0,1)
g.addEdge(1,3)

console.log(g.show())


/*

图搜索

深度优先搜索：

从一条路径的起始顶点开始追溯，直到到达最后一个顶点，然后回溯，继续追溯下一条路径，知道到达最后一个顶点，如此往复，直到没有路径为止。
这不是搜索特定的路径，而是通过搜索来查看图中有哪些路径可以选择。

*/



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-17 09:23:17  
 * @Desc:   深度优先搜索 
 * @Parm:    
 */
function DeepFirstGraph(v) {
  // 顶点数
  this.vertices = v
  // 边数
  this.edges = 0
  this.adj = []
  // 是否被访问
  this.marked = []

  for(var i=0; i<this.vertices; i++) {
    this.adj[i] = []
    this.marked[i] = false
  }
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:35:37  
 * @Desc:   添加边 
 * @Parm:    
 */
DeepFirstGraph.prototype.addEdge = function(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges ++
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-17 08:51:58  
 * @Desc:   深度优先搜索
 * @Parm:    
 */
DeepFirstGraph.prototype.deepFirstSearch = function(v) {
  // 表明当前顶点被访问过
  this.marked[v] = true

  if(!this.adj[v] === undefined) return

  // 当前被访问的顶点
  console.log('visited: ', v)

  // 遍历和顶点v有边链接的其他顶点
  for(let w of this.adj[v]) {
    // 如果当前顶点没有被访问过，则继续访问
    if(!this.marked[w]) {
      this.deepFirstSearch(w)
    }
  }
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:38:47  
 * @Desc:   显示图 
 * @Parm:    
 */
DeepFirstGraph.prototype.show = function() {
  for(let i=0; i<this.vertices; i++) {
    console.log('i -> ', i)
    for(j=0; j<this.vertices; j++) {
      if(this.adj[i][j] !== undefined) {
        console.log(this.adj[i][j])
      }
    }
  }
}


let deepFirstGraph = new DeepFirstGraph(6)
deepFirstGraph.addEdge(0,1)
deepFirstGraph.addEdge(0,2)
deepFirstGraph.addEdge(0,3)
deepFirstGraph.addEdge(2,4)
deepFirstGraph.addEdge(2,3)
deepFirstGraph.addEdge(3,1)
deepFirstGraph.addEdge(3,5)
deepFirstGraph.deepFirstSearch(0)

/*

广度优先搜索：
从第一个顶点开始，尝试访问尽可能靠近它的顶点。
这种搜索在图上是逐层移动的，首先检查最靠近第一个顶点的层，再逐渐向下移动到离起始顶点最远的层。

广度优先搜索使用抽象的队列而不是数组对已访问过的顶点进行排序：
- 1. 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中
- 2. 从图中取出下一个顶点v，添加到已访问的顶点列表
- 3. 将所有与v相邻的未访问顶点添加到队列

*/
