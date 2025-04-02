export function formatNumber(number) {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber)) {
        return '0'; // Default fallback
    }
    return new Intl.NumberFormat('en-US').format(number);
}
