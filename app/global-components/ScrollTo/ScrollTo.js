import { scrollTo } from "@/app/util/scrollTo";

const ScrollTo = ({ toId, toRef, duration, children }) => {

	const handleClick = () => {
		return scrollTo({ id: toId, ref: toRef, duration });
	};

	return <div onClick={handleClick}>{children}</div>;
};

export default ScrollTo;
