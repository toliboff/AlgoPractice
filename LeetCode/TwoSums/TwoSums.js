/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let result =[];
  for (let i=0;i<nums.length;i++){
      let num1 = nums[i]
       for (let j=1;j<nums.length;j++){
           if(num1+nums[j]==target){
               result.push(i,j);
               return result
           }
       }
  }
};