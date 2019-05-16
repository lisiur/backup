use std::collections::HashMap;

pub fn clarinet() {
    super::super::voice::breathe_in()
}

fn test() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let teams = vec![String::from("Blue"), String::from("Yellow")];
    let initial_scores = vec![10, 50];

    let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();
}

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let a: i32;
        let b: i32;
        for (i, va) in nums.iter().enumerate() {
            for (j, vb) in nums[i..].iter().enumerate() {
                if va + vb == target {
                    a = i as i32;
                    b = j as i32;
                    break;
                }
            }
        }
        vec![a, b]
    }
}