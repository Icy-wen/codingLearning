var maxSlidingWindow = function(nums, k) {
    const n = nums.length;           // 获取数组长度
    const q = [];                    // 初始化单调队列（存储下标）
    
    // 处理第一个窗口（前k个元素）
    for (let i = 0; i < k; i++) {
        // 移除队列中所有小于等于当前元素的下标
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);                   // 当前下标入队
        console.log(q);
    }

    const ans = [nums[q[0]]];        // 第一个窗口的最大值
    
    // 处理剩余窗口（从第k个元素开始）
    for (let i = k; i < n; i++) {
        // 维护队列单调性：移除所有小于等于当前元素的下标
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);                   // 当前下标入队
        
        // 移除已经不在当前窗口内的队首元素
        while (q[0] <= i - k) {
            q.shift();
        }
        console.log(q);
        ans.push(nums[q[0]]);        // 当前窗口的最大值
    }
    
    return ans;                      // 返回所有窗口的最大值
};
maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)