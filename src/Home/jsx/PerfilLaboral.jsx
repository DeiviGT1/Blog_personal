import React from "react";

function PerfilLaboral() {
  return (
    <>
      <div className="container-fluid my-5 contenedores">
        <div className="row-12">
          <div className="col-12 p-0">
            <div className="container-fluid titulo" id="titulo">
              <h1 className="text-center p-4" id="perfilLaboral">
                Perfil laboral
              </h1>
            </div>
            <div className="container p-5 mt-5" id="box">
              <div className="row m-0 m-lg-5">
                <div className="col-12 col-lg-6">
                  <h2>S.O.S. Llaves y claves</h2>
                  <h4>Asistente administrativo | Enero 2019 - Octubre 2020</h4>
                  <ul>
                    <li>
                      Manejo de inventarios, tanto registro de entrada como
                      desalida
                    </li>
                    <li>
                      Respondiendo llamadas y correos electrónicos, filtrando y
                      reenviando información importante.
                    </li>
                    <li>Atención al cliente</li>
                    <li>Desarrollo y ejecución de estrategias de mercadeo</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h2>Mattelsa S.A.S.</h2>
                  <h4>S.A. Ecommerce | Noviembre 2020 - Agosto 2021</h4>
                  <ul>
                    <li>Negociación con transportadoras</li>
                    <li>
                      Entrega de informes y análisis del servicio de Ecommerce
                    </li>
                    <li>Reporte de pagos realizados por las transportadoras</li>
                    <li>
                      Ayudar en el proceso de compra, incluyendo la verificación
                      de inventario y la gestión de pagos.
                    </li>
                    <li>
                      Ayudar en el seguimiento del estado de los pedidos y en la
                      gestión de devoluciones y cambios.
                    </li>
                  </ul>
                </div>
                <div className="col-12 pt-5">
                  <h2>Mattelsa S.A.S.</h2>
                  <h4>
                    Analista de planeacion comercial | Septiembre 2021
                    -Actualidad
                  </h4>
                  <ul>
                    <li>Distribución de unidades a cada una de las bodegas</li>
                    <li>
                      Migración de datos del sistema a la bodega de datos en SQL
                      Automatización de procesos para su veloz desarrollo con el
                      uso de VBA y Python
                    </li>
                    <li>
                      Desarrollo de modelos de Machine Learning por medio de
                      Python para el analisis de datos y la toma de desiciones
                    </li>
                    <li>
                      Analizar la información del mercado y los datos de ventas
                      para identificar tendencias y oportunidades de
                      crecimiento.
                    </li>
                    <li>
                      Establecer metas y objetivos a corto y largo plazo para el
                      equipo de ventas.
                    </li>
                    <li>
                      Coordinar con otros departamentos de la empresa, como el
                      de producción y el de finanzas, para garantizar que se
                      cumplan los objetivos comerciales.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { PerfilLaboral };
