//直接递归会超时
var climbStairs = function(n) {
   
    // 备忘录
      let memo = new Array(n + 1).fill(0);
  
      // 定义：爬到第 n 级台阶的方法个数为 dp(n)
      // @visualize status(n)
      function dp(n) {
          // base case
          if (n <= 2) {
              return n;
          }
          if (memo[n] > 0) {
              return memo[n];
          }
          // 状态转移方程：
          // 爬到第 n 级台阶的方法个数等于爬到 n - 1 的方法个数和爬到 n - 2 的方法个数之和。
          memo[n] = dp(n - 1) + dp(n - 2);
          return memo[n];
      }
  
      return dp(n);
  };


  // 动态规划
  //倒着推
  var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1; // 1 级台阶只有一种方法
    dp[2] = 2; // 2 级台阶有两种方法
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // 第 i 级台阶的方法数等于第 i - 1 级和第 i - 2 级的方法数之和 
    } 
    return dp[n];
  }