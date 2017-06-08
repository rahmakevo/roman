function convertnumbers(numbers){
  // Symbol  Value
  //       I       1
  //       V       5
  //       X       10
  //       L       50
  //       C       100
  //       D       500
  //       M       1,000
  if (numbers<0 || numbers>3999) {
    return "The number is not compatible";
  }
  else if (numbers<1) {
    return "";
  }
  else if (numbers<=1000) {
    return "M" + convertnumbers(numbers-1000);
  }
  else if (numbers<=900) {
    return "CM" + convertnumbers(numbers-900);
  }
  else if (numbers<=500) {
    return "D" + convertnumbers(numbers-500);
  }
  else if (numbers<=400) {
    return "CD" + convertnumbers(numbers-400);
  }
  else if (numbers<=100) {
    return "C" + convertnumbers(numbers-100);
  }
  else if (numbers<=90) {
    return "XC" + convertnumbers(numbers-90);
  }
  else if (numbers<=50) {
    return "L" + convertnumbers(numbers-50);
  }
  else if (numbers<=40) {
    return "XL" + convertnumbers(numbers-40);
  }
  else if (numbers<=10) {
    return "x" + convertnumbers(numbers-10);
  }
  else if (numbers<=9) {
    return "IV" + convertnumbers(numbers-9);
  }
  else if (numbers<=5) {
    return "V" + convertnumbers(numbers-5);
  }
  else if (numbers<=4) {
    return "IV" + convertnumbers(numbers-4);
  }
  else {
    return "Stop joking young man";
  }
}
