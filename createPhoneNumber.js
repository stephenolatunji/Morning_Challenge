function createPhoneNumber(number) {
    if (number.length = 10) {

        let phone = number.split('');
        let style = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}- ${phone[6]}${phone[7]}${phone[8]}${phone[9]}`

        return style;
    }
}
createPhoneNumber("1234567890");


