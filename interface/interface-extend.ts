//Estendendo interfaces
interface Color {
  color: string;
}

interface wheelSize {
  wheelSize: number; 
}

interface Car extends Color, wheelSize {
  //brand = marca
  brand: string;
}

const myCar = <Car>{};
myCar.color = "white";
myCar.brand = "Tesla";
myCar.wheelSize = 16;

console.log(myCar);
