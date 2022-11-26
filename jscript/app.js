console.log("Ejecutando");

const formulario = document.querySelector('#formulario')
const box =document.querySelector('#exampleCheck')

        formulario.addEventListener('submit',e=>{
            console.log('Click en enviar')
            e.preventDefault()

            const datos = new FormData(formulario)

            console.log('campo email',datos.get('emailCampo'))
            console.log('campo contraseña', datos.get('passCampo'))
            
            const js = document.querySelector('#exampleCheck1');
            console.log('Valor de checkbox',js.checked);


            formulario.reset(); 
        });


 