function convertToRoman(num) {
  let romanNum = ""
  while(num > 0){
  switch(true){
    case num >= 1000:
    romanNum += 'M';
    num -= 1000; 
    console.log('M')
    break;
    case num >= 900:
    romanNum += 'CM';
    num -= 900; 
    console.log('CM'); 
    break;
    case num >= 500:
    romanNum += 'D';
    num -= 500; 
    console.log('D')
    break;
    case num >= 400:
    romanNum += 'CD';
    num -= 400; 
    console.log('CD')
    break;
    case num >= 100:
    romanNum += 'C';
    num -= 100; 
    console.log('C')
    break;
    case num >= 90:
    romanNum += 'XC';
    num -= 90; 
    console.log('XC')
    break;
    case num >= 50:
    romanNum += 'L';
    num -= 50; 
    console.log('L')
    break;
    case num >= 40:
    romanNum += 'XL';
    num -= 40; 
    console.log('XL')
    break;
    case num >= 10:
    romanNum += 'X';
    num -= 10; 
    console.log('X')
    break;
    case num >= 9:
    romanNum += 'IX';
    num -= 9; 
    console.log('IX')
    break;
    case num >= 5:
    romanNum += 'V';
    num -= 5; 
    console.log('V')
    break;
    case num >= 4:
    romanNum += 'IV';
    num -= 4; 
    console.log('IV')
    break;
    case num >= 1:
    romanNum += 'I';
    num -= 1; 
    console.log('I')
    break;
    
  }
  }
 return romanNum;
}

console.log(convertToRoman(9));
