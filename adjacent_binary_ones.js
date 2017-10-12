function get_combinations_of_not_adjacent_ones(num_digits)
{
    let base = 2;
    let num_combinations = Math.pow(base, num_digits);
    let combinations = [];
    for(let i = 0; i < num_combinations; ++i)
    {
        let bin_string = Number(i).toString(2);

        let previous_digit_was_one = false;
        let two_adjacent_ones = false;
        for(let digit of bin_string)
        {
            if(digit === '1')
            {
                if(previous_digit_was_one)
                {
                    two_adjacent_ones = true;
                    break;
                }
                previous_digit_was_one = true;
            }else
            {
                previous_digit_was_one = false;
            }
        }

        if(!two_adjacent_ones)
        {
            combinations.push(bin_string);
        }
    }

    return combinations;
}

let n = 23;
console.log("Combinations of " + n + " digits amount to: " + get_combinations_of_not_adjacent_ones(n).length);
