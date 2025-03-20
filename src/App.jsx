import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registro from './componentes/vistas/registro';
import Ingreso from "./componentes/vistas/ingreso";



function App() {

	return (  

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/ingreso" />} />
				<Route path={"/ingreso"} element={<Ingreso />}/>
				<Route path={"/registro"} element={<Registro />}/>
			</Routes>

		</BrowserRouter>

	);
}

export default App;