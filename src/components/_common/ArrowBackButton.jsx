import { ChevronLeftOutline } from "../../assets/icons/index";
import { useNavigate } from "react-router-dom";
const ArrowBackButtom = () => {
	const navigate = useNavigate();

	const handleBackToLogin = () => {
		navigate(-1);
	};

	return (
		<div className="w-[30px] h-[30px] flex justify-start items-center">
			<button className="text-gray-600 " onClick={handleBackToLogin}>
				<img className=" font-bold" src={ChevronLeftOutline} alt="go back" />
			</button>
		</div>
	);
};

export default ArrowBackButtom;
