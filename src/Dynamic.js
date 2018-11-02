/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-01 08:53:16  
 * @Desc:   动态规划    
 */

 
/*

动态规划有时被认为是一种与递归相反的技术。

递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整个问题。

动态规划解决方案从底部开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题。



使用递归去解决问题虽然简洁，但效率不高。

包括JavaScript 在内的众多语言，不能高效地将递归代码解释为机器代码，尽管写出来的程序简洁，但是执行效率低下。

但这并不是说使用递归是件坏事，本质上说，只是那些指令式编程语言和面向对象的编程语言对递归的实现不够完善，因为它们没有将递归作为高级编程的特性。



许多使用递归去解决的编程问题，可以重写为使用动态规划的技巧去解决。

动态规划方案通常会使用一个数组来建立一张表，用于存放被分解成众多子问题的解。当算法执行完毕，最终的解将会在这个表中很明显的地方被找到。

*/


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-01 09:04:27  
 * @Desc:   使用递归计算斐波那契数列
 * @Parm:   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … 
 */
function recursionFibonacci(n) {
  if(n < 2) {
    return n
  }

  return recursionFibonacci(n-1) + recursionFibonacci(n-2)
}


console.log(recursionFibonacci(8))


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-01 09:09:55  
 * @Desc:   使用动态规划计算斐波那契数列
 * @Parm:   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …  
 */

 function dynamicFibonacci(n) {

   // 如果是0或者1则直接返回
   if(n === 0 || n === 1) {
     return n
   }

   let arr = []

   // 数组的大小是动态开辟的，随着n变化而变化
   arr[0] = 0
   arr[1] = 1

   for(let i=2; i<=n; i++) {
     arr[i] = arr[i-1] + arr[i-2]
   }

   return arr[n]
 }

 console.log(dynamicFibonacci(8))



 console.time('递归耗时')
 console.log(recursionFibonacci(20))
 console.timeEnd('递归耗时')

 console.time('动态规划耗时')
 console.log(dynamicFibonacci(20))
 console.timeEnd('动态规划耗时')


 // 递归耗时: 2.30419921875ms
 // 动态规划耗时: 0.22900390625ms




 /*

寻找最长公共子串：例如，在单词“raven”和“havoc”中，最长的公共子串是“av”。

动态规划是适合解决这个问题的方案。这个算法使用一个二维数组存储两个字符串相同位置的字符比较结果。

初始化时，该数组的每一个元素被设置为0。

每次在这两个数组的相同位置发现了匹配，就将数组对应行和列的元素加1，否则保持为0。

按照这种方式，一个变量会持续记录下找到了多少个匹配项。

当算法执行完毕时，这个变量会结合一个索引变量来获得最长公共子串。

*/


function lcs(word1, word2) {
  let max = 0
  let index = 0

  let lcsArr = new Array(word1.length + 1)

  // 动态开辟二维数组大小
  for(let i=0; i<=word1.length + 1; i++) {
    for(let j=0; j<=word2.length + 1; j++) {
      lcsArr[i] = new Array(word2.length + 1)
    }
  }


  for(let i=0; i<=word1.length; i++) {
    for(let j=0; j<=word2.length; j++) {

      // 默认矩阵的横竖起始位置都是0
      if(i==0 || j==0) {
        lcsArr[i][j] = 0
        console.log(`${i} - ${j} : `,  lcsArr[i][j])
        continue
      } 

      // 如果当前位置的两个字符比对相等，则匹配数等于各自前一个字符匹配数 + 1
      if(word1[i-1] === word2[j-1]) {
        lcsArr[i][j] = lcsArr[i-1][j-1] + 1
      // 否则未匹配的话需要重新计算匹配数  
      } else {
        lcsArr[i][j] = 0
      }

      // 获取最大的匹配数和匹配的最终位置
      if(max < lcsArr[i][j]) {
        max = lcsArr[i][j]
        index = j
      }
    }
  }

  let str = ''
  if(max === 0) {
    return ''
  } else {
    // 获取匹配的字符串
    for(let i = index - max; i<=max; i++) {
      str += word2[i]
    }
  }

  return str
}


// [0, 0, 0, 0, 0, 0, 0, 0, 0]
// [0, 0, 1, 0, 0, 0, 0, 0, 0]
// [0, 0, 0, 2, 1, 1, 1, 1, 0]
// [0, 0, 0, 1, 3, 2, 2, 2, 0]
// [0, 0, 0, 1, 2, 4, 3, 3, 0]
// [0, 0, 0, 1, 2, 3, 5, 4, 0]
// [0, 0, 0, 0, 0, 0, 0, 0, 5]
// [0, 1, 0, 0, 0, 0, 0, 0, 0]

// 查看斜角的规律

lcs('a1111bc', 'ca11111b')