import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const registrar=({})
  function click(event){
    
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
	
		<div class="verify-email pb-80" id="sign-in-main">
			<div class="container">
				<div class="let-you-middle-wrap">
					<div class="middle-first mt-24 text-center">
						<img src="assets/images/splashscreen/small-logo.png" alt="logo" />
						<h1 class="md-font-zen fw-400 mt-24">WELCOME BACK</h1>
						<p class="sm-font-sans fw-400 mt-12">Sign in now to get access to personalized workouts and achieve your fitness goals.</p>
					</div>
					<form class="mt-32">
						<div class="form-details-sign-in border">
							<span>
								<img src="assets/svg/mail-icon.svg" alt="mail-icon"/>
							</span>
							<input type="email" id="email" placeholder="Email Address" class="sign-in-custom-input md-font-sans fw-400" autocomplete="off"/>
						</div>
						<div class="form-details-sign-in border mt-8">
							<span>
								<img src="assets/svg/password-icon.svg" alt="mail-icon"/>
							</span>
							<input type="password" id="password" placeholder="Password" class="sign-in-custom-input md-font-sans fw-400"/>
							<i class="fas fa-eye-slash" id="eye"></i>
						</div>
					</form>
					<div class="password-btn mt-16">
						<a href="#" onClick={}>Sign IN</a>
					</div>
					<div class="or-section mt-32">
						<p class="md-font-sans fw-400 text-center">or continue with</p>
					</div>
					<div class="middle-second">
						<div class="icons_main mt-32">
							<a href="https://www.facebook.com" target="_blank" class="border">
								<img src="assets/svg/fb-icon.svg" alt="Icon-fb"/>
							</a>
							<a href="https://www.google.com" target="_blank" class="border">
								<img src="assets/svg/google-icon.svg" alt="Icon-google"/>
							</a>
							<a href="https://www.icloud.com" target="_blank" class="border">
								<img class="apple" src="assets/svg/apple-icon.svg" alt="Icon-apple"/>
							</a>
							<a href="https://wa.me/+12345678899" target="_blank" class="border">
								<img src="assets/svg/whatsapp-icon.svg" alt="Icon-whatsapp"/>
							</a>
						</div>
					</div>
					<footer id="let-you-footer">
						<div class="block-footer">
							<p class="md-font-sans fw-400 text-center">Already have an account? <a href="sign-up.html" class="md-font-sans fw-500 color-black text-center">Sign up</a></p>
						</div>
					</footer>
				</div>
			</div>
		</div>
	</div>
  )
}

export default App
