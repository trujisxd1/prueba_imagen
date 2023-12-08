


const puesto = ["Consultor Sr. Intelisis ERP", "Consultor Sr. Tecnología", "CEO","Consultor Jr. Intelisis ERP", "Consultor Jr. Tecnología", "Gerente de Desarrollo", "Gerente de Consultoría",
"Consultor Jr", "Desarrollador", "Marketing/Ventas"]

const tipoSangre = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

const mesDeCumple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const talla = ["XS", "S", "M", "L", "XL", "XXL"]


const formData=[
    {
        classInput:"is-12",
        name: 'Nombre',
        label: 'ingresa tu nombre:',
        placeholder: 'Ingresa el nombre',
        ariaDescribedBy: 'Ingresa el nombre',
        rules: [
            {
                required: true,
                message: 'Ingresa el nombre'
            }
        ]   
    },
    {
        name: 'puesto',
        label: 'Seleccione un puesto',
        columnFormType: 'CustomSelectForm',
        keyValue: 'puesto',
        keyName: 'puesto',
        classInput: 'column is-6',
        placeholder: 'puesto',
        arraySelect: puesto.map((p)=>({
        puesto:p
        })),
        rules: [ 
            {
                required: true,
                message: 'Ingresa un puesto'
            }
        ]
    },
    {
        classInput:"is-12",
        name: 'telefono',
        label: 'telefono:',
        placeholder: 'Ingresa un número telefónico',
        ariaDescribedBy: 'Ingresa un número telefónico',
        rules: [
            {
                required: true,
                message: 'Ingresa un número'
            }
        ]
    },
    {
        classInput:"is-12",
        name: 'telEmergencia',
        label: 'Telefono de emergencia',
        placeholder: 'Ingrese un telefono',
        ariaDescribedBy: 'Ingrese un telefono',
        rules: [
            {
                required: true,
                message: 'Ingrese un telefono'
            }
        ]
    },
    {
        classInput:"is-12",
        name: 'nombreCon',
        label: 'Nombre de contacto',
        placeholder: 'Ingrese nombre de contacto',
        ariaDescribedBy: 'Ingrese un nombre de contacto',
        rules: [
            {
                required: true,
                message: 'Ingrese un nombre de contacto'
            }
        ]
    },
    {
        name: 'TipoSangre',
        label: 'Seleccione un tipo de sangre',
        columnFormType: 'CustomSelectForm',
        keyValue: 'sangre',
        keyName: 'sangre',
        classInput: 'column is-6',
        placeholder: 'tipo de sangre',
        arraySelect: tipoSangre.map((t)=>({
        Tipo:t
        })),
        rules: [ 
            {
                required: true,
                message: 'Ingresa un puesto'
            }
        ]
    },
    {
        classInput,
        name: 'direccion',
        label: 'Direccion',
        placeholder: 'Ingrese la direccion',
        ariaDescribedBy: 'Ingrese la direccion',
        rules: [
            {
                required: true,
                message: 'Ingrese la direccion'
            }
        ]
    },
    {
        name: 'paquete',
        label: 'Seleccione un paquete',
        columnFormType: 'CustomSelectForm',
        keyValue: 'paquete',
        keyName: 'nombre',
        classInput: 'column is-6',
        placeholder: 'Paquetes',
        arraySelect: [
          {
            nombre: 'Paquete 1',
            paquete: '1'
          },    
          {
            nombre: 'Paquete 2',
            paquete: '2'
          },
          {
            nombre: 'Paquete 3',
            paquete: '3'
          },
          {
            nombre: 'Paquete 4',
            paquete: '4'
          }
        ],
        rules: [
            {
                required: true,
                message: 'Asigne un paquete'
            }
        ]
      },

]