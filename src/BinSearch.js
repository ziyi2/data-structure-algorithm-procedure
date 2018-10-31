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


/** 
 * 
计算重复数据：

当binSearch() 函数找到某个值时，如果在数据集中还有其他相同的值出现，那么该函数会定位在类似值的附近。

换句话说，其他相同的值可能会出现已找到值的左边或右边。

所以一个统计重复值的函数要怎么做才能确保统计到了数据集中出现的所有重复的值呢？

最简单的解决方案是写两个循环，两个都同时对数据集向下遍历，或者向左遍历，统计重复次数；然后，向上或向右遍历，统计重复次数。

 */

function binRepeatCount(arr, data) {
  let count = 0

  let position = binSearch(arr, data)

  if(position > -1) {
    ++ count
    
    let i = position

    while(arr[++ position] === data) {
      ++ count
    } 

    while(arr[-- i] === data)  {
      ++ count
    }
  }

  return count

}


console.log(binRepeatCount(arr, 65))


/** 
 * 
查找文本数据：



 */


 let strArr = `The nationalism of Hamilton was undemocratic. The democracy of Jefferson was
 in the beginning, provincial. The historic mission of uniting nationalism and
 democracy was in the course of time given to new leaders from a region beyond
 the mountains, peopled by men and women from all sections and free from those
 state traditions which ran back to the early days of colonization. The voice
 of the democratic nationalism nourished in the West was heard when Clay of
 Kentucky advocated his American system of protection for industries; when
 Jackson of Tennessee condemned nullification in a ringing proclamation that
 has taken its place among the great American state papers; and when Lincoln
 of Illinois, in a fateful hour, called upon a bewildered people to meet the
 supreme test whether this was a nation destined to survive or to perish. And
 it will be remembered that Lincoln's party chose for its banner that earlier
 device--Republican--which Jefferson had made a sign of power. The "rail splitter"
 from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
 and his appeal was clothed in the simple language of the people, not in the
 sonorous rhetoric which Webster learned in the schools.`.split(' ')

// 注意这个数组里没有区分标点符号
console.log(strArr)


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

console.time('线性查找耗时')
console.log(findIndex(strArr, 'rhetoric'))
console.timeEnd('线性查找耗时')

insertionSort(strArr)
console.log(strArr)

console.time('二分查找耗时')
console.log(binSearch(strArr, 'rhetoric'))
console.timeEnd('二分查找耗时')