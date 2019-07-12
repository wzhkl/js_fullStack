- 最简单的排序算法
  1. 冒泡排序 bubbleSort
  排序的过程，两两相比较，如果 j 位置小于 i 位置上的数，互换
  一次外层循环，将一个数排好
  两重循环
  每次内层循环要执行  len-i-1
  i = 0;  i < length - 1;  i++
  j = 0; j < len - 1 - i; j++
  时间复杂度 n^2
  2. 快速排序 quickSort
  抽象： [a b(基准) c]   [8, 2, 5(基准), 9, 7]
  递归
  时间复杂度 nlogN
  3. 选择排序 selectionSort
  
- 中序遍历 inorder_travelsal
  [1, null, 2, 3]