import { Button } from "~/components/ui/Button";
import type { Route } from "./+types/home";
import { TextField } from "~/components/ui/TextField";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<header className="flex justify-around py-3">
				<h1 className="font-bold text-3xl">Reservas Moreno</h1>
				<ul className="flex gap-16 items-center">
					<li>Legal</li>
					<li>Mi cuenta</li>
					<li>
						<Button>Salir</Button>
					</li>
				</ul>
			</header>
			<div className="py-10 block m-auto w-9/12">
				<div className="flex justify-between items-center">
					<h1 className="text-5xl font-semibold">Reserva en dpto 1</h1>
					<p className="text-2xl">Monto a pagar: <strong>$30000</strong></p>
				</div>
				<div className="my-10 px-6 py-8 rounded-2xl flex justify-around gap-4 gradient-item">

					<div className="px-5 py-4 rounded-xl text-center">
						<p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Inicio</p>
						<p className="text-[#4a463d] font-medium">13 de junio</p>
					</div>

					<div className="px-5 py-4 rounded-xl text-center">
						<p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Fin</p>
						<p className="text-[#4a463d] font-medium">13 de junio</p>
					</div>

					<div className="px-5 py-4 rounded-xl text-center">
						<p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Ubicación</p>
						<p className="text-[#4a463d] font-medium">Departamento 1</p>
					</div>

					<div className="px-5 py-4 rounded-xl text-center">
						<p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Estado</p>
						<p className="text-[#b5532f] font-semibold flex items-center justify-center gap-1.5">
							<span className="w-1.5 h-1.5 rounded-full bg-[#b5532f] shadow-[0_0_4px_rgba(181,83,47,0.6)]"></span>
							No completa
						</p>
					</div>
				</div>

				<div className="my-10 flex justify-between">
					<h3 className="text-3xl">Pagos hechos</h3>
					<div className="flex gap-x-10">
						<Button>Pagar resto reserva</Button>
						<Button variant="danger">Cancelar reserva</Button>
						<Button variant="secondary">Modificar reserva</Button>
                    </div>
					<TextField className="w-96" />
				</div>
			</div>
		</>
	);
}
