import { useRef } from "react";
import axios from "axios";

function Registro() {

    const formRef = useRef() 

    function darAltaUsuario(event) {
        event.preventDefault(); 
        console.log("Voy a registrar Base de Datos"); 
        const form = formRef.current;
        const nombre = form.elements.nombre.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        console.log(nombre,email,password); 


        
            const datos = {
                nombre,
                email,
                password
            }
            axios.post("http://localhost:3000/registro", datos)
                .then(response => {
                  alert('Usuario Registrado Correctamente');
                  console.log(response.data)
                })
                .catch(error => {
                    console.error(error)
              });
    }
    
    
    
    return (  
    
        <div class="site-content">
            
            <div class="preloader">
                <img src="assets/images/favicon/preloader.gif" alt="preloader"/>
            </div>
            
            <header id="top-header" class="border-0">
                <div class="header-wrap">
                    <div class="header-back">
                        <a href="javascript:history.go(-1)">
                            <img src="assets/svg/black-left-arrow.svg" alt="back-btn-icon"/>
                        </a>
                    </div>
                </div>
            </header>
            
            <div class="verify-email pb-80" id="sign-up-main">
                <div class="container">
                    <div class="let-you-middle-wrap">
                        <div class="middle-first mt-24 text-center">
                            <img src="assets/images/splashscreen/small-logo.png" alt="logo" />
                            <h1 class="md-font-zen fw-400 mt-24">create account</h1>
                            <p class="sm-font-sans fw-400 mt-12">Sign up now to get access to personalized workouts and achieve your fitness goals.</p>
                        </div>
                        <form class="mt-32" ref={formRef}>
                        <div class="form-details-sign-in border mt-8">
                                <span>
                                    <img src="assets/svg/password-icon.svg" alt="mail-icon"/>
                                </span>
                                <input type="text" name="nombre" class="sign-in-custom-input md-font-sans color-black fw-400"/>
                                <i class="fas fa-eye-slash" id="eye"></i>
                            </div>
                            <div class="form-details-sign-in border">
                                <span>
                                    <img src="assets/svg/mail-icon.svg" alt="mail-icon"/>
                                </span>
                                <input type="email" name="email" value="jessica.smith@mail.com" class="sign-in-custom-input md-font-sans color-black fw-400" autocomplete="off"/>
                            </div>
                            <div class="form-details-sign-in border mt-8">
                                <span>
                                    <img src="assets/svg/password-icon.svg" alt="mail-icon"/>
                                </span>
                                <input type="password" name="password" value="fitness@123" class="sign-in-custom-input md-font-sans color-black fw-400"/>
                                <i class="fas fa-eye-slash" id="eye"></i>
                            </div>
                        </form>
                        <div class="password-btn mt-16">
                            <a href="#" onClick={darAltaUsuario}>Enviar</a>
                        </div>
                        <footer id="let-you-footer">
                            <div class="block-footer">
                                <p class="md-font-sans fw-400 text-center">Ya tienes una cuenta? <a href="/ingreso" class="md-font-sans fw-500 color-black text-center">Sign In</a></p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Registro;