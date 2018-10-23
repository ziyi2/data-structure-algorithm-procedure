/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-22 08:49:39  
 * @Desc:   希尔排序   
 */

/** 
希尔排序：

在插入排序的基础上左了改善，核心理念和插入排序不同，它会比较距离较远的元素，而非相邻元素。

和比较相邻元素不同，这种方案可以使离正确位置很远的元素更快的回到合适的位置。

当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，直到处理到数据集的末尾，这时算法比较的就是相邻元素了。

希尔排序的工作原理是，通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。

我们可以动态定义间隔序列，不过对于大部分的实际应用场景，算法要用到的间隔序列可以提前定义好。

有一些公开定义的间隔序列，使用它们会得到不同的结果。

在这里我们用到了Marcin Ciura 在他2001 年发表的论文“Best Increments for theAverage Case of Shell Sort”（http:bit.ly/1b04YFv,2001）中定义的间隔序列。

这个间隔序列是：701, 301, 132, 57, 23, 10, 4, 1。

*/


// 辅助数组类
// ---------------------------------------------------------------------

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 19:08:59  
 * @Desc:   辅助数组类 
 * @Parm:    
 */
function CArray(number) {
  this.data = []
  for(let i=0; i<number; i++) {
    this.data[i] = i
  }
  this.gaps = [5,3,1]
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 19:14:38  
 * @Desc:   设置随机数 
 * @Parm:    
 */
CArray.prototype.random = function() {
  for (let i=0,len=this.data.length; i <len; ++i) {
    this.data[i] = Math.floor(Math.random() * (len + 1))
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 19:14:38  
 * @Desc:   清除数据 
 * @Parm:    
 */
CArray.prototype.clear = function() {
  for (let i=0,len=this.data.length; i <len; ++i) {
    this.data[i] = 0
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 19:16:04  
 * @Desc:   显示数据 
 * @Parm:    
 */
CArray.prototype.show = function() {
  let retstr = ''
  for (let i=0,len=this.data.length; i <len; ++i) {
    retstr += this.data[i] + " ";
    if (i > 0 & i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 19:19:13  
 * @Desc:   交换数据 
 * @Parm:    
 */
CArray.prototype.swap = function(index1, index2) {
  let temp = this.data[index1]
  this.data[index1] = this.data[index2]
  this.data[index2] = temp
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-23 09:20:23  
 * @Desc:   设置间隔序列
 * @Parm:    
 */
CArray.prototype.setGaps = function(arr) {
  this.gaps = arr
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-23 09:20:45  
 * @Desc:   希尔排序 
 * @Parm:    
 */
CArray.prototype.shellSort = function() {
  // 遍历间隔序列
  for(let g=0; g<this.gaps.length; g++) {
    let gap = this.gaps[g]

    // 使用间隔遍历数据
    for(let i=gap; i<this.data.length; i++) {
      // 如果发现往前遍历的间隔序列的值小于当前序列的值，则进行交换处理
      let temp = this.data[i]
      
      for(j=i; j>=gap && this.data[j-gap] > temp; j-=gap) {
        this.data[j] = this.data[j - gap]
      }

      this.data[j] = temp
    }
  }
}





