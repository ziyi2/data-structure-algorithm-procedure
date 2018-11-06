/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-06 09:04:04  
 * @Desc:   贪心算法 
 */

/** 
 *
 * 动态规划算法可以用于优化通过次优算法找到的解决方案——这些方案通常是基于递归方案实现的。
 * 
 * 对许多问题来说，采用动态规划的方式去处理有点大材小用，往往一个简单的算法就够了。

   贪心算法就是一种比较简单的算法。贪心算法总是会选择当下的最优解，而不去考虑这一次的选择会不会对未来的选择造成影响。
   
   使用贪心算法通常表明，实现者希望做出的这一系列局部“最优”选择能够带来最终的整体“最优”选择。
   
   如果是这样的话，该算法将会产生一个最优解，否则，则会得到一个次优解。
   
   然而，对很多问题来说，寻找最优解很麻烦，这么做不值得，所以使用贪心算法就足够了。
 */


 /** 
  * @Author: zhuxiankang 
  * @Date:   2018-11-06 09:06:18  
  * @Desc:   找零问题(人民币类型10元、5元、1元，例如找零19元) 
  * @Parm:    
  */ 
 function makeChange(origAmt) {
  let remainAmt = origAmt
  let rmbs = []

  // 最优解，如果可以找零10元面值的，优先使用10元面值
  if(remainAmt >= 10) {
    num = parseInt(remainAmt / 10)
    remainAmt = remainAmt % 10
    rmbs.push(num)
  } else {
    rmbs.push(0)
  }

  // 次优解，如果可以找零5元面值的，次优先使用5元面值
  if(remainAmt >= 5) {
    num = parseInt(remainAmt / 5)
    remainAmt = remainAmt % 5
    rmbs.push(num)
  } else {
    rmbs.push(0)
  }

  // 最差解，实在不行，则使用1元面值的硬币
  if(remainAmt >= 1) {
    num = parseInt(remainAmt / 1)
    rmbs.push(num)
  } else {
    rmbs.push(0)
  }

  return rmbs
 }


 console.log(makeChange(19)) // 1 1 4


/** 
 *
 * 背包问题
 * 
 * 如果放入背包的物品从本质上说是连续的，那么就可以使用贪心算法来解决背包问题。
 * 
 * 换句话说，该物品必须是不能离散计数的，比如布匹和金粉。如果用到的物品是连续的，那么可以简单地通过物品的单价除以单位体积来确定物品的价值。
 * 
 * 在这种情况下的最优解是，先装价值最高的物品直到该物品装完或者将背包装满，接着装价值次高的物品，直到这种物品也装完或将背包装满，以此类推。
 * 
 * 我们不能通过贪心算法来解决离散物品问题的原因，是因为我们无法将“半台电视”放入背包。
 * 
 * 离散背包问题也称为“0-1”问题，因为你必须放入整个物品或者不放入。
 * 
 * 这种类型的背包问题被称为部分背包问题。以下算法用于解决部分背包问题。
 * 
 * (1) 背包的容量为W，物品的价格为v，重量为w。
 * 
 * (2) 根据v/w 的比率对物品排序。
 * 
 * (3) 按比率的降序方式来考虑物品。
 * 
 * (4) 尽可能多地放入每个物品。
 */


/*
物品    A     B     C     D
价格    50    140   60    60
尺寸    5     20    10    12
比率    10    7     6     5

因此A物品的价值最高，应该优秀考虑放入背包，B物品的价值次高，其次考虑放入背包....
*/

function ksack(values, weights, capacity) {
  var load = 0
  var i = 0
  var w = 0
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity-load)) {
      w += values[i]
      load += weights[i]
    }
    else {
      var r = (capacity-load)/weights[i]
      w += r * values[i]
      load += weights[i]
    }
    ++i
  }
  return w
}


var items = ["A", "B", "C", "D"]
var values = [50, 140, 60, 60] // 价值高的物品放在前面
var weights = [5, 20, 10, 12]
var capacity = 30
console.log(ksack(values, weights, capacity))
