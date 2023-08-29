import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiensosService {

  pienso = [
    {
      animal: 'perro',
      nombre: 'SELECTED MINI SALMÓN NORUEGO',
      imagen: 'https://static.naturesvariety.com/catalog/8410650271644/3d-Pack/largeImage',
      caracteristicas: {
        tipo: 'Dry',
        edad: 'Adulto',
        tamano: 'Mini',
      },
      descripcion: 'Alimento completo y equilibrado para perros mini adultos, sin cereales. Elaborado con carne de salmón noruego sin espinas como principal ingrediente. Complementado con frutas, verduras, superalimentos y fuentes naturales de carbohidratos alternativos.',
      saco: [
        {
          referencia: 'NTH12345',
          peso: '1.5',
          precio: '18.99',
          check: true
        }
      ],
      ingredientes: [
        {
          nombre: 'SALMÓN NORUEGO SIN ESPINAS',
          cantidad: '450 g',
          imagen: 'https://static.naturesvariety.com/catalog/967232/Ingredient/mediumImage',
          descripcion: 'Carne de alta calidad, recién preparada y congelada. Ayuda a mantener la muculatura y vitalidad de tu pero.'
        },
        {
          nombre: 'BONIATO, GARBANZOS Y GUISANTES',
          cantidad: '365 g',
          imagen: 'https://static.naturesvariety.com/catalog/967235/Ingredient/mediumImage',
          descripcion: 'Fuente natural de carbohidratos que proporcionan energía a tu perro. Excelente alternativa a los cereales'
        },
        {
          nombre: 'ZANAHORIA, MANZANA, BRÓCOLI, ROMERO Y ALGA MARINA',
          cantidad: '150 g',
          imagen: 'https://static.naturesvariety.com/catalog/967239/Ingredient/mediumImage',
          descripcion: 'Frutas, verduras, plantas botánicas y superalimentos como fuente de fibra, sustancias minerales y antioxidantes'
        }

      ],
      beneficios: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' }
      ],
      composicion: 'Carne de salmón noruego sin espinas* (30%), guisantes deshidratados* (14%), proteína deshidratada de atún (12%), proteína de patata, almidón de guisante*, garbanzos deshidratados* (6,5%), grasa avícola* (6%), boniato deshidratado* (4%), hidrolizado de proteína (3,5%), raíz de achicoria deshidratada*, zanahoria deshidratada* (0,5%, equivalente a un 4% de zanahoria fresca), brócoli deshidratado* (0,5%, equivalente a un 4% de brócoli fresco), manzana deshidratada* (0,3%, equivalente a un 2% de manzana fresca), sustancias minerales, alga marina deshidratada* (0,01%), romero deshidratado* (0,01%)., *Ingredientes naturales.',
      aditivos: 'Vitamina A 27000 UI, vitamina E 410 mg, vitamina C 350 mg, sulfato de hierro(II) monohidratado 260 mg (Fe: 86 mg), yoduro de potasio 1,9 mg (I: 1,4 mg), sulfato de cobre(II) pentahidratado 33 mg (Cu: 8,8 mg), sulfato de manganeso monohidratado 123 mg (Mn: 40 mg), sulfato de zinc monohidratado 363 mg (Zn: 128 mg), selenito de sodio 0,24 mg (Se: 0,11 mg).',
      componentes: {
        proteinaBruta: '32',
        grasaBruta: '19',
        fibraBruta: '2,5',
        cenizaBruta: '8',
        omega3: '1,2',
        omega6: '3'
      },
      cantidad: 0
    },
    {
      animal: 'perro',
      nombre: 'SELECTED MINI SALMÓN NORUEGO',
      imagen: 'https://static.naturesvariety.com/catalog/8410650271293/3d-Pack/largeImage',
      caracteristicas: {
        tipo: 'Dry',
        edad: 'Adulto',
        tamano: 'Mini',
      },
      descripcion: 'Alimento completo y equilibrado para perros mini adultos, sin cereales. Elaborado con carne de salmón noruego sin espinas como principal ingrediente. Complementado con frutas, verduras, superalimentos y fuentes naturales de carbohidratos alternativos.',
      saco: [
        {
          referencia: 'NTH17743',
          peso: '7',
          precio: '42.99',
          check: false
        }
      ],
      ingredientes: [
        {
          nombre: 'SALMÓN NORUEGO SIN ESPINAS',
          cantidad: '2.1 Kg',
          imagen: 'https://static.naturesvariety.com/catalog/967232/Ingredient/mediumImage',
          descripcion: 'Carne de alta calidad, recién preparada y congelada. Ayuda a mantener la muculatura y vitalidad de tu pero.'
        },
        {
          nombre: 'BONIATO, GARBANZOS Y GUISANTES',
          cantidad: '1.7 Kg',
          imagen: 'https://static.naturesvariety.com/catalog/967235/Ingredient/mediumImage',
          descripcion: 'Fuente natural de carbohidratos que proporcionan energía a tu perro. Excelente alternativa a los cereales'
        },
        {
          nombre: 'ZANAHORIA, MANZANA, BRÓCOLI, ROMERO Y ALGA MARINA',
          cantidad: '700 g',
          imagen: 'https://static.naturesvariety.com/catalog/967239/Ingredient/mediumImage',
          descripcion: 'Frutas, verduras, plantas botánicas y superalimentos como fuente de fibra, sustancias minerales y antioxidantes'
        }

      ],
      beneficios: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' }
      ],
      composicion: 'Carne de salmón noruego sin espinas* (30%), guisantes deshidratados* (14%), proteína deshidratada de atún (12%), proteína de patata, almidón de guisante*, garbanzos deshidratados* (6,5%), grasa avícola* (6%), boniato deshidratado* (4%), hidrolizado de proteína (3,5%), raíz de achicoria deshidratada*, zanahoria deshidratada* (0,5%, equivalente a un 4% de zanahoria fresca), brócoli deshidratado* (0,5%, equivalente a un 4% de brócoli fresco), manzana deshidratada* (0,3%, equivalente a un 2% de manzana fresca), sustancias minerales, alga marina deshidratada* (0,01%), romero deshidratado* (0,01%)., *Ingredientes naturales.',
      aditivos: 'Vitamina A 27000 UI, vitamina E 410 mg, vitamina C 350 mg, sulfato de hierro(II) monohidratado 260 mg (Fe: 86 mg), yoduro de potasio 1,9 mg (I: 1,4 mg), sulfato de cobre(II) pentahidratado 33 mg (Cu: 8,8 mg), sulfato de manganeso monohidratado 123 mg (Mn: 40 mg), sulfato de zinc monohidratado 363 mg (Zn: 128 mg), selenito de sodio 0,24 mg (Se: 0,11 mg).',
      componentes: {
        proteinaBruta: '32',
        grasaBruta: '19',
        fibraBruta: '2,5',
        cenizaBruta: '8',
        omega3: '1,2',
        omega6: '3'
      },
      cantidad: 0
    },
    {
      animal: 'perro',
      nombre: 'SELECTED MINI POLLO CAMPERO',
      imagen: 'https://static.naturesvariety.com/catalog/8410650271361/3d-Pack/largeImage',
      caracteristicas: {
        tipo: 'Dry',
        edad: 'Adulto',
        tamano: 'Mini',
      },
      saco: [
        {
          referencia: 'NTH17485',
          peso: '0.6',
          precio: '4.99',
          check: false
        }
      ],
      ingredientes: [
        {
          nombre: 'CARNE DE POLLO CAMPERO DESHUESADA',
          cantidad: '180 g',
          imagen: 'https://static.naturesvariety.com/catalog/967231/Ingredient/mediumImage',
          descripcion: 'Carne de alta calidad, recién preparada y congelada. Ayuda a mantener la muculatura y vitalidad de tu pero.'
        },
        {
          nombre: 'BONIATO, GARBANZOS Y GUISANTES',
          cantidad: '145 g',
          imagen: 'https://static.naturesvariety.com/catalog/967235/Ingredient/mediumImage',
          descripcion: 'Fuente natural de carbohidratos que proporcionan energía a tu perro'
        },
        {
          nombre: 'ZANAHORIA, MANZANA, BRÓCOLI, ROMERO Y ALGA MARINA',
          cantidad: '60 g',
          imagen: 'https://static.naturesvariety.com/catalog/967239/Ingredient/mediumImage',
          descripcion: 'Frutas, verduras, plantas botánicas y superalimentos como fuente de fibra, sustancias minerales y antioxidantes'
        }
      ],
      beneficios: [
        { id: '' }
      ],
      composicion: 'Carne de pollo campero deshuesada* (30%), proteína deshidratada de pollo (23%), guisantes deshidratados* (12%), boniato deshidratado* (7%), grasa avícola* (6%), garbanzos deshidratados* (5,5%), almidón de guisante*, hidrolizado de proteína (3,5%), raíz de achicoria deshidratada*, fibra de guisante*, sustancias minerales, zanahoria deshidratada* (0,5%, equivalente a un 4% de zanahoria fresca), brócoli deshidratado* (0,5%, equivalente a un 4% de brócoli fresco), manzana deshidratada* (0,3%, equivalente a un 2% de manzana fresca), alga marina deshidratada* (0,01%), romero deshidratado* (0,01%)., *Ingredientes naturales.',
      aditivos: 'Vitamina A 27000 UI, vitamina D3 1800 UI, vitamina E 410 mg, vitamina C 350 mg, sulfato de hierro(II) monohidratado 260 mg (Fe: 86 mg), yoduro de potasio 1,9 mg (I: 1,4 mg), sulfato de cobre(II) pentahidratado 33 mg (Cu: 8,8 mg), sulfato de manganeso monohidratado 123 mg (Mn: 40 mg), sulfato de zinc monohidratado 363 mg (Zn: 128 mg), selenito de sodio 0,24 mg (Se: 0,11 mg).',
      componentes: {
        proteinaBruta: '32',
        grasaBruta: '19',
        fibraBruta: '3',
        cenizaBruta: '8',
        omega3: '0.3',
        omega6: '2.9'
      },
      cantidad: 0
    }, {
      animal: 'perro',
      nombre: 'SELECTED MINI POLLO CAMPERO',
      imagen: 'https://static.naturesvariety.com/catalog/8410650271408/3d-Pack/largeImage',
      caracteristicas: {
        tipo: 'Dry',
        edad: 'Adulto',
        tamano: 'Mini',
      },
      saco: [
        {
          referencia: 'NTH17485',
          peso: '7',
          precio: '44.99',
          check: false
        }
      ],
      ingredientes: [
        {
          nombre: 'CARNE DE POLLO CAMPERO DESHUESADA',
          cantidad: '2.1 Kg',
          imagen: 'https://static.naturesvariety.com/catalog/967231/Ingredient/mediumImage',
          descripcion: 'Carne de alta calidad, recién preparada y congelada. Ayuda a mantener la muculatura y vitalidad de tu pero.'
        },
        {
          nombre: 'BONIATO, GARBANZOS Y GUISANTES',
          cantidad: '1.7 Kg',
          imagen: 'https://static.naturesvariety.com/catalog/967235/Ingredient/mediumImage',
          descripcion: 'Fuente natural de carbohidratos que proporcionan energía a tu perro'
        },
        {
          nombre: 'ZANAHORIA, MANZANA, BRÓCOLI, ROMERO Y ALGA MARINA',
          cantidad: '700 g',
          imagen: 'https://static.naturesvariety.com/catalog/967239/Ingredient/mediumImage',
          descripcion: 'Frutas, verduras, plantas botánicas y superalimentos como fuente de fibra, sustancias minerales y antioxidantes'
        }
      ],
      beneficios: [
        { id: '' }
      ],
      composicion: 'Carne de pollo campero deshuesada* (30%), proteína deshidratada de pollo (23%), guisantes deshidratados* (12%), boniato deshidratado* (7%), grasa avícola* (6%), garbanzos deshidratados* (5,5%), almidón de guisante*, hidrolizado de proteína (3,5%), raíz de achicoria deshidratada*, fibra de guisante*, sustancias minerales, zanahoria deshidratada* (0,5%, equivalente a un 4% de zanahoria fresca), brócoli deshidratado* (0,5%, equivalente a un 4% de brócoli fresco), manzana deshidratada* (0,3%, equivalente a un 2% de manzana fresca), alga marina deshidratada* (0,01%), romero deshidratado* (0,01%)., *Ingredientes naturales.',
      aditivos: 'Vitamina A 27000 UI, vitamina D3 1800 UI, vitamina E 410 mg, vitamina C 350 mg, sulfato de hierro(II) monohidratado 260 mg (Fe: 86 mg), yoduro de potasio 1,9 mg (I: 1,4 mg), sulfato de cobre(II) pentahidratado 33 mg (Cu: 8,8 mg), sulfato de manganeso monohidratado 123 mg (Mn: 40 mg), sulfato de zinc monohidratado 363 mg (Zn: 128 mg), selenito de sodio 0,24 mg (Se: 0,11 mg).',
      componentes: {
        proteinaBruta: '32',
        grasaBruta: '19',
        fibraBruta: '3',
        cenizaBruta: '8',
        omega3: '0.3',
        omega6: '2.9'
      },
      cantidad: 0
    },{
      animal: 'perro',
      nombre: 'SELECTED MINI POLLO CAMPERO',
      imagen: 'https://static.naturesvariety.com/catalog/8410650271668/3d-Pack/largeImage',
      caracteristicas: {
        tipo: 'Dry',
        edad: 'Adulto',
        tamano: 'Mini',
      },
      saco: [
        {
          referencia: 'NTH17565',
          peso: '1.5',
          precio: '14.99',
          check: false
        }
      ],
      ingredientes: [
        {
          nombre: 'CARNE DE POLLO CAMPERO DESHUESADA',
          cantidad: '450 g',
          imagen: 'https://static.naturesvariety.com/catalog/967231/Ingredient/mediumImage',
          descripcion: 'Carne de alta calidad, recién preparada y congelada. Ayuda a mantener la muculatura y vitalidad de tu pero.'
        },
        {
          nombre: 'BONIATO, GARBANZOS Y GUISANTES',
          cantidad: '365 g',
          imagen: 'https://static.naturesvariety.com/catalog/967235/Ingredient/mediumImage',
          descripcion: 'Fuente natural de carbohidratos que proporcionan energía a tu perro'
        },
        {
          nombre: 'ZANAHORIA, MANZANA, BRÓCOLI, ROMERO Y ALGA MARINA',
          cantidad: '150 g',
          imagen: 'https://static.naturesvariety.com/catalog/967239/Ingredient/mediumImage',
          descripcion: 'Frutas, verduras, plantas botánicas y superalimentos como fuente de fibra, sustancias minerales y antioxidantes'
        }
      ],
      beneficios: [
        { id: '' }
      ],
      composicion: 'Carne de pollo campero deshuesada* (30%), proteína deshidratada de pollo (23%), guisantes deshidratados* (12%), boniato deshidratado* (7%), grasa avícola* (6%), garbanzos deshidratados* (5,5%), almidón de guisante*, hidrolizado de proteína (3,5%), raíz de achicoria deshidratada*, fibra de guisante*, sustancias minerales, zanahoria deshidratada* (0,5%, equivalente a un 4% de zanahoria fresca), brócoli deshidratado* (0,5%, equivalente a un 4% de brócoli fresco), manzana deshidratada* (0,3%, equivalente a un 2% de manzana fresca), alga marina deshidratada* (0,01%), romero deshidratado* (0,01%)., *Ingredientes naturales.',
      aditivos: 'Vitamina A 27000 UI, vitamina D3 1800 UI, vitamina E 410 mg, vitamina C 350 mg, sulfato de hierro(II) monohidratado 260 mg (Fe: 86 mg), yoduro de potasio 1,9 mg (I: 1,4 mg), sulfato de cobre(II) pentahidratado 33 mg (Cu: 8,8 mg), sulfato de manganeso monohidratado 123 mg (Mn: 40 mg), sulfato de zinc monohidratado 363 mg (Zn: 128 mg), selenito de sodio 0,24 mg (Se: 0,11 mg).',
      componentes: {
        proteinaBruta: '32',
        grasaBruta: '19',
        fibraBruta: '3',
        cenizaBruta: '8',
        omega3: '0.3',
        omega6: '2.9'
      },
      cantidad: 0
    },
    {
      animal: '',
      nombre: '',
      imagen: '',
      caracteristicas: {
        tipo: '',
        edad: '',
        tamano: '',
      },
      saco: [
        { peso: '' },
        { peso: '' }
      ],
      ingredientes: [
        {
          id: ''
        },
        { id: '' },
        { id: '' }
      ],
      beneficios: [
        { id: '' }
      ],
      composicion: '',
      aditivos: '',
      componentes: {
        proteinaBruta: '',
        grasaBruta: '',
        fibraBruta: '',
        cenizaBruta: '',
        omega3: '',
        omega6: ''
      },
      cantidad: 0
    }
  ]





  constructor(private http: HttpClient) { }


  getProducts(animal: string, food_type: string): Observable<any> {
    const queryParams = `?animal=${animal}&food_type=${food_type}`;
    return this.http.get<any>(`http://localhost:3000/productos${queryParams}`);
  }
  devolverProducto(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/producto/${id}`);
   }



  devolverPorAnima(animal: string, tipoComida: string) {
    let tipo = 'dry';
    if (tipoComida.includes('comida-húmeda-natural')) {
      tipo = 'Wet';
    } else {
      tipo = 'Dry';
    }

    const resultadosUnicos: Map<string, any> = new Map();

    this.pienso.forEach(item => {
      if (item.animal === animal && item.caracteristicas.tipo === tipo) {
        resultadosUnicos.set(item.nombre, item);
      }
    });

    return Array.from(resultadosUnicos.values());
  }






}
