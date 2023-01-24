import "./Cert.css"

function Cert ( {titulo, descripcion, imagen , estado} ){
    return(
        <div className={estado ? "certsTrue" : "certsFalse"}>
            <h1 onClick={onclick}>{ titulo }</h1>
            <p>{ descripcion }</p>
            <img src={ imagen } alt="certificado" className={titulo} id="imagenCertificado"/>
        </div>
    )
}

export { Cert }