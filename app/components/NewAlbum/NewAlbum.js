export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-white font-permanentMarker text-xl">Nuevo Album</h4>
			<h4 className="text-white font-rockSalt text-xl">UdG Ya!</h4>
			<p className="text-fluo-green text-base">Estreno el 15 de diciembre</p>
		</div>
	);
}
