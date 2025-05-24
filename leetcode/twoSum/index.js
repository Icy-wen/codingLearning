var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let left=nums[i]

        for(let j=i+1;j<nums.length;j++){
            let right=nums[j]
            if(left+right===target){
                return [i,j]
            }
        }
    }
};