import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { phoneDetailsService } from "../../services/phone.services"

function PhoneDetails( {phoneId} ) {
    const navigate = useNavigate();
    const [phone, setPhone] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchPhoneDetails();
    }, []);

    const fetchPhoneDetails = async () => {
        try {
            const response = await phoneDetailsService(phoneId);
            setPhone(response.data);
            setIsFetching(false);
        } catch (error) {
            navigate("/error");
        }
    }

    if (isFetching) return <div>Loading...</div>;

  return (
    <div>
        <h5>{phone.manufacturer}</h5>
        <p>{phone.description}</p>
        <p>{phone.color}</p>
        <p>{phone.price}</p>
        <p>{phone.screen}</p>
        <p>{phone.processor}</p>
        <p>{phone.ram}</p>
    </div>
  )
}

export default PhoneDetails