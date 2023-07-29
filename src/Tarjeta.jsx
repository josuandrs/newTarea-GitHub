import './Tarjeta.css'

    function BloqueImg(props){

        return(
        <>
            <div className='bloque1'>
                <div className='card-container'>
                <p>Este es un efecto glass</p>
                </div>
                <img src={props.urlImagen} alt="fondo 1" />
            </div>
        </>
        )
    }


export default function Tarjeta() {
  const fondo=['https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80']

  return (
    <div>
        <BloqueImg urlImagen={fondo[0]}/>
    </div>
  )
}
