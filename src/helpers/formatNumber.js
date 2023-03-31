export function formatMoney(number, type = 'VND') {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: type }).format(number);
}
