let rowNumberSection = document.querySelector(".row-number-section");

let formulaBarSelectedCellArea = document.querySelector(".selected-cell-div");

let cellSection = document.querySelector(".cell-section");
let columnTagsSection = document.querySelector(".column-tag-section");

let lastCell;
let  dataObj = {};



cellSection.addEventListener("scroll", function (e) {
  rowNumberSection.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;

  columnTagsSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
});

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.innerText = i;
  div.classList.add("row-number");
  rowNumberSection.append(div);
}

for (let i = 0; i < 26; i++) {
  let asciiCode = 65 + i;

  let reqAlphabet = String.fromCharCode(asciiCode);

  let div = document.createElement("div");
  div.innerText = reqAlphabet;
  div.classList.add("column-tag");
  columnTagsSection.append(div);
}

for (let i = 1; i <= 100; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  //i = 1 [A1,B1..........Z1]
  //i = 2 []
  //.
  //.
  //i = 100 [A100.........z100]

  for (let j = 0; j < 26; j++) {
    //i = 100   j = 25  asciiCode = 65+25=90  alpha = z  cellAdd = Z100
    // A to Z
    let asciiCode = 65 + j;

    let reqAlphabet = String.fromCharCode(asciiCode);

    let cellAddress = reqAlphabet + i;
    dataObj[cellAddress] = {
      value: undefined,
      formula : undefined,
      upstream : [],
      downstream : [],
    };


    let cellDiv = document.createElement("div");

    // cellDiv.contentEditable = true
    cellDiv.addEventListener("input", function(e){

      let currCellAddress = e.currentTarget.getAttribute("data-address");

      let currCellObj = dataObj[currCellAddress];

      currCellObj.value = e.currentTarget.innerText;

      currCellObj.formula = undefined;

      let currUpStream = currCellObj.upstream;

      for(let k =0 ; k< currUpStream.length ; k++)
      {
          removeFromDownStream(currUpStream[k], currCellAddress);

      }
      currCellObj.upstream=[];

      let currDownstream = currCellObj.downstream;

      for(let i=0 ; i < currDownstream.length ; i++)
      {
        updateCell(currDownstream[i]);
      }

      dataObj[currCellAddress]= currCellObj ;

      console.log(dataObj);
      
    });
   
    cellDiv.setAttribute("contentEditable", true);
    cellDiv.classList.add("cell");
    cellDiv.setAttribute("data-address", cellAddress);

    cellDiv.addEventListener("click", function (e) {
      if (lastCell) {
        lastCell.classList.remove("cell-selected");
      }

      e.currentTarget.classList.add("cell-selected");

      lastCell = e.currentTarget;

      let currCellAddress = e.currentTarget.getAttribute("data-address");

      formulaBarSelectedCellArea.innerText = currCellAddress;
    });

    rowDiv.append(cellDiv);
  }

  cellSection.append(rowDiv);
}

  dataObj["A1"].value =20;
  dataObj["A2"].downstream =["B1"];
  dataObj["B1"].formula = " 2* A1";
  dataObj["B1"].upstream = ["A1"];
  dataObj["B1"].value = 40;

  let a1cell = document.querySelector("[data-address='A1']");
  let b1cell = document.querySelector("[data-address='B1']") ;

  a1cell.innerText =20;
  b1cell.innerText =40;

function removeFromDownStream(parentCell , childCell)
{

  let  parentDownStream = dataObj[parentCell].downstream;

  let filteredDownStream = [];

  for( let i=0 ; i<parentDownStream.length ; i++)
  {
    if(parentDownStream[i] != childCell);
    filteredDownStream.push(parentDownStream[i]);

  }

  dataObj[parentCell].downstream = filteredDownStream;
}

function updateCell(cell){
   let cellObj = dataObj[cell];
   let upstream = cellObj.upstream;
   let formula = cellObj.formula;

   let valObj = {};

   for(let i=0 ; i< upstream.length ; i++)
   {
     let cellValue = dataObj[upstream[i]].value;
      valObj[upstream[i]] = cellValue;

   }

   for(let key in valObj)
   {
     formula = formula.replace(key , valObj[key]);

   }
   let newValue = eval(formula);
   
}