import React from "react";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion"
import Footer from "../Footer/Footer"
import styles from "./Proyectos.module.css"
import { Link } from "react-router-dom";

const Proyectos = () => {
  return(
      <div className={styles.mainProyectos}>
          <BarraDeNavegacion/>
          <h2 className= {styles.h2Proyectos}>Proyectos</h2>
          <section className={styles.boxContainer}>
            <Link to ="/proyectoescolar" className={styles.linkProyectos}>
                <h3>El campito escolar</h3>
            </Link>
          </section>
          <Footer/>
      </div>
  )
}

export default Proyectos;
