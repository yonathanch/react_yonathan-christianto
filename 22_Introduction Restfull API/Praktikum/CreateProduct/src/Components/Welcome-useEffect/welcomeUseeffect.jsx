import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);

}

export default Welcome