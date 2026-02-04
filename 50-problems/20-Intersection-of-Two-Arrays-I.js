
// 350. Intersection of Two Arrays II

// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

let nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];

// const intersection = (nums1, nums2) => {
//     let arr = [];

//     for (let i = 0; i < nums1.length; i++){
//         for (let j = 0; j < nums2.length; j++){
//             if (nums1[i] == nums2[j]) {
//                 arr.push(nums1[i]);
//             }
//         }
//     }

//     // let set = new Set(arr)
//     // let newArr = [];
//     // for (let num of set) {
//     //     newArr.push(num);
//     // }


//     return [...new Set(arr)]
// }



// const intersection = (nums1, nums2) => {
//     let set1 = new Set(nums1);
//     let result = new Set();

//     for (let num of nums2){
//         if (set1.has(num)) {
//             result.add(num)
//         }
//     }

//     return [...result]
 
// }


const intersection = (nums1, nums2) => {
    let map = {};
    let result = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result

}


let test = intersection(nums1, nums2);
console.log(test);
