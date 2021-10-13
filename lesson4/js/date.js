// let dt = new Date();
// document.getElementById("date").innerHTML = dt.toLocaleDateString();
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleDateString('en-US', options));
// → "Thursday, December 20, 2012, UTC"