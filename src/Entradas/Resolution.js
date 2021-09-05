import menu from '../img/Resolution/menuPrincipal-Resolution.jpg';
import bossRojo from '../img/Resolution/bossRojo-Resolution.jpg';
import bossAzul from '../img/Resolution/bossAzul-Resolution.jpg';
import bossNaranja from '../img/Resolution/bossNaranja-Resolution.jpg';
import finalBoss from '../img/Resolution/finalBoss-Resolution.jpg';

import resolution from './resolution/Resolution.apk';

function Resolution(){
    return (
        <div className="entrada-completa">
            <h1>Resolution</h1>
            <p>Resolution es un proyecto hecho en el motor de videojuegos 
                <b><a href="https://unity.com/es" target="_blank"> Unity</a></b>. 
                Es un juego inspirado estilo Geometry Dash para dispositivos móviles aunque con alguna que otra variación.
            </p>
            <img src={menu} alt="foto del juego"/>
            <h3>Índice</h3>
            <ul className="indice">
                <li><b><a href="#descripcion">Descripción</a></b></li>
                <li><b><a href="#bosses">Bosses</a></b></li>
                <li><b><a href="#bossRojo">Boss Rojo</a></b></li>
                <li><b><a href="#bossAzul">Boss Azul</a></b></li>
                <li><b><a href="#bossNaranja">Boss Naranja</a></b></li>
                <li><b><a href="#finalBoss">Final Boss</a></b></li>
                <li><b><a href="#descarga">Descarga</a></b></li>
            </ul>

            <h3 id="descripcion">Descripción</h3>
            <p>
                En él, tomas el control de un personaje el cual no solo tiene la habilidad de poder saltar dos veces impulsándose
                dos veces sino que también puede disparar rayos láser por los ojos. ¿Para qué?, os preguntaréis, pues para hacer frente
                a diversos bosses o jefes que se encontrará en su camino. 
            </p>
            <p>   
                Estos bosses no son ni más ni menos que ovnis que
                intentarán detenerte en tu camino. Una vez derrotas a 3 ovnis aparece un gran jefe. Este jefe es mucho más
                duro que los anteriores pero a su vez te dará más puntos.
            </p>
            <h3 id="bosses">Bosses</h3>
            <p>
                Hay 3 tipos de bosses diferentes, cada uno con sus habilidades únicas:
            </p>

            <h4 id="bossRojo">Boss Rojo</h4>
            <img src={bossRojo} alt="foto del boss rojo"/> 
            <p>Este boss tiene una mecánica muy sencilla, acercarse lo máximo posible a ti para autoinmolarse.
                Para que no ocurra esto, debes intentar matarlo lo antes posible, con la dificultad de que tiene una gran
                resistencia.
            </p>

            <h4 id="bossAzul">Boss Azul</h4>
            <img src={bossAzul} alt="foto del boss azul"/>
            <p>Este boss en cambio prefiere no arriesgarse a pelear y manda a sus súbditos a que lo hagan por él.
                Estos enemigos tienen una diferencia a los normales a demás de su pequeña estatura y es que corren mucho más
                rápido poniendo a prueba tus reflejos.
            </p>

            <h4 id="bossNaranja">Boss Naranja</h4>
            <img src={bossNaranja} alt="foto del boss naranja"/>
            <p>Este último mini-boss presente la peculiaridad de poder disparar bolas de fuego mortales para 
                nuestro personaje. Tendremos que sincronizar nuestros saltos para esquivar a los enemigos normales
                con los disparos de este boss el cual podrá dispararnos en cualquier momento teniendo que utilizar
                constantemente la mecánica del doble salto.
            </p>

            <h4 id="finalBoss">Final Boss</h4>
            <img src={finalBoss} alt="foto del final boss"/>
            <p>Si hasta ahora los bosses que llevamos visto os han parecido difíciles de superar preparaos para el final boss.
                Este boss tiene las características de los 3 anteriores: posee la gran resistencia del rojo siendo inlcuso mayor que esta,
                puede disparar bolas de fuego como el naranja y por si no fuera poco, invoca súbditos como lo hace el azul.
                Si llegamos a derrotar a este boss conseguiríamos una gran bonificación y volveríamos a derrotar a otros 3 bosses para 
                volvernos a enfrentar a este.
            </p>

            <h3 id="descarga">Descarga</h3>
            <p>Por último, si quieres descargar el juego lo puedes hacer a través de este link:</p>

            <p>
                <ul>
                    <li><b><a href={resolution} download>Descarga</a></b></li>
                </ul>
            </p>

            <p>He de mencionar que el juego no funciona en determinados dispositivos debido a una 
                incompatibilidad de la arquitectura del procesador.
            </p>

        </div>
    );
}


export default Resolution;