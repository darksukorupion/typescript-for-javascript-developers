export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
}

bmi(1.73, 60, true);

// bmi(身長, 体重, console.logで出力するか否か)
// bmi(1.73, 60, ture);
// bmi(1.73, 60, false);
// bmi(1.73, 60);
