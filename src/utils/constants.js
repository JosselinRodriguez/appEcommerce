import cabello from  '../assets/cabello.jpg'
import uñas from '../assets/unas.jpg'
import depilacion from '../assets/belleza.jpg';
import tratamiento from '../assets/tratamiento.jpg'

export const createProductAny = {
  name: '',
  description: '',
  precio: '',
  photoUrl: '',
  categories: '',
};

export const updateProductAny = {
  name: '',
  description: '',
  precio: '',
  photoUrl: '',
  categories: '',
};


export const categoriAdmin = [
  {
    value: 'cabello',
    label: 'cabello',
    cabello: 'cabello',
    icons: cabello,
  },
  {
    value: 'unas',
    label: 'uñas',
    unas: 'unas',
    icons: uñas,
  },
  {
    value: 'maquillaje',
    label: 'maquillaje',
    maquillaje: 'maquillaje',
    icons: cabello,
  },
  {
    value: 'depilacion',
    label: 'depilacion',
    tintes: 'tintes',
    icons: depilacion,
  },
  {
    value: 'tintes',
    label: 'tintes',
    tratamientosCapilares: 'tratamientos',
    icons: cabello,
  },
  {
    value: 'tratamientos',
    label: 'tratamientos capilares',
    depilaciones: 'depilacion',
    icons: tratamiento,
  },
];
