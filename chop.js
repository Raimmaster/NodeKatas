function chop(int_number, sorted_array_of_ints)
{
    return internal_chop(int_number, sorted_array_of_ints, 0, sorted_array_of_ints.length);
}

function internal_chop(int_number, sorted_array_of_ints, lower_limit, upper_limit)
{
    if(upper_limit >= lower_limit)
    {
        middle_index = lower_limit + Math.floor((upper_limit - lower_limit) / 2);
        let middle_number = sorted_array_of_ints[middle_index];

        if(int_number === middle_number)
        {
            return middle_index;
        }

        if(int_number > middle_number)
        {
            lower_limit = middle_index + 1;
            return internal_chop(int_number, sorted_array_of_ints, lower_limit, upper_limit);
        }else if(int_number < middle_number)
        {
            let upper_limit = middle_index - 1;
            return internal_chop(int_number, sorted_array_of_ints, lower_limit, upper_limit);
        }
    }

    return -1;
}

let arr = [-4, -2, 0, 2, 7];

console.log("Chop for 2: " + chop(2, arr) );
console.log("Chop for 1: " + chop(1, arr) );
console.log("Chop for -4: " + chop(-4, arr) );
