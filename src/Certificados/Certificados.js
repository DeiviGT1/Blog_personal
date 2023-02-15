import { Footer } from "../ComponentesGenericos/Footer";
import { Header } from "../ComponentesGenericos/Header";
import { Titulo } from "../ComponentesGenericos/Titulo";
import { GrupoCert } from "./GrupoCert";
import "./Cert.css"

import MachineLearningMindsDB from "../assets/diplomas/IA/diploma-machine-learning.jpg"
import RedesNeuronalesConv from "../assets/diplomas/IA/diploma-redes-neuronales-convolucionales.jpg"
import RedesNeuronalesTf from "../assets/diplomas/IA/diploma-redes-neuronales-tensorflow.jpg"
import RegresionLinealPython from "../assets/diplomas/IA/diploma-regresion-lineal.jpg"
import RedesNeuronales from "../assets/diplomas/IA/diploma-redes-neuronales.jpg"
import MachineLearningScikitLearn from "../assets/diplomas/IA/diploma-scikitlearn.jpg"

import FundamentosBD from "../assets/diplomas/Bases de datos/diploma-bd.jpg"
import PostgreSQL from "../assets/diplomas/Bases de datos/diploma-postgresql.jpg"
import Spark from "../assets/diplomas/Bases de datos/diploma-spark.jpg"

import CalculosDiferencial from "../assets/diplomas/Fundamentales/diploma-calculo-diferencial-ds.jpg"
import Docker from "../assets/diplomas/Fundamentales/diploma-docker.jpg"
import EstadisticaInferencial from "../assets/diplomas/Fundamentales/diploma-estadistica-inferencial-python.jpg"
import FuncionesMatematicas from "../assets/diplomas/Fundamentales/diploma-funciones-matematicas.jpg"
import Opp from "../assets/diplomas/Fundamentales/diploma-oop.jpg"
import PandasNumpy from "../assets/diplomas/Fundamentales/diploma-pandas-numpy.jpg"

import FundamentosGCP from "../assets/diplomas/Nube/GCP/diploma-fundamentos-google.jpg"

import IntroduccionBackend from "../assets/diplomas/Backend/diploma-backend-introduccion.jpg"
import FastAPI from "../assets/diplomas/Backend/diploma-fastapi.jpg"
import FastAPIItermedio from "../assets/diplomas/Backend/diploma-fastapi-intermedio.jpg"
import DjangoBasico from "../assets/diplomas/Backend/diploma-django.jpg"
import DjangoIntermedio from "../assets/diplomas/Backend/diploma-django-intermedio.jpg"

import ExcelAdvanced from "../assets/diplomas/Coursera/Coursera Excel Skill Advanced.jpg"
import ExcelBusiness from "../assets/diplomas/Coursera/Coursera Excel Skill for Business.jpg"
import GoogleIT from "../assets/diplomas/Coursera/Coursera Google IT Automation.jpg"
import PostgreSQLforEverybody from "../assets/diplomas/Coursera/Coursera PostgreSQL.jpg"
import PythonforEverybody from "../assets/diplomas/Coursera/Coursera Python for Everybody.jpg"


function Certificados(){
  const ExcelAdvancedDesc =  "He aprendido a utilizar VBA para automatizar tareas repetitivas y personalizar soluciones de Excel mediante la creación de macros, funciones y procedimientos personalizados, y trabajando con objetos en Excel. En resumen, este curso me ha permitido ampliar mis habilidades y tener una comprensión más profunda de cómo utilizar Excel de manera efectiva."
  const ExcelBusinessDesc = "Como estudiante de un curso avanzado de Excel, he aprendido a utilizar funciones avanzadas, tablas dinámicas y gráficos para analizar y presentar datos de manera eficiente."
  const GoogleITDesc = "En este curso, he adquirido habilidades y conocimientos en tecnología de la información, incluyendo sistemas operativos, redes, seguridad, programación y desarrollo web. Además, he aprendido sobre herramientas y aplicaciones Google, como Google Cloud Platform y Google Apps. He desarrollado habilidades en resolución de problemas, automatización y administración de sistemas, dándome una base sólida en el mundo de la tecnología de la información."
  const PostgreSQLforEverybodyDesc = "En este curso, he aprendido a trabajar con la base de datos PostgreSQL, un sistema de gestión de bases de datos relacional de código abierto. He aprendido a crear y administrar bases de datos, a escribir consultas avanzadas y a optimizar el rendimiento de las mismas. También he aprendido sobre la seguridad de la base de datos y cómo respaldar y recuperar datos."
  const PythonforEverybodyDesc = "Aprendí a trabajar con este lenguaje de programación para crear soluciones de software complejas y eficientes. Adquirí habilidades en programación orientada a objetos, manejo de módulos y paquetes, y aplicación de algoritmos y estructuras de datos avanzados. También aprendí a trabajar con bibliotecas y frameworks populares de Python para resolver problemas reales en diferentes industrias."
  const MachineLearningMindsDBDesc = "Aprendí a desarrollar modelos de aprendizaje automático y aplicarlos para solucionar problemas reales en diferentes industrias. Adquirí habilidades en preprocesamiento de datos, selección de modelos, entrenamiento y validación de modelos, y toma de decisiones basadas en resultados. Aprendí a trabajar con diferentes algoritmos y técnicas de Machine Learning, incluyendo regresión, clasificación, agrupamiento y reducción de dimensionalidad."
  const RedesNeuronalesConvDesc = "Aprendí a desarrollar y entrenar redes neuronales convolucionales (CNN) para resolver problemas de visión por computadora y aprendizaje profundo. Adquirí habilidades en la construcción de arquitecturas de CNN, ajuste de hiperparámetros y optimización de modelos, y análisis de resultados. Aprendí a utilizar bibliotecas y herramientas populares de aprendizaje profundo, como TensorFlow y Keras, para implementar y entrenar modelos de CNN en datos complejos. También aprendí a transferir conocimientos pre-entrenados de modelos de CNN en diferentes problemas de visión por computadora."
  const RedesNeuronalesTfDesc = "Aprendí a desarrollar y entrenar redes neuronales con la biblioteca de código abierto TensorFlow. Adquirí habilidades en la construcción y entrenamiento de modelos de redes neuronales para resolver problemas en diferentes áreas, incluyendo visión por computadora, procesamiento de lenguaje natural, y aprendizaje profundo. Aprendí a trabajar con diferentes tipos de redes neuronales, como redes feedforward, redes recurrentes y redes convolucionales, y a utilizar técnicas avanzadas para mejorar el rendimiento de los modelos."
  const RegresionLinealPythonDesc = "Aprendí a trabajar con modelos de regresión lineal y aplicarlos para solucionar problemas reales en diferentes industrias. Adquirí habilidades en la preparación y preprocesamiento de datos, selección de características, entrenamiento y validación de modelos de regresión lineal, y análisis de resultados. Aprendí a utilizar bibliotecas y herramientas populares de Python, como NumPy, Pandas y scikit-learn, para implementar modelos de regresión lineal y realizar análisis de datos avanzados."
  const RedesNeuronalesDesc = "Como estudiante de este curso, he aprendido a diseñar y entrenar modelos de redes neuronales para resolver problemas de clasificación, regresión y detección de objetos. He aprendido a utilizar diferentes tipos de redes y ajustar hiperparámetros para mejorar su rendimiento. También he aprendido a trabajar con imágenes, y otros tipos de datos no estructurados y a evaluar y mejorar el rendimiento de mis modelos. En resumen, he adquirido las habilidades para diseñar y entrenar modelos de redes neuronales efectivos."
  const MachineLearningScikitLearnDesc = "Aprendí a aplicar técnicas y modelos de machine learning en problemas reales utilizando la biblioteca scikit-learn de Python. Adquirí habilidades en la preparación y preprocesamiento de datos, selección de características, entrenamiento y validación de modelos de aprendizaje automático, y análisis de resultados. Aprendí a utilizar las funcionalidades y métodos integrados en scikit-learn para solucionar diferentes tipos de problemas de aprendizaje supervisado y no supervisado. También aprendí a evaluar y comparar diferentes modelos de aprendizaje automático y a elegir la mejor solución para cada problema."
  const FundamentosBDDesc = "prendí sobre modelado, normalización, y consultas en SQL. Manejo y manipulación de datos en tablas relacionales y no relacionales. Conocí funciones y operadores de SQL, diferentes tipos de relaciones y tecnologías como DBMS. Adquirí habilidades para gestionar y almacenar datos de manera eficiente."
  const PostgreSQLDesc = "En este curso, he aprendido a trabajar con la base de datos PostgreSQL, un sistema de gestión de bases de datos relacional de código abierto. He aprendido a crear y administrar bases de datos, a escribir consultas avanzadas y a optimizar el rendimiento de las mismas. También he aprendido sobre la seguridad de la base de datos y cómo respaldar y recuperar datos."
  const SparkDesc = "Curso de Spark: Aprendí sobre procesamiento de Big Data y cómo Spark es una herramienta eficiente para ello. Adquirí conocimientos en RDDs, dataframes, Spark SQL, y Spark Streaming. También aprendí sobre integración de Spark con otros lenguajes como Python y su uso en proyectos de machine learning. Conocí cómo Spark acelera el análisis de datos y cómo optimizar su uso en diferentes entornos."
  const CalculosDiferencialDesc = "Aprendí a resolver problemas complejos de cálculo diferencial usando fórmulas y teoremas. También aprendí a utilizar herramientas como gráficos y tablas para visualizar soluciones."
  const DockerDesc = "Aprendí sobre contenedores y cómo Docker los utiliza para crear entornos aislados. Adquirí habilidades para crear imágenes, gestionar contenedores y usar Dockerfiles. Conocí sobre redes en Docker y cómo desplegar aplicaciones en contenedores. Aprendí sobre la integración de Docker en diferentes sistemas y cómo utilizarlo para mejorar la eficiencia y escalabilidad en proyectos."
  const EstadisticaInferencialDesc = "Aprendí conceptos básicos de estadística inferencial como la distribución de probabilidad, muestreo y estimación de parámetros. Apliqué tests de hipótesis y realicé análisis de varianza para tomar decisiones basadas en datos. También estudié modelos lineales y regresión logística para predecir resultados futuros."
  const OppDesc = "En el curso de programación orientada a objetos aprendí sobre la creación y uso de clases y objetos en una aplicación. Aprendí a identificar las propiedades y métodos que deben ser parte de una clase y cómo puedo usarlos para lograr la encapsulación y el reutilización de código. También aprendí sobre herencia y sobrecarga de métodos y cómo puedo usarlos para crear clases más específicas a partir de clases más generales. Además, aprendí sobre la abstracción y cómo puedo usarla para ocultar la complejidad del código y hacerlo más legible y fácil de mantener."
  const FuncionesMatematicasDesc = "Aprendí a resolver problemas matemáticos utilizando funciones y teoría de las mismas, desde cálculo básico hasta avanzado. Aplique técnicas como derivadas e integración para solucionar problemas en áreas como física y economía. También estudié el uso de software para resolver ecuaciones complejas."
  const PandasNumpyDesc = "Aprendí a manipular y analizar datos utilizando Pandas y Numpy. Conocí cómo crear y trabajar con dataframes y series de Pandas. Aprendí a hacer operaciones básicas y avanzadas de estadística con Numpy. Adquirí habilidades en la limpieza y preparación de datos para su posterior análisis. También aprendí sobre integración con otras bibliotecas de machine learning y cómo aplicar estos conocimientos en proyectos prácticos."  
  const FundamentosGCPDesc = "Aprendí sobre los servicios de infraestructura en la nube de Google, incluyendo Compute Engine, App Engine, Kubernetes Engine y Cloud Storage. Conocí cómo crear y administrar máquinas virtuales, aplicaciones y contenedores en la nube. Aprendí sobre la seguridad en la nube y cómo proteger datos y aplicaciones en GCP. Adquirí habilidades en el desarrollo de aplicaciones escalables y la integración de GCP con otras tecnologías. También aprendí cómo utilizar herramientas como BigQuery y Cloud SQL para análisis y almacenamiento de datos a gran escala."
  const IntroduccionBackendDesc = "Aprendí sobre el desarrollo de aplicaciones en el lado del servidor. Adquirí conocimientos en lenguajes de programación como Python, Node.js o Ruby. Aprendí sobre bases de datos y cómo integrarlas con aplicaciones. Conocí diferentes arquitecturas y patrones de diseño en el desarrollo de aplicaciones backend. Aprendí sobre el procesamiento de peticiones HTTP y la creación de API REST. Adquirí habilidades en el manejo de seguridad, escalabilidad y rendimiento en aplicaciones backend. También aprendí sobre el deployment y la integración continua en plataformas como Heroku o AWS."  
  const FastAPIDesc = "En el curso de fundamentos de FastAPI, aprendí a crear aplicaciones web y API en tiempo real utilizando Python y FastAPI. Aprendí cómo manejar peticiones HTTP y cómo construir rutas y funciones que procesen datos. También aprendí a utilizar los tipos de validación y autenticación para asegurar la integridad de los datos. Además, aprendí a implementar bases de datos y manejar respuestas asíncronas. FastAPI es una plataforma de alta velocidad y fácil de usar, perfecta para proyectos de back-end."
  const FastAPIItermedioDesc = "Como parte de mi formación en el curso de FastAPI intermedio y avanzado, aprendí a crear aplicaciones web escalables y eficientes utilizando esta herramienta de Python. Además, aprendí sobre el manejo de autenticación y autorización, validación de datos, documentación automatizada y cómo utilizar bases de datos en mis aplicaciones. También pude profundizar en el manejo de sesiones y uploads de archivos, y aprender sobre la integración con otros servicios y tecnologías. En resumen, este curso me permitió ampliar mis conocimientos sobre FastAPI y aplicarlos a soluciones más complejas."
  const DjangoBasicoDesc = "Aprendí los fundamentos del framework Django para desarrollar aplicaciones web en Python. Aprendí a crear modelos de datos, vistas y controladores, urls y a utilizar plantillas para el frontend. También aprendí sobre seguridad y autenticación de usuarios, así como sobre la gestión de bases de datos con Django. Ahora tengo las habilidades para desarrollar aplicaciones web robustas y escalables con Django."
  const DjangoIntermedioDesc = "Durante mi curso intermedio de Django, me enfoqué en los temas de Testing, Static files y Django Admin. Aprendí a escribir pruebas para garantizar el correcto funcionamiento de la aplicación, mejorar el rendimiento con los Static files y utilizar el Django Admin para administrar la base de datos y los modelos. Este conocimiento me permitirá crear aplicaciones web más sólidas y eficientes en el futuro."


  const range = (limit) => {
    const result = [];
    for (let i = 0; i < limit; i++) {
      result.push(i);
    }
    return result;
  }

  return (
    <>
      <Header/>
      <Titulo
        texto = "Certificados"/>
        <div className="fondo">
          <GrupoCert
          titulo="Diplomas universidades con Coursera"
          lstTitles = {[ "Excel Advanced",
            "Excel Business",
            "Google IT",
            "PostgreSQL for Everybody",
            "Python for Everybody",
            ]}
          lstImages = {[ExcelAdvanced,            
            ExcelBusiness,
            GoogleIT,
            PostgreSQLforEverybody,
            PythonforEverybody,
            ]}
          lstDescs = {[
            ExcelAdvancedDesc,
            ExcelBusinessDesc,
            GoogleITDesc,
            PostgreSQLforEverybodyDesc,
            PythonforEverybodyDesc,
          ]}
          len = {[0,1,2,3,4]}
          />
          <GrupoCert
            titulo = "Machine Learning con Scikit-Learn"
            lstTitles={[ "Machine Learning MindsDB",
              "Redes Neuronales Convolucionales",
              "Redes Neuronales con Tensorflow",
              "Regresión Lineal con Python",
              "Redes Neuronales",
              "Machine Learning con Scikit-Learn",
            ]
            }
            lstImages = {[MachineLearningMindsDB,
              RedesNeuronalesConv,
              RedesNeuronalesTf,
              RegresionLinealPython,
              RedesNeuronales,
              MachineLearningScikitLearn,
              ]}
              lstDescs= {[
                MachineLearningMindsDBDesc,
                RedesNeuronalesConvDesc,
                RedesNeuronalesTfDesc,
                RegresionLinealPythonDesc,
                RedesNeuronalesDesc,
                MachineLearningScikitLearnDesc
              ]}
              len = {[0,1,2,3,4,5]}
              />
          <GrupoCert
            titulo = "Bases de datos"
            lstTitles={[ "Fundamentos de bases de datos",
              "PostgreSQL",
              "Spark",
            ]}
            lstImages = {[FundamentosBD,
              PostgreSQL,
              Spark,
              ]}
            lstDescs = {[
              FundamentosBDDesc,
              PostgreSQLDesc,
              SparkDesc
            ]}
            len = {[0,1,2]}
              />
          <GrupoCert
            titulo = "Fundamentos"
            lstTitles={[ "Fundamentos de programación",
              "Fundamentos de Python",
              "Fundamentos de R",
              "Fundamentos de SQL",
              "Fundamentos de estadística",
              "Fundamentos de Excel",
            ]}
            lstImages = {[
              CalculosDiferencial,
              Docker,
              EstadisticaInferencial,
              FuncionesMatematicas,
              Opp,
              PandasNumpy,
              ]}
            lstDescs = {[
              CalculosDiferencialDesc,
              DockerDesc,
              EstadisticaInferencialDesc,
              FuncionesMatematicasDesc,
              OppDesc,
              PandasNumpyDesc
            ]}
            len = {[0,1,2,3,4,5]}
              />
          <GrupoCert
            titulo="Nube de servicios"
            lstTitles={[ "Google Cloud Platform"]}
            lstImages={[FundamentosGCP]}
            lstDescs = {[FundamentosGCPDesc]}
            len = {[0]}
            />
          <GrupoCert
            titulo="Backend"
            lstTitles={[ "Introducción al desarrollo backend",
              "FastAPI",
            ]}
            lstImages={[
              IntroduccionBackend,
              FastAPI,
              FastAPIItermedio,
              DjangoBasico,
              DjangoIntermedio
            ]}
            lstDescs = {[
              IntroduccionBackendDesc, 
              FastAPIDesc,
              FastAPIItermedioDesc,
              DjangoBasicoDesc,
              DjangoIntermedioDesc
            ]}
            len = {[0,1]}
            />
        </div>
      <Footer/>
    </>
  )
}

export { Certificados }