function solution(nums) {
    const maxNumOfPokemons = nums.length / 2;
    const uniquePokemons = new Set(nums);

    return Math.min(uniquePokemons.size, maxNumOfPokemons);
}
