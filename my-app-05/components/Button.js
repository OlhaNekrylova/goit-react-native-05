import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

const HeaderButton = ({ name, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Feather name={name} size={24} color="#BDBDBD" />
        </TouchableWithoutFeedback>
    );
};
export default HeaderButton;