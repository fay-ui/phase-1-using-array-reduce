const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, element) {
    return total + element; // Correctly sum the total and element
}, 0); // Initialize the accumulator to 0

console.log(totalBatteries); // Outputs: 31