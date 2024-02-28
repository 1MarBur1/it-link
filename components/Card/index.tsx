import { Props } from "./Card.props";

const Card = ({ children, className='' }: Props) => {
	return (
		<div className={className}>
			{children}
		</div>
	);
};

export default Card;
