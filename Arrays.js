function mayorArray(arr) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let mayor = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
          mayor = arr[i];
        }
      }
      console.log("Elementos del array:");
      let j = 0;
      while (j < arr.length) {
        console.log(arr[j]);
        j++;
      }
      let contadorImpares = 0;
      let k = 0;
      do {
        if (arr[k] % 2 !== 0) {
          contadorImpares++;
        }
        k++;
      } while (k < arr.length);
      return mayor;
    }
  }
  
//   Ejemplo de uso
  let miArray = [1, 5, 3, 8, 2];
  console.log("El mayor número es: " + mayorArray(miArray));
  