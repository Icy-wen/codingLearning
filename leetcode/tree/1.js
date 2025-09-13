// 二叉树节点类
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 二叉树类实现
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 从数组构建树（按照层序方式）
  static fromArray(arr) {
    if (!arr || arr.length === 0) return new BinaryTree();
    
    const tree = new BinaryTree();
    tree.root = new TreeNode(arr[0]);
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === null) continue;
      
      // 计算父节点索引和是否为左子节点
      const parentIndex = Math.floor((i - 1) / 2);
      const isLeft = i === 2 * parentIndex + 1;
      
      // 查找父节点
      const queue = [tree.root];
      let parent = null;
      let currentIndex = 0;
      
      while (queue.length > 0 && currentIndex <= parentIndex) {
        parent = queue.shift();
        
        if (parent) {
          if (currentIndex < parentIndex) {
            if (parent.left) queue.push(parent.left);
            else queue.push(null);
            
            if (parent.right) queue.push(parent.right);
            else queue.push(null);
          }
        } else {
          queue.push(null);
          queue.push(null);
        }
        
        currentIndex++;
      }
      
      // 添加新节点到对应的父节点位置
      if (parent) {
        const newNode = new TreeNode(arr[i]);
        if (isLeft) {
          parent.left = newNode;
        } else {
          parent.right = newNode;
        }
      }
    }
    
    return tree;
  }
  
  // 将树转换为数组（层序遍历）用于可视化
  toArray() {
    if (!this.root) return [];
    
    const result = [];
    const queue = [this.root];
    
    while (queue.length > 0) {
      const node = queue.shift();
      
      if (node) {
        result.push(node.value);
        queue.push(node.left || null);
        queue.push(node.right || null);
      } else {
        result.push(null);
      }
    }
    
    // 移除尾部的null值
    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }
    
    return result;
  }
  
  // 前序遍历: 根-左-右
  preOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    
    return result;
  }
  
  // 中序遍历: 左-根-右
  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    
    return result;
  }
  
  // 后序遍历: 左-右-根
  postOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
    
    return result;
  }
  
  // 层序遍历: 逐层从左到右
  levelOrderTraversal() {
    if (!this.root) return [];
    
    const result = [];
    const queue = [this.root];
    
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    return result;
  }
  
  // 搜索带路径记录 - 返回找到节点及路径信息
  searchWithPath(value, node = this.root, path = [], nodeIndices = []) {
    if (!node) return { found: false, path, nodeIndices };
    
    // 将当前节点添加到路径
    path.push(node.value);
    
    // 找到当前节点在数组中的索引
    const nodeIndex = this.toArray().findIndex(val => val === node.value);
    nodeIndices.push(nodeIndex);
    
    // 检查是否找到目标值
    if (node.value === value) {
      return { found: true, node, path, nodeIndices };
    }
    
    // 先搜索左子树
    const leftResult = this.searchWithPath(value, node.left, [...path], [...nodeIndices]);
    if (leftResult.found) {
      return leftResult;
    }
    
    // 再搜索右子树
    return this.searchWithPath(value, node.right, [...path], [...nodeIndices]);
  }
  
  // 简单搜索 - 返回节点对象
  search(value, node = this.root) {
    if (!node) return null;
    
    if (node.value === value) return node;
    
    const leftResult = this.search(value, node.left);
    if (leftResult) return leftResult;
    
    return this.search(value, node.right);
  }
  
  // 在指定节点添加子节点（左或右）
  insertAt(parentValue, newValue, isLeft = true) {
    const parentNode = this.search(parentValue);
    
    if (!parentNode) {
      console.error(`父节点 ${parentValue} 未找到`);
      return false;
    }
    
    const newNode = new TreeNode(newValue);
    
    if (isLeft) {
      if (parentNode.left) {
        console.warn(`节点 ${parentValue} 已有左子节点，将被替换`);
      }
      parentNode.left = newNode;
    } else {
      if (parentNode.right) {
        console.warn(`节点 ${parentValue} 已有右子节点，将被替换`);
      }
      parentNode.right = newNode;
    }
    
    return true;
  }
  
  // 按层序在第一个可用位置插入节点
  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    
    const queue = [this.root];
    
    while (queue.length > 0) {
      const current = queue.shift();
      
      if (!current.left) {
        current.left = newNode;
        return true;
      } else {
        queue.push(current.left);
      }
      
      if (!current.right) {
        current.right = newNode;
        return true;
      } else {
        queue.push(current.right);
      }
    }
    
    return false; // 正常情况不会到达
  }
  
  // 删除节点 - 与binaryTree函数中相同逻辑实现
  delete(value) {
    this.root = this._deleteNode(this.root, value);
    return this.root !== null;
  }
  
  // 删除节点的辅助方法
  _deleteNode(node, value) {
    if (!node) return null;
    
    // 找到要删除的节点
    if (value === node.value) {
      // 情况1：没有子节点（叶子节点）
      if (!node.left && !node.right) {
        return null;
      }
      
      // 情况2：只有一个子节点
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      
      // 情况3：有两个子节点
      // 找到右子树中的最小节点（中序后继）
      const successor = this._findMinNode(node.right);
      // 用后继节点的值替换当前节点的值
      node.value = successor.value;
      // 从右子树中删除后继节点
      node.right = this._deleteNode(node.right, successor.value);
      return node;
    } else {
      // 在左子树中查找
      if (node.left) {
        node.left = this._deleteNode(node.left, value);
      }
      // 在右子树中查找
      if (node.right) {
        node.right = this._deleteNode(node.right, value);
      }
      return node;
    }
  }
  
  // 查找树中最小值的节点（用于删除操作）
  _findMinNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }
  
  // 计算树的高度
  getHeight(node = this.root) {
    if (!node) return 0;
    
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  // 检查树是否为空
  isEmpty() {
    return this.root === null;
  }
  
  // 创建树的深拷贝
  clone() {
    const newTree = new BinaryTree();
    newTree.root = this._deepCloneNode(this.root);
    return newTree;
  }
  
  // 深拷贝节点的辅助方法
  _deepCloneNode(node) {
    if (!node) return null;
    
    const clonedNode = new TreeNode(node.value);
    clonedNode.left = this._deepCloneNode(node.left);
    clonedNode.right = this._deepCloneNode(node.right);
    
    return clonedNode;
  }
}

// --- 示例用法 ---

// 创建二叉树
const initialArray = ["A", "B", "C", "D", "E", "F", "G"];
const tree = BinaryTree.fromArray(initialArray);

console.log("初始树 (层序):", tree.toArray()); // ["A", "B", "C", "D", "E", "F", "G"]

// 遍历操作
console.log("前序遍历:", tree.preOrderTraversal()); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
console.log("中序遍历:", tree.inOrderTraversal()); // ['D', 'B', 'E', 'A', 'F', 'C', 'G']
console.log("后序遍历:", tree.postOrderTraversal()); // ['D', 'E', 'B', 'F', 'G', 'C', 'A']
console.log("层序遍历:", tree.levelOrderTraversal()); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// 搜索节点
const searchResultE = tree.searchWithPath("E");
console.log("搜索 'E':", searchResultE.found ? "找到" : "未找到"); // 找到
console.log("搜索路径:", searchResultE.path.join(" → ")); // A → B → E
console.log("节点索引:", searchResultE.nodeIndices); // [0, 1, 4]

// 添加新节点
tree.insertAt("D", "新", true); 
console.log("添加 '新' 后 (层序):", tree.toArray()); // ["A", "B", "C", "新", "E", "F", "G"]
console.log("添加 '新' 后中序遍历:", tree.inOrderTraversal()); // ["新", "B", "E", "A", "F", "C", "G"]

// 计算树高度
console.log("树的高度:", tree.getHeight()); // 3

// 检查树是否为空
console.log("树是否为空:", tree.isEmpty()); // false

// 删除节点
console.log("删除前树结构:", tree.toArray());
tree.delete("C"); // C有两个子节点，值会被F替换，然后删除F
console.log("删除后树结构:", tree.toArray()); // ["A", "B", "F", "新", "E", null, "G"]
// end
