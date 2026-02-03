import { useEffect } from "react";

function CountMessage(count, setMessage) {
    useEffect(() => {
        setMessage(`Count updated to ${count}`);
    }, [count, setMessage]);
}

export default CountMessage;
