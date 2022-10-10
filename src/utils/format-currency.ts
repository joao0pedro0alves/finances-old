export function formatCurrency(value: number = 0) {
    return "$ " + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
