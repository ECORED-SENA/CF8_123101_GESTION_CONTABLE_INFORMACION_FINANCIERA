export default {
  global: {
    Name:
      'Reconocimiento de Propiedad, Planta y Equipo, propiedades de inversión y activos mantenidos para la venta.',
    Description:
      'En este componente se desarrolla la unidad temática de Propiedad, Planta y Equipo o lo que denominamos en la normativa contable, “Bienes de Uso” o “Activos Fijos”. Estos, son indispensables para el funcionamiento de las organizaciones. Por lo tanto, se debe identificar las necesidades requeridas de los activos, sus características, objetivo, finalidad y normatividad vigente aplicable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Propiedad Planta y Equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política contable PPYE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Compra de Propiedad, Planta y Equipo en moneda Local y moneda extranjera',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ajuste de la diferencia en cambio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Desmantelamiento, rehabilitación, componentes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Política contable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Activos Mantenidos para la Venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Política contable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Investigación e innovación financiera y organizacional',
      referencia:
        'Servicio Nacional de Aprendizaje, SENA. (2018). Revista Finnova: Investigación e Innovación Financiera y Organizacional.',
      tipo: 'Capítulo 1',
      link: 'http://revistas.sena.edu.co/index.php/finn',
    },
    {
      tema: 'Contabilidad financiera',
      referencia:
        'Calixto Mendoza Roca, 2016 Contabilidad financiera, Universidad del Norte.',
      tipo: 'Capítulo 3',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4722180&query=activos+fijos',
    },
  ],
  glosario: [
    {
      termino: 'Activos mantenidos para la venta',
      significado:
        'Son aquellos bienes que adquiere la empresa con la finalidad de desprenderse de los mismo, a través de la venta.',
    },
    {
      termino: 'Activos de uso',
      significado:
        'Los activos que adquiere la empresa para su funcionamiento y desarrollo de la actividad económica.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Es la pérdida de valor del activo por su uso durante la vida útil.',
    },
    {
      termino: 'Inversión',
      significado:
        'Beneficio económico que se espera obtener a futuro, asumiendo riesgos de este.',
    },
    {
      termino: 'Propiedad de Inversión',
      significado:
        'Son los activos que adquiera la empresa con la finalidad de que generen una rentabilidad económica para sí misma.',
    },
    {
      termino: 'Valor residual',
      significado:
        'El valor residual anteriormente conocido como valor de salvamento es el importe recuperable después de depreciar totalmente el activo durante su vida útil, en la actualidad no existe un método definido, por lo tanto, se determina bajo la política contable de cada empresa.',
    },
    {
      termino: 'Vida útil',
      significado:
        'Es el número de años que tiene durabilidad un activo, tiempo en el cual la empresa espera obtener beneficios económicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flórez, E., Rincón, C., Zamorano, R. (2014). Manual contable en la implementación de las NIIF.Bogotá: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'CTCP, (2016a), NIC 16 propiedad planta y equipo.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/14%20ES_RedBV2016_IAS16_PartA.pdf',
    },
    {
      referencia:
        'CTCP, (2016b), NIIF 5- Activos no Corrientes Mantenidos para la Venta y Operaciones Discontinuadas',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534346664-4845',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
