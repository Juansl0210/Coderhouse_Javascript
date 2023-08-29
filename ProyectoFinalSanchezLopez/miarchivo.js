const btn = document.querySelector('#myBtn')
class Usuario{
    constructor(nombre,banco,prestamo,interes,plazo,mes_curso,pagos_rea){
        this.nombre=nombre,
        this.banco=banco,
        this.prestamo=prestamo,
        this.interes=interes,
        this.plazo=plazo,
        this.mes_curso=mes_curso,
        this.pagos_rea=pagos_rea
    }
}
let nu=0

function calculo(d,f,l,h,j){
    let Total=(d*(1+f))
    let Pag_ini=(Total/h)
    let Total_Act=(Total-j)
    let Meses_falt=(h-l)
    let Nueva_mens=Math.round(Total_Act/Meses_falt)
    nu=Nueva_mens
    return nu;
}

let form=document.getElementById("register");
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let nombre=document.getElementById("nombre").value
    let banco=document.getElementById("banco").value
    let prestamo=document.getElementById("prestamo").value
    let interes=document.getElementById("interes").value
    let plazo=document.getElementById("plazo").value
    let mes_curso=document.getElementById("mes_curso").value
    let pagos_rea=document.getElementById("pagos_rea").value
    let usuario = new Usuario(nombre,banco,prestamo,interes,plazo,mes_curso,pagos_rea)
    localStorage.setItem("usuario",JSON.stringify(usuario));
    document.getElementById("nombre").value =""
    document.getElementById("banco").value=""
    document.getElementById("prestamo").value=""
    document.getElementById("interes").value =""
    document.getElementById("plazo").value=""
    document.getElementById("mes_curso").value=""
    document.getElementById("pagos_rea").value=""
    JSON.parse(localStorage.getItem("usuario"));
    let d=parseInt(usuario.prestamo)
    let f=parseFloat(usuario.interes)
    let l=parseInt(usuario.mes_curso)
    let h=parseInt(usuario.plazo)
    let j=parseInt(usuario.pagos_rea)
    let m=(h-l)
    calculo(d,f,l,h,j)
    //console.log(nu)
    //alert("Tus siguientes pagos deben ser de $"+calculo(d,f,l,h,j)+"MXN durante los proximos")
    let pro=document.getElementById('pru');
    pro.innerHTML =("Tus siguientes pagos deben ser de $"+nu+"MXN durante los proximos "+m+" meses")
});


btn.addEventListener('click', () => {
 
    Swal.fire({
    title: 'Está seguro de que tus datos son correctos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero'
    }).then((result) => {
    if (result.isConfirmed) {
    Swal.fire({
    title: 'Tus datos se procesaron correctamente',
    icon: 'success',
    text: 'El calculo ha sido hecho'
    })
    }
    else{
    Swal.fire({
    title: 'Tus datos no se procesaron correctamente',
    icon: 'warning',
    text: 'El calculo no te dara ningun valor'
    })
    }
    })
})

