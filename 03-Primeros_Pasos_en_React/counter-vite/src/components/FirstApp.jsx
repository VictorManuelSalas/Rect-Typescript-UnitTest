
/**
 * ------------------COMPONENTE--------------
 * React permite agregar codigo js en el html ya sea operaciones, variables, etc
 * usando las llaves simples {}.
 * De igual manera nos permite declarar variables dentro de la funcion antes del 
 * return y fuera de la funcion igual.
 * 
 * REGLA: Normalmente las variables se agregan en un cierto lugar dependiendo si 
 * es dinamica / cambiara mucho o nunca cambia su valor.
 *  - Varibales estaticas: No es recomendado que este dentro de la funcion
 */

const newMessage = "Este es un valor de una variable que esta fuera de la funcion ya que no cambiara su valor." //No se reprosesara por react
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const boleano = true
const user = {
    name: "Manuel Nuñez",
    years: 24,
    email: "vnunez@quickapps.mx",
    phone: 8141448826
} //Cunado se quiere pasar un objeto en el html tal cual no se puede, revisa en su etiqueta abajo


/**
 * Estas funciones solo pueden ser usadas en el html ya que no son asincrona
 *  ya que react toma estas funciones como objetos y los objetos no pueden ser renderisados directamente
 * 
 * Nota: Las funciones pueden definirse afuera o dentro de la funcion principal App,
 * PERO SE RECOMIENDA QUE SE USEN AFUERA DEL FUNCIONAL COMPONENT SOLO CUANDO NO ES REQUERIDO
*/
const saludar = (name) => `Hola, ${name}`
const getBirthYear = (years) => {
    const today = new Date()
    return `Tu naciste en el año ${today.getFullYear() - years}`

}

/**
 * Formas de recibir props: 
 *  (props) => variable entera
 *  ({title, name}) => destructuracion
 */
export const FirstApp = ({ title = 'Aprendiendo Props en React', name: nombre, fecha, ciudad, años }) => {
    console.log(title)
    return (
        // ← Nodo Padre <></>
        <>
            <h1> First App {saludar(user.name)} </h1>
            <p>Soy un subtitulo {getBirthYear(user.years)}</p>
            <br />
            <hr />
            <b>Como agregar expreciones js en el jsx se usan las llaves: {1 + 1}.</b>
            <br />
            <i>Aqui se hace un calculo directo en el html: {1 + 23}</i><br />
            <p>{newMessage}</p>
            <h5>{array}</h5>
            <h5>{boleano}</h5>
            <hr />
            <h3>Maneras de usar objetos en html</h3>
            <p>No se pude agregar un objeto directo tal cual ya que react rompera la app, la unica forma es usando la entidad del valor.
                <br />  Ejemplo tenemos el objeto: <br /> <code>{JSON.stringify(user)}</code>
                <br /> Para poder usarlo use el JSON.stringify(user) para poder dar referencia al objeto entero. Si solo
                queremos mostrar un elemento de este objeto es usando user.name en llaves: {user.name}

                {/* <b> Esta es la manera erronea de agregar un objeto: {user} </b> */}
            </p>

            <img src="https://img-19.ccm.net/MaHhW0M4tN1wASsc5aUYTlr8rKI=/1500x/smart/495748f6128844678a8b241cc8603846/ccmcms-esccm/39490056.jpeg" alt="" />
            <br />
            <hr />
            <h3>Props en React</h3>
            <p>Las props son variables/valores recibidad desde un componente padre, estos son recibidos desde los parametros de
                el funcional component (props) y hasta nos permite destructurar los para obtener solo los elementos que necesitamos.
            </p>
            <ul>
                <li> Titulo (Valor por default): {title}</li>
                <li> Name (Si no se encuntra imprime algo): {nombre || "Nombre no recibido"}</li>
                <li> Ciudad (Valor desde el componente padre): {ciudad}</li>
                <li> Fecha (Valor desde el componente padre): {JSON.stringify(fecha)}</li>
                <li> Año (Valor numerico desde el componente padre): {años}</li>

            </ul>
        </>
    )
}