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

import ExcelAdvanced from "../assets/diplomas/Coursera/Coursera Excel Skill Advanced.jpg"
import ExcelBusiness from "../assets/diplomas/Coursera/Coursera Excel Skill for Business.jpg"
import GoogleIT from "../assets/diplomas/Coursera/Coursera Google IT Automation.jpg"
import PostgreSQLforEverybody from "../assets/diplomas/Coursera/Coursera PostgreSQL.jpg"
import PythonforEverybody from "../assets/diplomas/Coursera/Coursera Python for Everybody.jpg"

function Certificados(){
  return (
    <>
      <Header/>
      <Titulo
        texto = "Certificados"/>
        <div className="fondo">
          <GrupoCert
          titulo="Diplomas universidades con Coursera"
          lst = {[ExcelAdvanced,
            ExcelBusiness,
            GoogleIT,
            PostgreSQLforEverybody,
            PythonforEverybody]}/>
          <GrupoCert
            titulo = "Machine Learning con Scikit-Learn"
            lst = {[MachineLearningMindsDB, 
              RedesNeuronalesConv, 
              RedesNeuronalesTf, 
              RegresionLinealPython, 
              RedesNeuronales,
              MachineLearningScikitLearn]}/>
          <GrupoCert
            titulo = "Bases de datos"
            lst = {[FundamentosBD, 
              PostgreSQL, 
              Spark]}/>
          <GrupoCert
            titulo= "Fundamentos"
            lst = {[ CalculosDiferencial,
              Docker,
              EstadisticaInferencial,
              FuncionesMatematicas,
              Opp,
              PandasNumpy]}/>
          <GrupoCert
            titulo="Nube de servicios"
            lst={[FundamentosGCP]}/>
          <GrupoCert
            titulo="Backend"
            lst={[IntroduccionBackend, 
            FastAPI]}/>
        </div>
      <Footer/>
    </>
  )
}

export { Certificados }