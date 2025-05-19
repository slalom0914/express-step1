import number, {str, arr, hap, Sonata} from './module'
console.log(number);
console.log(str);
console.log(arr);
console.log(hap(1,2));
const myCar = new Sonata();
console.log(myCar.wheelNum);//4
console.log(myCar.speed);//0
myCar.speedUp()
console.log(myCar.speed);//1
myCar.speedUp()
console.log(myCar.speed);//2
myCar.speedUp()
console.log(myCar.speed);//3