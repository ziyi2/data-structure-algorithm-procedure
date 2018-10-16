/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 09:08:27  
 * @Desc:   二叉树
 */


/*
二叉树

根节点：一颗树最上面的节点称为根节点（没有父节点的节点称为根节点）。
叶子节点：没有任何子节点的节点称为叶子节点。

二叉树中的任何节点的子节点个数不超过2个。

树中任何一层的节点可以都看做是子树的根。

树可以分为几个层次，根节点是第0层，它的子节点是第1层，子节点的子节点是第2层。

深度：定义树的层数就是树的深度。
键： 每个节点的都有与之相关的值，该值被称为键。

左子节点：父节点的左侧子节点（节点的键相对与父节点较小的保存在左节点中）
右子节点：父节点的右侧子节点。（节点的键相对与父节点较大的保存在右节点中）

 */




 /** 
  * @Author: zhuxiankang 
  * @Date:   2018-10-15 19:58:30  
  * @Desc:   树节点 
  * @Parm:    
  */ 
 function Node(data, left, right) {
   this.data = data
   this.left = left
   this.right = right
 }


 /** 
  * @Author: zhuxiankang 
  * @Date:   2018-10-15 19:58:41  
  * @Desc:   显示树节点的数据 
  * @Parm:    
  */ 
 Node.prototype.show = function() {
   return this.data
 }


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 19:59:39  
 * @Desc:   二叉查找树 
 * @Parm:    
 */
function BST() {
  this.root = null
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 20:00:32  
 * @Desc:   插入节点 
 * @Parm:    
 */
BST.prototype.insert = function(data) {
  let newNode = new Node(data, null, null)
  // 1. 当前二叉树没有根节点，则创建的是根节点
  if(this.root === null) {
    this.root = newNode
    return
  }

  var currentNode = this.root
  var parent

  while(true) {
    parent = currentNode
    // 如果数据小于当前节点，则插入的节点应该是当前节点的左子节点
    if(data < currentNode.data) {
      currentNode = currentNode.left
      // 当前左子节点已经存在，则继续遍历该节点
      // 如果当前节点没有左子节点，则待插入的节点就是当前节点的左子节点
      if(currentNode === null) {
        parent.left = newNode
        break
      }
    } else {
      currentNode = currentNode.right
      // 和左节点同理
      if(currentNode === null) {
        parent.right = newNode
        break
      }
    }
  }
}


let bst = new BST()

bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)


/*
二叉树遍历

中序：按照节点上的键值，按照升序方式访问BST上的所有节点。
先序：先访问根节点，然后以同样的方式访问左子树和右子树。
后序：先访问叶子节点，从左子树到右子树，再到根节点。

 */



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 20:28:40  
 * @Desc:    中序遍历
 * @Parm:    
 */
BST.prototype.inOrder = function(node) {
  // 当前遍历的节点存在，则继续遍历
  if(node !== null) {
    // 先遍历左子树的左子节点
    this.inOrder(node.left)
    // 如果左子节点是叶子节点则打印该叶子节点的键值
    console.log(node.show())
    // 同理遍历右子节点
    this.inOrder(node.right)
  }
}


bst.inOrder(bst.root) 



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 20:54:23  
 * @Desc:   先序遍历 
 * @Parm:    
 */
BST.prototype.preOrder = function(node) {
  if(node !== null) {
    console.log(node.show())
    this.preOrder(node.left)
    this.preOrder(node.right)
  }
}

bst.preOrder(bst.root)

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 20:57:41  
 * @Desc:   后序遍历 
 * @Parm:    
 */
BST.prototype.postOrder = function(node) {
  if(node !== null) {
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.show())
  }
}

bst.postOrder(bst.root)


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 21:01:18  
 * @Desc:   二叉树查找 - 查找最大值 
 * @Parm:    
 */
BST.prototype.getMax = function(root) {
  var currentNode = root
  while(currentNode.right !== null) {
    currentNode = currentNode.right
  }
  return currentNode
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 21:01:57  
 * @Desc:   二叉树查找 - 查找最小值 
 * @Parm:    
 */
BST.prototype.getMin = function(root) {
  var currentNode = root
  while(currentNode.left !== null) {
    currentNode = currentNode.left
  }
  return currentNode
}

console.log(bst.getMax(bst.root))
console.log(bst.getMin(bst.root))


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-15 21:04:52  
 * @Desc:   二叉树查找 - 查找特定值 
 * @Parm:    
 */

 BST.prototype.get = function(data) {
   var currentNode = this.root
   while(currentNode !== null) {
     if(currentNode.data === data) {
       return currentNode
     // 当前节点的值比查找值小，则需要查看当前节点的右子节点  
     } else if(currentNode.data < data) {
       currentNode = currentNode.right
     } else {
       currentNode = currentNode.left
     }
   }
   return null
 }


 console.log(bst.get(3))


 /** 
  * @Author: zhuxiankang 
  * @Date:   2018-10-16 08:54:56  
  * @Desc:   二叉树删除节点 
  * @Parm:    
  */ 
 BST.prototype.remove = function(node, data) {
   if(data == null) {
     return null
   }

   if(data === node.data) {
      // 当前待删除的节点没有子节点
      if(node.left === null && node.right === null) {
        // 设置指向待删除节点的父节点指向null
        return null
      } 

      // 当前待删除的节点没有左节点
      if(node.left === null) {
        // 设置指向待删除节点的父节点指向待删除节点的右节点
        return node.right
      }

      // 当前待删除的节点没有右节点
      if(node.right === null) {
        // 设置指向待删除节点的父节点指向待删除节点的左节点
        return node.left
      }

      // 当前待删除的节点既有左节点也有右节点
      // 寻找右子树中最小键值的节点，放置待删除节点位置
      // 因为右子树最小键值的节点肯定比左子树最大键值的节点大，比右子树中的所有节点小
      // 符合二叉树键值小与父节点的节点放在左子节点，键值大与父节点的节点放在右子节点的定律
      let tempNode = this.getMin(node.right)
      // 将最小键放置在待删除节点的位置
      node.data = tempNode.data
      // 删除被移动的节点
      node.right = this.remove(node.right, tempNode.data)
      // 需要注意返回值会被递归使用
      return node

   // 需要删除的节点在左子节点中
   } else if(data < node.data) {
     node.left = this.remove(node.left, data)
     // 需要注意返回值会被递归使用
     return node
   // 需要删除的节点在右子节点中  
   } else {
     node.right = this.remove(node.right, data)
     // 需要注意返回值会被递归使用
     return node
   }
 }


 console.log(bst.root)

 console.log(bst.remove(bst.root, 45))
 console.log(bst.root)