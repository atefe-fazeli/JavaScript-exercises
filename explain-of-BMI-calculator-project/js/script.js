let $ = document;
let weightElem = $.getElementById("weight");
let heightElem = $.getElementById("height");
let weightSpan = $.getElementById("weight-val");
let heightSpan = $.getElementById("height-val");
let result = $.getElementById("result");
let category = $.getElementById("category");

function BMIcalculator() {
  weightSpan.innerHTML = `${weightElem.value} kg`;
  heightSpan.innerHTML = `${heightElem.value} cm`;

  let height = Math.pow(heightElem.value / 100, 2);
  let BMI = (weightElem.value / height);
  result.innerHTML =(BMI).toFixed(1) ;

  console.log(BMI);

  if (BMI < 18.5) {
    category.innerHTML = "لاغر";
  } else if (BMI > 18.5 && BMI < 24.9) {
    category.innerHTML = "نرمال";
  } else if (BMI > 25 && BMI < 29.9) {
    category.innerHTML = "اضافه وزن";
  } else if (BMI > 30) {
    category.innerHTML = "چاق";
  }
}

weightElem.addEventListener("input", BMIcalculator);
heightElem.addEventListener("input", BMIcalculator);
