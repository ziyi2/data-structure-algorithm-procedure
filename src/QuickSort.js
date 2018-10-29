/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-29 08:35:33  
 * @Desc:   快速排序 
 */


 /** 
  *  快速排序：
  *  
  *  1、选择一个基准元素，将列表分隔成两个子序列；
  *  2、对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面；
  *  3、分别对较小元素的子序列和较大元素的子序列重复步骤1 和2。
  *   
  *  快速排序算法非常适用于大型数据集合；在处理小数据集时性能反而会下降。
  * 
  */


function quickSort(arr) {

  console.log('arr: ', arr)

  if(arr.length === 0) {
    return []
  } 

  let left = []
  let right = []

  // 选择第一个元素为基准值
  let base = arr[0]

  for(let i=1; i<arr.length; i++) {
    arr[i] < base ? left.push(arr[i]) : right.push(arr[i])
  }

  // 一直递归，
  // 第一次分为 left: [3]   base: 6  right: [9]

  // 先递归left: [3]
  // quickSort([3]) left: []  base: 3  right: []
  // quickSort([]) [] // left: []   
  // quickSort([]) [] // right: []
  // quickSort(left).concat(base, quickSort(right))   -> [].concat(3, []) = [3]

  // 同理递归right [9]

  // [3].concat(6, [9]) = [3,6,9]

  // 可见在数据比较小的时候递归执行的比较多，消耗了性能
  return quickSort(left).concat(base, quickSort(right))
}


let arr = [6,3,9]
let arr1 = quickSort(arr)
console.log(arr1)
