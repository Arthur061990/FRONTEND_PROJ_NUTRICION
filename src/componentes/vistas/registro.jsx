import { useRef } from "react";
import axios from "axios";

function Registro() {
    const formRef = useRef();

    function darAltaUsuario(event) {
        event.preventDefault();
        console.log("Voy a registrar Base de Datos");
        const form = formRef.current;
        const username = form.elements.nombre.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        console.log(username, email, password);

        const datos = {
            username,
            email,
            password
        };
        axios.post("http://localhost:3005/registro", datos)
            .then(response => {
                alert('Usuario Registrado Correctamente');
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="site-content">
            {/*<div className="preloader">
                <img src="/images/favicon/preloader.gif" alt="preloader" />
            </div>*/}

            <header id="top-header" className="border-0">
                <div className="header-wrap">
                    <div className="header-back">
                        <a href="javascript:history.go(-1)">
                            <img src="/svg/black-left-arrow.svg" alt="back-btn-icon" />
                        </a>
                    </div>
                </div>
            </header>

            <div className="verify-email pb-80" id="sign-up-main">
                <div className="container">
                    <div className="let-you-middle-wrap">
                        <div className="middle-first mt-24 text-center">
                            <img src="/images/splashscreen/small-logo.png" alt="logo" />
                            <h1 className="md-font-zen fw-400 mt-24">Create Account</h1>
                            <p className="sm-font-sans fw-400 mt-12">
                                Sign up now to get access to personalized workouts and achieve your fitness goals.
                            </p>
                        </div>
                        <form className="mt-32" ref={formRef}>
                            <div className="form-details-sign-in border mt-8">
                                <span>
                                    <img src="/svg/password-icon.svg" alt="password-icon" />
                                </span>
                                <input type="text" name="nombre" className="sign-in-custom-input md-font-sans color-black fw-400" />
                            </div>
                            <div className="form-details-sign-in border mt-8">
                                <span>
                                    <img src="/svg/mail-icon.svg" alt="mail-icon" />
                                </span>
                                <input type="email" name="email" className="sign-in-custom-input md-font-sans color-black fw-400" autoComplete="off" />
                            </div>
                            <div className="form-details-sign-in border mt-8">
                                <span>
                                    <img src="/svg/password-icon.svg" alt="password-icon" />
                                </span>
                                <input type="password" name="password" className="sign-in-custom-input md-font-sans color-black fw-400" />
                                <i className="fas fa-eye-slash" id="eye"></i>
                            </div>
                        </form>
                        <div className="password-btn mt-16">
                            <button type="button" className="btn btn-primary" onClick={darAltaUsuario}>Enviar</button>
                        </div>
                        <footer id="let-you-footer">
                            <div className="block-footer">
                                <p className="md-font-sans fw-400 text-center">
                                    ¿Ya tienes una cuenta?{" "}
                                    <a href="/ingreso" className="md-font-sans fw-500 color-black text-center">Iniciar sesión</a>
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;