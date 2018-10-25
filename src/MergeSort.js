/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-22 08:49:39  
 * @Desc:   归并排序   
 */

/** 
 *  归并排序的概念：https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort
 * 
 * 归并排序的命名来自它的实现原理：
 * 
 * 把一系列排好序的子序列合并成一个大的完整有序序列。从理论上讲，这个算法很容易实现。
 * 
 * 我们需要两个排好序的子数组，然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。
 * 
 * 然而，在实际情况中，归并排序还有一些问题，当我们用这个算法对一个很大的数据集进行排序时，我们需要相当 大的空间来合并存储两个子数组。
 * 
 * 就现在来讲，内存不那么昂贵，空间不是问题，因此值得我们去实现一下归并排序，比较它和其他排序算法的执行效率。
 * 
 * 
 * 
 * 举例说明：要排序数组：let arr= [6,3,8,2,9,1,5]
 * 
 * 第一趟(step = 1)  [6]左 [3]右 [8]左 [2]右 [9]左 [1]右 [5]轮空
 * 
 * 第二趟(step = 2)  [3,6]左 [2,8]右 [1,9]左 [5]右  
 * 
 * 第三趟(step = 4)  [2,3,6,8]左 [1,9,5]右
 * 
 * 第四趟(step = 8)  [1,2,3,5,6,8,9]
 */

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-25 09:05:32  
 * @Desc:   归并排序 
 * @Parm:   arr -> 需要被排序的数组 
 */
function mergeSort (arr) {
  // 只有一个数组元素不需要排序
  if(arr.length < 2) {
    return
  }

  let left, right, step = 1

  // 如果step超过了数组长度，那么不需要拆分了
  // 例如以上示例中的第四趟，step = 8，但是数组长度只有7，因此已经排好序了，不需要在遍历了
  while(step < arr.length) {
    left = 0
    right = step

    console.log('left: ', left)
    console.log('right: ', right)

    // 第一次step = 1，将一个数组拆分被只有一个元素的多个数组
    // 第二次step = 2, 将拆分的只有一个元素的数组合并成排好序的只有2个元素的多个数组
    // ...
    while(right + step <= arr.length) {
      mergeArrays(arr, left, left+step, right, right+step)
      left = right + step
      right = left + step
      console.log('left: ', left)
      console.log('right: ', right)
    }

    console.log('finally right: ', right)

    if(right < arr.length) {
      console.log('at right: ', right)
    }

    // 第一次step = 1,
    // 第二次step = 2, 因此进行两两合并，只是合并的每个数组长度是1
    // 第三次step = 4, 仍然进行两两合并，只是合并的每个数组长度是2
    step *= 2
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-25 09:19:37  
 * @Desc:   合并数组 
 * @Parm:   arr -> 需要被排序的数组 
 *          leftStart   ->  合并的左起始地址
 *          leftEnd     ->  合并的左结束地址
 *          rightStart  ->  合并的右起始地址
 *          rightEnd    ->  合并的右结束地址
 */
function mergeArrays(arr, leftStart, leftEnd, rightStart, rightEnd) {
  
} 


mergeSort([6,3,8,2,9,1,5])




