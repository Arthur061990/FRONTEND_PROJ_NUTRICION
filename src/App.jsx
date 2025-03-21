import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registro from './componentes/vistas/registro';
import Ingreso from "./componentes/vistas/ingreso";
import AuthState from '../tools/auth.state';



function App() {

	return (  
		<AuthState>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/ingreso" />} />
					<Route path={"/ingreso"} element={<Ingreso />}/>
					<Route path={"/registro"} element={<Registro />}/>
				</Routes>
			</BrowserRouter>
		</AuthState>
	);
}

export default App;