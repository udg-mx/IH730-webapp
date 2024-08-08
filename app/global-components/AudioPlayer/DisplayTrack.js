import { useEffect } from "react";

export default function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef, handleNext, trackIndex }) {

	useEffect(() => {

		const trackDuration = () => {
			const seconds = audioRef.current.duration;
			setDuration(seconds);
			progressBarRef.current.max = seconds;
		};


		trackDuration();
	}, [audioRef, progressBarRef, setDuration]);

	return (
		<div className="text-[#6f705f]">
			<audio src={currentTrack.src} preload="metadata" ref={audioRef} onEnded={handleNext} />
			<div className="text-base">
				<p className="font-bold">
					{trackIndex + 1}. {currentTrack.title}
				</p>
				<p>
					Artist: <span className="italic">{currentTrack.author}</span>
				</p>
			</div>
		</div>
	);
}
