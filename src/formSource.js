export const userInputs = [
    {
        id: 1,
        label: "Nombre",
        type: "text",
        placeholder: "Ingrese su nombre",
    },
    {
        id: 2,
        label: "Apellido",
        type: "text",
        placeholder: "Ingrese su apellido",
    },
    {
        id: 3,
        label: "Email",
        type: "mail",
        placeholder: "Ingrese su email",
    },
    {
        id: 4,
        label: "Telefono",
        type: "telephone",
        placeholder: "Ingrese su telefono",
    },
    {
        id: 5,
        label: "Edad",
        type: "text",
        placeholder: "Ingrese su edad",
    },
    {
        id: 6,
        label: "Password",
        type: "password",
    },
    {
        id: 7,
        label: "Dirección",
        type: "address",
        placeholder: "Ingrese su dirección",
    },
    {
        id: 8,
        label: "Referencia",
        type: "text",
        placeholder: "Ingrese una referencia de su dirección",
    },
];
  
  export const productInputs = [
    {
      id: 1,
      label: "Articulo",
      type: "text",
      placeholder: "Ingrese el nombre del articulo",
    },
    {
      id: 2,
      label: "Precio",
      type: "text",
      placeholder: "Ingrese precio del articulo",
    },
    {
      id: 3,
      label: "Colores",
      type: "text",
      placeholder: "Ingrese los colores disponibles",
    },
    {
      id: 4,
      label: "Tallas",
      type: "text",
      placeholder: "Ingrese el precio",
    },
    {
      id: 5,
      label: "Descripción",
      type: "text",
      placeholder: "in stock",
    },
    {
        id: 6,
        label: "Cantidad en Stock",
        type: "text",
        placeholder: "Ingrese la cantidad en Stock",
    },
  ];

  export const colorsOption = [
      { value: 'celeste', label: 'Celeste', color: '#00B8D9', isFixed: true },
      { value: 'azul', label: 'Azul',color: '#0052CC', isDisabled: true },
      { value: 'morado', label: 'Morado',color: '#5243AA' },
      { value: 'rojo', label: 'Rojo',color: '#FF5630', isFixed: true },
      { value: 'naranja', label: 'Naranja',color: '#FF8B00' },
      { value: 'amarillo', label: 'Amarillo',color: '#FFC400' },
      { value: 'verde', label: 'Verde', color: '#36B37E'},
      { value: 'cafe', label: 'Cafe', color: '#00875A'},
      { value: 'blanco', label: 'Blanco', color: '#253858'},
      { value: 'negro', label: 'Negro', color: '#666666'},
  ]

  export const sizeOption = [
    { value: 'xs', label: 'XS', },
    { value: 's', label: 'S', },
    { value: 'm', label: 'M',  },
    { value: 'l', label: 'L',  },
    { value: 'xl', label: 'XL',  },
    { value: 'xxl', label: 'XXL',  },
    { value: 'xxxl', label: 'XXXL',  },
]

export const dataType ={
  logIn:[
      {
          id: 1,
          label: "Usuario",
          type: "text",
          placeholder: "Ingrese su usuario",
      },
      {
          id: 2,
          label: "Password",
          type: "text",
          placeholder: "Ingrese su contraseña",
      },
  ],
  signUp: [
      {
          id: 1,
          label: "Nombre",
          type: "text",
          placeholder: "Ingrese su nombre",
      },
      {
          id: 2,
          label: "Password",
          type: "password",
          placeholder: "Ingrese su contraseña",
      },
      {
          id: 3,
          label: "Email",
          type: "email",
          placeholder: "Ingrese su email",
      },
      {
          id: 4,
          label: "Telefono",
          type: "telephone",
          placeholder: "Ingrese su telefono",
      },
  ]
}

