/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-30 09:13:24  
 * @Desc:   二分查找 
 */

/** 
 * 
二分查找：

如果你要查找的数据是有序的，二分查找算法比顺序查找算法更高效。

1、将数组的第一个位置设置为下边界（0）。

2、将数组最后一个元素所在的位置设置为上边界（数组的长度减1）。

3、若下边界等于或小于上边界，则做如下操作：

  a. 将中点设置为数组长度除以2。

  b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加1。

  c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减1。

  d. 否则中点元素即为要查找的数据，可以进行返回。

 */


 /** 
  * @Author: zhuxiankang 
  * @Date:   2018-10-31 08:37:11  
  * @Desc:   二分法查找数据 
  * @Parm:    
  */ 
function binSearch(arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0

  while(lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2)

    console.log(mid)

    if(arr[mid] < data) {
      lowerBound = mid + 1
    } else if(arr[mid] > data) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }

  return  -1
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-31 08:37:34  
 * @Desc:   插入排序 
 * @Parm:    
 */
function insertionSort(arr) {
  var temp, inner
  for (var outer = 1; outer <= arr.length - 1; ++outer) {
    // 待插入的数据
    temp = arr[outer]
    inner = outer
    // 
    // 找到需要插入的位置，其他数据往后移动，并为该位置提供空间
    while (inner > 0 && (arr[inner - 1] >= temp)) {
      arr[inner] = arr[inner - 1]
      --inner
    }

    // 将待插入数据插入适应位置
    arr[inner] = temp
  }
}


let arr = [65,1,6,3,8,2,9,1,11,22,33,7,89,65,37,215,13,8,897,23,55,55,55,78,899,212,45]
insertionSort(arr)
console.log(arr)
console.log(binSearch(arr, 1))