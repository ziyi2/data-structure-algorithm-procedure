/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-30 08:50:30  
 * @Desc:   线性（顺序）查找  
 */


/** 
  *  线性查找：
  *     
  *  对于查找数据来说，最简单的方法就是从列表的第一个元素开始对列表元素逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到。
  *  
  *  这种方法称为顺序查找，有时也被称为线性查找。它属于暴力查找技巧的一种，在执行查找时可能会访问到数据结构里的所有元素。
  * 
  */


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-30 08:54:46  
   * @Desc:   线性查找元素 
   * @Parm:    
   */  
function find(arr, data) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === data) {
      return true
    }
  }
  return false
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-30 08:54:57  
 * @Desc:   线性查找数组的索引 
 * @Parm:    
 */
function findIndex(arr, data) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === data) {
      return i
    }
  }
  return -1
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-30 08:55:08  
 * @Desc:   线性查找最小值(查找最大值类似)
 * @Parm:    
 */
function findMin(arr) {
  let min = arr[0]
  for(let i=0; i<arr.length; i++) {
    if(arr[i] <= min) {
      min = arr[i]
    }
  }
  return min
}



/** 
  *  使用自组织数据：
  *     
  *  对于未排序的数据集来说，当被查找的数据位于数据集的起始位置时，查找是最快、最成功的。
  * 
  *  通过将成功找到的元素置于数据集的起始位置，可以保证在以后的操作中该元素能被更快地查找到。
  * 
  *  由于对数据的查找遵循“80-20 原则”，因此将你的数据转化为自组织的形式是很有意义的。
  * 
  *  “80-20 原则”是指对某一数据集执行的80% 的查找操作都是对其中20% 的数据元素进行查找。
  * 
  *  自组织的方式最终会把这20% 的数据置于数据集的起始位置，这样便可以通过一个简单的顺序查找快速找到它们。
  * 
  */

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-30 08:54:46  
 * @Desc:   线性查找元素并包含自组织方式
 * @Parm:    
 */  
function find(arr, data) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === data) {
      // 如果当前数据不在最顶部，则每次搜索到该数据时该数据向前移动一个位置
      // 如果该数据被多次搜索，则该数据会慢慢向顶部位置靠近
      // 这种技巧同时可以保证已经在数据集前面的元素不会被越移越远
      if(i>0) {
        swap(arr, i, i-1)
      }
      return true
    }
  }
  return false
}


function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}


/** 
  *  使用自组织数据：
  *     
  *  另外一种自组织数据的方法是：将找到的元素移动到数据集的起始位置，但是如果这个元素已经很接近起始位置，则不会对它的位置进行交换。
  *   
  *  要实现这个目标，我们只对距离数据集起始位置一定范围外的元素进行交换。
  * 
  *  我们只需要定义哪些是离数据集起始位置足够近的元素，通过这个来决定是否需要将元素移动到接近数据集的起始位置。
  * 
  *  再次参照“80-20原则”，我们可以确定以下原则：仅当数据位于数据集的前20% 元素之外时，该数据才需要被重新移动到数据集的起始位置。
  */

 function find(arr, data) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === data) {
      // 在20%以外则移动到数据的顶部
      if(i > arr.length * 0.2) {
        swap(arr, i, 0)
      }
      
      return true
    }
  }
  return false
}