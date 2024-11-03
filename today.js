 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return new Date(aestTime); // Return the formatted date and time
};

module.exports.getHours = function getHours() {
    // Get the current date and time in the timezone "Eastern Standard Time"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Eastern Standard Time"});
    return new Date(aestTime); // Return the formatted date and time
};
