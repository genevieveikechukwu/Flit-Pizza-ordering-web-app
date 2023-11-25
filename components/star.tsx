import { FaStar } from "react-icons/fa";

interface StarProps {
    star?: number;
}

const Star = ({ star }: StarProps) => {
    const getStarColor = (index: number): string => {
        // Define colors based on star rating
        if (star && index <= star) {
            return "#FACC15"; // Color for selected stars
        } else {
            return "#CCC"; // Color for unselected stars
        }
    };

    return (
        <div className="flex text-2xl">
            {[1, 2, 3, 4, 5].map((index) => (
                <FaStar key={index} style={{ color: getStarColor(index),}} />
            ))}
        </div>
    );
};

export default Star;
