
let usuario_name = document.getElementById('usuario_name')
let contraseña_incorecta = document.getElementById('contraseña_incorecta')
let saldo21 = document.getElementById('saldo21')
let taitle = document.getElementById('taitle')
let sutrao = document.getElementById('sutrao')
let sutrao1 = document.getElementById('sutrao1')
let desea = document.getElementById('desea')
let saldoactual = document.getElementById('saldoactual')
var URL = "idex1.html";


                          /* inicio de secion  */




function inicioSecion() {
    if (document.getElementById('usuario_Name').value === cuenta_1.nombre) {
        if (document.getElementById('contraseña').value === "79518") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        }else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'

        }
         if (document.getElementById('contraseña').value === "79518") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
         
     }
    if (document.getElementById('usuario_Name').value === cuenta_2.nombre) {
        if (document.getElementById('contraseña').value === "40157") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        } else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'
        }
        if (document.getElementById('contraseña').value === "40157") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_3.nombre) {
        if (document.getElementById('contraseña').value === "80017") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        } else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'
        }
        if (document.getElementById('contraseña').value === "80017") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_4.nombre) {
        if (document.getElementById('contraseña').value === "702640") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        } else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'
        }
        if (document.getElementById('contraseña').value === "702640") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_5.nombre) {
        if (document.getElementById('contraseña').value === "48197") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        } else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'
        }
        if (document.getElementById('contraseña').value === "48197") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_6.nombre) {
        if (document.getElementById('contraseña').value === "70249") {
            document.getElementById('container_cajero1').style.display = 'none'
            document.getElementById('container_cajero2').style.display = 'block'
        } else {
            return contraseña_incorecta.innerHTML = 'contaseña incorecta o usuario incorecto'
        }
        if (document.getElementById('contraseña').value === "70249") {
            document.getElementById('contraseña_incorecta').style.display = 'none'
        }
    } 

}


 
function deseas(){
    document.getElementById('caja_btn').style.display = 'block'
        document.getElementById('btm_1').style.display = 'none'
        document.getElementById('taitle_1').style.display = 'block'
        document.getElementById('desea23').style.display = 'none'
        document.getElementById('cuentasf').style.display = 'none'
        sutrao.innerHTML = 'Bienvenido'
        if(document.getElementById('contraseña').value === "79518"){
           saldo21.innerHTML = cuenta_1.saldo + "$"
           sutrao1.innerHTML = cuenta_1.nombre
         }
        if(document.getElementById('contraseña').value === "40157"){
            saldo21.innerHTML = cuenta_2.saldo + "$"
            sutrao1.innerHTML = cuenta_2.nombre
         }
         if(document.getElementById('contraseña').value === "80017"){
            saldo21.innerHTML = cuenta_3.saldo + "$"
            sutrao1.innerHTML = cuenta_3.nombre
         }
         if(document.getElementById('contraseña').value === "702640"){
            saldo21.innerHTML = cuenta_4.saldo + "$"
            sutrao1.innerHTML = cuenta_4.nombre
         }
         if(document.getElementById('contraseña').value === "48197"){
            saldo21.innerHTML = cuenta_5.saldo + "$"
            sutrao1.innerHTML = cuenta_5.nombre
         }
         if(document.getElementById('contraseña').value === "70249"){
            saldo21.innerHTML = cuenta_6.saldo + "$"
            sutrao1.innerHTML = cuenta_6.nombre
         }
}





                               /* funcion de btn */
 function btr_deposito(){
    document.getElementById('retiro').style.display = 'block'
    document.getElementById('btn-retirar').style.display = 'none'
    document.getElementById('btn_depositar').style.display = 'block'
    document.getElementById('btn_depositar1').style.background = ' rgba(0, 0, 0, 0.467)'
    document.getElementById('btn-retirar1').style.background = 'green'
    document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
    desea.innerHTML = "depositar"
 }


 function btr_retiro(){
    document.getElementById('retiro').style.display = 'block'
    document.getElementById('btn_depositar').style.display = 'none'
    document.getElementById('btn-retirar').style.display = 'block'
    document.getElementById('btn-retirar1').style.background = 'rgba(0, 0, 0, 0.467)'
    document.getElementById('btn_depositar1').style.background = 'green'
    document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
    desea.innerHTML = "retirar"
 }












/*------------------------------------ DEPOSITAR Y RETIAR ----------------------------------------------------*/
                                         /* deposito*/


                                   

Depositar = () => {
    if (document.getElementById('usuario_Name').value === cuenta_1.nombre){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
            if(saldo<=9999){
               saldo[0] += monto_deposito
            saldo21.innerHTML = cuenta_1.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)' 
            }else{
                desea.innerHTML = `no se puede depositar mas de 10000 $ en la cuenta`
                document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
                 cuenta_1.saldo = 990
            }
            

                
           
    } 
       
    if (document.getElementById('usuario_Name').value === cuenta_2.nombre){
        if(cuenta_2.saldo >= 1 && cuenta_2.saldo<=1000){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
            cuenta_2.saldo += monto_deposito
            saldo21.innerHTML = cuenta_2.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else if (cuenta_2.saldo >=990 && cuenta_2.saldo <=1001 ) {
            desea.innerHTML = `no se puede depositar mas de 1000 $ en la cuenta`
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            cuenta_2.saldo = 1000
        }else {
            saldo21.innerHTML = cuenta_1.saldo + "$"
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_3.nombre){
        if(cuenta_3.saldo >= 1 && cuenta_3.saldo<=980){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
            cuenta_3.saldo += monto_deposito
            saldo21.innerHTML = cuenta_3.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else if (cuenta_3.saldo >=990 && cuenta_3.saldo <=1001 ) {
            desea.innerHTML = `no se puede depositar mas de 1000 $ en la cuenta`
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            cuenta_3.saldo = 1000
        }else {
            saldo21.innerHTML = cuenta_1.saldo + "$"
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_4.nombre){
        if(cuenta_4.saldo >= 1 && cuenta_4.saldo<=990){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value );
            const saldo = parseFloat(document.getElementById('saldo21').value) 
            cuenta_4.saldo += monto_deposito
            saldo21.innerHTML = cuenta_4.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else if (cuenta_4.saldo >=990 && cuenta_4.saldo <=1001 ) {
            desea.innerHTML = `no se puede depositar mas de 1000 $ en la cuenta`
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            cuenta_4.saldo = 1000
        }else  {
            saldo21.innerHTML = cuenta_1.saldo + "$"
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_5.nombre){
        if(cuenta_5.saldo >= 1 && cuenta_5.saldo<=980){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
            cuenta_5.saldo += monto_deposito
            saldo21.innerHTML = cuenta_5.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else if (cuenta_5.saldo >=990 && cuenta_5.saldo <=1001 ) {
            desea.innerHTML = `no se puede depositar mas de 1000 $ en la cuenta`
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            cuenta_5.saldo = 1000
        }else {
            saldo21.innerHTML = cuenta_1.saldo + "$"
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_6.nombre){
        if(cuenta_6.saldo >= 1 && cuenta_6.saldo<=980){
            const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
            cuenta_6.saldo += monto_deposito
            saldo21.innerHTML = cuenta_6.saldo + "$"
            desea.innerHTML = "deposito realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else if (cuenta_5.saldo >=990 && cuenta_5.saldo <=1001 ) {
            desea.innerHTML = `no se puede depositar mas de 1000 $ en la cuenta`
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            cuenta_5.saldo = 1000
        }else {
            saldo21.innerHTML = cuenta_1.saldo + "$"
        }
    }
}

                                   /* RETIRAR */


                                   

retirar = () => {
    if (document.getElementById('usuario_Name').value === cuenta_1.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        saldo[0] -= monto_deposito
        saldo21.innerHTML = cuenta_1.saldo + "$"
        if (cuenta_1.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
            cuenta_1.saldo = 0
        }else if(cuenta_1.saldo >=1 && cuenta_1.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }

    if (document.getElementById('usuario_Name').value === cuenta_2.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        cuenta_2.saldo -= monto_deposito
        saldo21.innerHTML = cuenta_2.saldo + "$"
        if (cuenta_2.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
        }else if(cuenta_2.saldo >=1 && cuenta_2.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }


    if (document.getElementById('usuario_Name').value === cuenta_3.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        cuenta_3.saldo -= monto_deposito
        saldo21.innerHTML = cuenta_3.saldo + "$"
        if (cuenta_3.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
        }else if(cuenta_3.saldo >=1 && cuenta_3.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }


    if (document.getElementById('usuario_Name').value === cuenta_4.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        cuenta_4.saldo -= monto_deposito
        saldo21.innerHTML = cuenta_4.saldo + "$"
        if (cuenta_4.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
        }else if(cuenta_4.saldo >=1 && cuenta_1.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }


    if (document.getElementById('usuario_Name').value === cuenta_5.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        cuenta_5.saldo -= monto_deposito
        saldo21.innerHTML = cuenta_5.saldo + "$"
        if (cuenta_5.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
        }else if(cuenta_5.saldo >=1 && cuenta_5.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }


    if (document.getElementById('usuario_Name').value === cuenta_6.nombre){
        const monto_deposito = parseFloat(document.getElementById('monto_deposito').value);
        cuenta_6.saldo -= monto_deposito
        saldo21.innerHTML = cuenta_6.saldo + "$"
        if (cuenta_6.saldo <= -1) {
            desea.innerHTML = 'fondo insuficientes'
            document.getElementById('desea').style.background = 'rgba(192, 27, 15, 0.483)'
            saldo21.innerHTML = 0
        }else if(cuenta_6.saldo >=1 && cuenta_6.saldo <=10000){
            desea.innerHTML = "retiro realizado con exito"
            document.getElementById('desea').style.background = 'rgba(15, 192, 27, 0.483)'
        }else {
            desea.innerHTML = "desea retirar o depositar"
            document.getElementById('desea').style.background = 'rgba(70, 70, 70, 0.472)'
        }
    }
}


function refrescar() {
     window.location.reload() 
    /* location.href = 'index.html' */
}