import {Button} from "../Button"
import "./styles.css";
import { useContext } from "react";
import PetsOrderContext from "../../context/petsOrderContext";

export const OrderItem = (props) => {
    const {image, age, name, id} = props;

    const globalState = useContext(PetsOrderContext);

    const removePet = () => {
        globalState.removePetFromOrder(id);
    }

    return (
        <div className="order-item">
            <img className='order-item-photo' src={image} alt="pet photo" />
            <div className='order-item-desc'>
                <h1 className="order-item-name">{name}</h1>
                <p className="order-item-age">{age}</p>
            </div>
            <Button text="Remove Pet" type="secondary" isDisabled={false} action={removePet} />
        </div>
    )
}