<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Propiedades de Inversión 

    .row.align-items-center
      .col-lg-8
        p.p-4.bg-t1-2 Son activos de los cuales se espera obtener rendimientos a futuro, generando ingresos no operacionales para la empresa, como son el arriendo de los terrenos, edificios, casas, locales, entre otros. De estos, se obtiene una contraprestación en dinero que incrementa la economía de los propietarios, además, el terreno se valoriza. Por ende, a largo plazo, se obtiene una utilidad cuando el activo es vendido. Por esto, la importancia que revisten las inversiones no solo en las empresas, sino también, en las personas naturales, que, para muchos es su actividad diaria, igualmente, algunas personas piensan que invertir es un riesgo, aunque en realidad es una oportunidad para crecer financieramente. 
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 295px").m-auto

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Política contable

    .row.bg-t1-1
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8
              p Las políticas contables deben ser coherentes, claras y legibles; por ello, se debe tener en cuenta la Norma Internacional de Contabilidad (NIC) 8 para NIIF plenas y Norma NIIF para Pymes en la sección 10 “Políticas, Estimaciones Y Errores Contables” de acuerdo con el tipo de empresa y grupo de presentación de información financiera.

              p Para la elaboración de las políticas contables de las propiedades de inversión es importante tener en cuenta los criterios de reconocimiento, medición, presentación y revelación, establecidos en la Norma Internacional de Contabilidad (NIC) 40.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 295px").m-auto

          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 400px").m-auto

            .col-lg-8
              p.p-4.bg-t1-10 La medición inicial se realiza aplicando el modelo del costo y en la medición posterior se efectúa a valor razonable, con cambios en el resultado, que afectan la utilidad del ejercicio. Sin embargo, en las propiedades de inversión se puede establecer en la política contable, el criterio de medición al costo en casos específicos donde sea imposible medir a valor razonable. Es importante hacer referencia a que la norma solicita que todas las entidades midan a valor razonable, sin embargo, esto no es una obligación, pero si se debe tener presente el mejor criterio que beneficie a la entidad. Por último, se debe tener en cuenta que, al momento de vender una propiedad de inversión, se reconoce a valor razonable, sin importar el criterio de medición establecido para la empresa.

          .row.mb-2.ms-0.mt-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Deterioro de propiedad de inversión

          .tarjeta.bg-t1-11.p-4.mt-4
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1(style="color: #FD9826 !important") Deterioro de propiedad de inversión 
                    p.text-small.mb-0.text-white El deterioro de valor de una propiedad de inversión hace referencia a la pérdida de dinero que puede presentar el bien por eventos imprevistos, disminuyendo el valor de este en la contabilidad.

                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                      span.text-black Descargar
                      i.fas.fa-file-download.text-black

          p.mt-4 #[b Ejemplo]

          .row.justify-content-center.bg-t1-10.p-5
            p La empresa X adquiere un local para inversión por valor de $50.000.000, el 10% corresponde a terrenos, y el resto es construcción, se estima un desmantelamiento de $5.000.000 a una tasa del 6% E.A. al finalizar su vida útil de 20 años.

            p #[b Medición inicial] 

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                span Tabla 18. Reconocimiento del activo: construcción, terreno y desmantelamiento

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td(style="background-color: #F8D7B0 !important") #[b Concepto]
                      td(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td Construcción
                      td $45.000.000
                    tr
                      td.bg-t1-8 Terreno
                      td.bg-t1-8 $5.000.000

              .titulo-sexto.color-acento-contenido.mb-3
                span Tabla 19. Costo estimado de desmantelamiento

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td(style="background-color: #F8D7B0 !important") #[b Cálculo]
                      td(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td VP = VF / (1 + i)^n
                      td $1.559.024


            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                span Tabla 20. Medición inicial del activo adquirido

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b CÓDIGO ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b CUENTA ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b DEBE ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b HABER ]
                    tr
                      td.text-center #[b 150405]
                      td.text-center Terrenos urbanos
                      td.text-center $ 5.000.000 
                      td.text-center #[b -]
                    tr
                      td.bg-t1-8.text-center #[b 151610]
                      td.bg-t1-8 Bodega
                      td.bg-t1-8.text-center  $ 46.559.024
                      td.bg-t1-8.text-center #[b -]

          p.mt-4 Pasado un año la bodega sufre un deterioro por inseguridad en el sector y pierde valor por $5.000.000. Se solicita realizar la medición posterior del activo. 

          .row.justify-content-center
            .col-lg-10.mt-4
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-t1-3
                    .col-xl.p-4
                      .p-4.w-100.align-items-center
                        p.mb-0 Valor inicial de la bodega        $ 46.559.024
                        p.mb-0 Depreciación anual                   $ 2.327.951
                        p.mb-0 Deterioro:                                    $5.000.000
                        p Valor actual:                               $39.321.073
                        
                        p.mb-0 159901 Deterioro Bodega       $5.000.000
                        p.mb-0 519801 Deterioro                      $5.000.000 

                    .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/tema2/img4.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Reconocimiento, medición, presentación y revelación.   

    p.p-4.bg-t1-12 #[b Reconocimiento:] la propiedad de inversión se reconoce cuando genere beneficios económicos en el futuro y el costo de esa propiedad de inversión sea confiable. Cabe resaltar, que los costos adicionales en que se incurran son reconocidos como mayor valor del bien, excepto los mantenimientos de estas propiedades que no son reconocidos en el activo, sino en el gasto.

    .p-2
      .row.p-4.bg-t1-12.justify-content-center
        p #[b Medición inicial:] las propiedades de inversión se miden al costo, teniendo en cuenta los valores adicionales como mayor valor del bien, entre los que se pueden encontrar: comisiones, impuestos y demás costos en los que se incurra para poder adquirir el activo

        .row.justify-content-center.bg-t1-10.p-5
          
          p.mt-4 #[b Ejemplo]

          p La empresa X adquiere un local para inversión por valor de $50.000.000, el 10% corresponde a terrenos, y el resto es construcción, tener en cuenta los criterios de medición.

          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              span Tabla 21. Reconocimiento del activo: construcción, terreno y desmantelamiento

            .table-responsive
              table.table.table-bordered
                tbody
                  tr
                    td(style="background-color: #F8D7B0 !important") #[b Concepto]
                    td(style="background-color: #F8D7B0 !important") #[b Valor]
                  tr
                    td Construcción
                    td $45.000.000
                  tr
                    td.bg-t1-8 Terreno
                    td.bg-t1-8 $5.000.000

            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              span Tabla 22. Costo estimado de desmantelamiento

            .table-responsive
              table.table.table-bordered
                tbody
                  tr
                    td(style="background-color: #F8D7B0 !important") #[b Cálculo]
                    td(style="background-color: #F8D7B0 !important") #[b Valor]
                  tr
                    td VP = VF / (1 + i)^n
                    td $1.559.024

          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              span Tabla 9. Medición inicial del activo adquirido

            .table-responsive
              table.table.table-bordered.bg-t1-6
                tbody
                  tr
                    td.bg-t1-7 #[b CÓDIGO]
                    td.bg-t1-7  #[b CUENTA ]
                    td.bg-t1-7  #[b DEBE ]
                    td.bg-t1-7  #[b HABER ]
                  tr
                    td #[b 150405]
                    td Terrenos inversión
                    td $ 5.000.000 
                    td
                  tr
                    td.bg-t1-8 #[b 151601]
                    td.bg-t1-8 Bodega de inversión
                    td.bg-t1-8 $ 45.000.000
                    td.bg-t1-8 $ 78.750 
                  tr
                    td #[b 233505]
                    td Costos y Gastos por Pagar  
                    td
                    td $ 50.000.000 

    p.mt-4.p-4.bg-t1-12 #[b Medición posterior:] las empresas pueden medir al costo o valor razonable las propiedades de inversión, pero debe estar debidamente explícito en la política contable. Sin embargo, aunque la norma no obliga a que debe ser a valor razonable se enfoca en este tipo de criterio de medición, independientemente, si se tiene experiencia con la propiedad de inversión o si es nuevo para la empresa.

    p.p-4.bg-t1-12 #[b Presentación y revelación:] la propiedad de inversión se presenta y se revela teniendo en cuenta el criterio de medición inicialmente estipulados en la política contable. Si es a valor razonable, se debe tener en cuenta que al cierre del periodo se debe hacer el ajuste de acuerdo con el valor del mercado, así mismo, se debe revelar los ingresos obtenidos y los gastos incurridos en esa inversión.

    p Consulte la Norma Internacional de Contabilidad número cuarenta, propiedad de inversión.

    .tarjeta.bg-t1-11.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma Internacional de Contabilidad número cuarenta
              p.text-small.mb-0.text-white propiedad de inversión.

            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
