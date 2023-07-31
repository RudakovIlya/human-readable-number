module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convert(num) {
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        const ten = Math.floor(num / 10);
        const unit = num % 10;
        return tens[ten] + (unit > 0 ? " " + ones[unit] : "");
    }

    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;

    let readable = "";
    if (hundreds > 0) {
        readable += ones[hundreds] + " hundred";
        if (remainder > 0) readable += " ";
    }

    if (remainder > 0) {
        readable += convert(remainder);
    }

    return readable;
};
