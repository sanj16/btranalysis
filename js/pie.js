
var data = [
    { state: 'Andhra Pradesh', value: 21992 },
    { state: 'Arunachal Pradesh', value: 216 },
    { state: 'Assam', value: 7731 },
    { state: 'Bihar', value: 9415.333333 },
    { state: 'Chhattisgarh', value: 13139.66667 },
    { state: 'Goa', value: 3174.666667 },
    { state: 'Gujarat', value: 16404.33333 },
    { state: 'Haryana', value: 10537.66667 },
    { state: 'Himachal Pradesh', value: 2740.666667 },
    { state: 'Jharkhand', value: 5544.666667 },
    { state: 'Karnataka', value: 5005.333333 },
    { state: 'Kerala', value: 38847.66667 },
    { state: 'Madhya Pradesh', value: 36389.66667 },
    { state: 'Maharashtra', value: 49110.66667 },
    { state: 'Manipur', value: 31204.33333 },
    { state: 'Meghalaya', value: 568.3333333 },
    { state: 'Mizoram', value: 365 },
    { state: 'Nagaland', value: 56 },
    { state: 'Odisha', value: 429.3333333 },
    { state: 'Punjab', value: 10714.33333 },
    { state: 'Rajasthan', value: 5993 },
    { state: 'Sikkim', value: 21445.66667 },
    { state: 'Tamil Nadu', value: 160 },
    { state: 'Telangana', value: 55544 },
    { state: 'Tripura', value: 20990.66667 },
    { state: 'Uttar Pradesh', value: 557.6666667 },
    { state: 'Uttarakhand', value: 1287 },
    { state: 'West Bengal', value: 39794.33333 },
    { state: 'Andaman and Nicobar Islands', value: 10681 },
    { state: 'Chandigarh', value: 208.3333333 },
    { state: 'Dadra and Nagar Haveli and Daman and Diu', value: 260 },
    { state: 'Delhi', value: 82.66666667 },
    { state: 'Lakshadweep', value: 48.33333333 },
    { state: 'Puducherry', value: 5434.333333 },
    { state: 'Jammu and Kashmir', value: 1.666666667 },
    { state: 'Ladakh', value: 1319.333333 }
];

// Sort data alphabetically by state names
data.sort((a, b) => a.state.localeCompare(b.state));

// Extract labels (state names) and values
var labels = data.map(item => item.state);
var values = data.map(item => item.value);

var uniqueColors = generateUniqueColors(data.length); // Generate unique colors

var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
type: 'pie',
data: {
labels: labels,
datasets: [{
data: values,
backgroundColor: uniqueColors,
borderColor: 'white',
borderWidth: 1
}]
},
options: {
animation: {
animateRotate: true,
animateScale: true
},
plugins: {
legend: {
display: false // Set display to false to hide the legend
}
},
layout: {
padding: {
left: 10,
right: 10,
top: 10,
bottom: 10
}
}
}
});


// Function to generate unique colors
function generateUniqueColors(count) {
    var colors = [];
    for (var i = 0; i < count; i++) {
        var color = 'rgba(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', 0.7)';
        colors.push(color);
    }
    return colors;
}