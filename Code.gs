function cleanEndowment() {
  let spreadsheet = SpreadsheetApp.getActiveSheet();
  let range = spreadsheet.getRange("AB:AB");
  let values = range.getValues();
  for (let i = 0; i < values.length; i++) {
    let value = values[i][0];
    if (value != undefined && value != null ) {
      let array = value.split("");
      let num = 0;
      if (array[0] == "$") {
        array.shift();
      }
      if (array[array.length - 1] == "M") {
        array.pop()
        num = Number(array.join(""));
        num = num * 1000000;
      }
      if (array[array.length - 1] == "B") {
        array.pop();
        num = Number(array.join(""));
        num = num * 1000000000;
      }
      let index = i + 1;
      spreadsheet.getRange("AB" + index).setValue(num);
    }

  }
}


let sheetToPrintTo = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];

function main() {
  let spreadsheet = SpreadsheetApp.getActiveSheet();
  let range = spreadsheet.getDataRange();
  let values = range.getValues();
  divideToSchools(values)
}

function printSchool(schoolArray) {
  let row = [];
  for (let i = 0; i < schoolArray.length; i++) {
    if (i == 0) {
      row.push(schoolArray[i][0]);
      row.push("2020")
    }
    for (let j = 0; j < schoolArray[i].length; j++) {
      if (schoolArray[i][j] == "Address") {
        row[2] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Private/Public") {
        row[4] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Enrollment") {
        row[5] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Early Action Deadline") {
        row[6] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Regular Decision Deadline") {
        row[7] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Accepts Common App") {
        row[8] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "U.S. News College Ranking") {
        row[9] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("ACT Score")) {
        row[10] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j] == "Acceptance Rate") {
        row[11] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("GPA")) {
        row[12] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Fee")) {
        row[13] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Retention")) {
        row[14] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Tuition (In State)")) {
        row[15] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Tuition (Out of")) {
        row[16] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("R/B")) {
        row[17] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Books")) {
        row[18] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Debt")) {
        row[19] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("borrowed")) {
        row[20] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Financial Aid Deadline")) {
        row[21] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("applying for aid")) {
        row[22] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("grads who re")) {
        row[23] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("met in full")) {
        row[24] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Endowment")) {
        row[25] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("financial aid p")) {
        row[26] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("Avg non-need")) {
        row[27] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("% of non-need")) {
        row[28] = schoolArray[i][j + 1];
      }
      if (schoolArray[i][j].toString().includes("based loan")) {
        row[29] = schoolArray[i][j + 1];
      }
    }
  }
  if (row.length != 0) {
    sheetToPrintTo.appendRow(row);
  }
}

function divideToSchools(array) {
  let topRow = 0;
  let parsedArray = [];
  // parse rows
  for (let i = 0; i < array.length; i++) {
    // parse cells in rows
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == "2020") {
        let schoolBounds = [];
        for (let h = 0; h < i - topRow; h++) {
          schoolBounds.push(array[topRow + h])
        }
        parsedArray.push(schoolBounds);
        topRow = i;
      }
    }
  }
  for (let i = 0; i < parsedArray.length; i++) {
    printSchool(parsedArray[i]);
  }
}