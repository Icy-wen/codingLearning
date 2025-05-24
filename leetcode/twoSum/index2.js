var twoSum = function(nums, target) {
    var diffs={} //空间换时间
    for(let i=0;i<nums.length;i++){
        let found=target-nums[i]
        if(diffs[found]!==undefined){
            return [diffs[found],i]
        }
        diffs[nums[i]]=i
    }
};