function Hero() {

    const saludar = () => {
        alert('Hola')
    }

    return (
        <>
            <h1>Bienvenidos a mi tienda</h1>
            <p>Vendemos zapatillas y zapatos</p>
            {/* <button onClick={saludar}>Saludar</button> */}
        </>
    )
}

export default Hero