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
    this.adj[i].push('')
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-16 20:35:37  
 * @Desc:   添加边 
 * @Parm:    
 */
Graph.prototype.addEdge = function(v, w) {
  thia.adj[v].push(w)
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
    console.log('i -> ')
    for(j=0; j<this.vertices; j++) {
      if(this.adj[i][j]) {
        console.log(this.adj[i][j])
      }
    }
  }
}