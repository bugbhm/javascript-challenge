// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function createTable(data) {
  tbody.html("");

  // loop through data and append to table
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }


  createTable(filteredData);
}

// Attached an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
createTable(tableData);