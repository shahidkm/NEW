function reverse(x) {
    const INT_MAX = 2147483647;  
    const INT_MIN = -2147483648; 

    let result = 0;
    let isNegative = x < 0;
    let num = Math.abs(x);

    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10);

        
        if (result > (INT_MAX - digit) / 10) {
            return 0;
        }

        result = result * 10 + digit;
    }

    result = isNegative ? -result : result;

    
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }

    return result;
}
