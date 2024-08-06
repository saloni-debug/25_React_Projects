import { useState } from "react";
export default function RandomColorGenerator() {
    const [colorType, setColorType] = useState("HEX");
    const [color, setColor] = useState("#ffffff");

    const utility = (arrLength) => {
        return Math.floor(Math.random()*arrLength);
    } 
   const handleRandomHexColor = () => {
        let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += colorArr[utility(colorArr.length)];
        }
        setColor(hexColor); // console.log(hexColor);
    }

    const handleRandomRgbColor = () => {
       let r = utility(256);
       let g = utility(256);
       let b = utility(256);
       setColor(`rgb(${r},${g},${b})`);
    }

    return <div className="wrapper"
        style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: color
        }}>
        <button onClick={colorType === "HEX" ?  handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>
        <button onClick={()=> setColorType("HEX")}>Random Hex Color</button>
        <button onClick={() => setColorType("RGB")}>Random RGB Color</button>
        <p>{color}</p>
    </div>

}