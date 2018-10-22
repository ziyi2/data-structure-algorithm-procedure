/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-22 08:49:39  
 * @Desc:   选择排序   
 */

/** 
选择排序：

选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置。

然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。


举例说明：要排序数组：let arr= [6,3,8,2,9,1]   

第1趟排序(次数 6 - 1 = 5)：

以第1个元素为起始位置，比较5次确定最小值1，插入到第1个位置：1,6,3,8,2,9

---------------------------------------------------------------------

第2趟排序(次数 6 - 2 = 4)：

以第2个元素为起始位置，比较4次确定最小值2，插入到第2个位置：1,2,6,3,8,9

---------------------------------------------------------------------

第3趟排序(次数 6 - 3 = 3)：

以第3个元素为起始位置，比较3次确定最小值3，插入到第3个位置：1,2,3,6,8,9

---------------------------------------------------------------------

第4趟排序(次数 6 - 4 = 2)：

以第4个元素为起始位置，比较2次确定最小值6，插入到第4个位置：1,2,3,6,8,9


---------------------------------------------------------------------

第5趟排序(次数 6 - 5 = 1)：

以第5个元素为起始位置，比较1次确定最小值8，插入到第5个位置：1,2,3,6,8,9

---------------------------------------------------------------------

最终结果：1  2  3  6  8  9

---------------------------------------------------------------------

选择排序的时间复杂度是O(n2)。

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

let arr = new CArray(100)
arr.random()
console.log(arr.show())


// 选择排序
// ---------------------------------------------------------------------
CArray.prototype.selectionSort = function() {
  for(let i=0,len=this.data.length; i<len-1; i++) {
    // 默认每次比较的起始作为最小值
    let min = i

    // 比较出以i为起始的最小值
    for(let j=i+1; j<=len-1; j++) {
      if(this.data[min] > this.data[j]) {
        min = j
      }
    }

    this.swap(i, min)
  }
}

arr.selectionSort()
console.log(arr.show())