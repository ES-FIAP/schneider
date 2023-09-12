import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

const Calculator = () => {
  const [selectedType, setSelectedType] = useState("Vegano");
  const [dias, setDias] = useState(0);
  const [meses, setMeses] = useState(0);
  const [anos, setAnos] = useState(0);
  const [vidasSalvas, setVidasSalvas] = useState(0);
  const [litrosDeAgua, setLitrosDeAgua] = useState(0);
  const [grao, setGrao] = useState(0);
  const [floresta, setFloresta] = useState(0);
  const [gasCarbonico, setGasCarbonico] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const totalDias = dias + meses * 30 + anos * 365;
      const vidaAnimal = selectedType === "Vegano" ? 1 : 0.5;
      const agua = selectedType === "Vegano" ? 4.164 : 416.4;
      const graoValue = selectedType === "Vegano" ? 18 : 5.4;
      const florestaValue = selectedType === "Vegano" ? 3 : 0.6;
      const CO2Value = selectedType === "Vegano" ? 9 : 1.8;

      const vidasSalvasResult = vidaAnimal * totalDias;
      const litrosDeAguaResult = agua * totalDias;
      const graoResult = graoValue * totalDias;
      const florestaResult = florestaValue * totalDias;
      const gasCarbonicoResult = CO2Value * totalDias;

      setVidasSalvas(vidasSalvasResult.toFixed(2));
      setLitrosDeAgua(litrosDeAguaResult.toFixed(2));
      setGrao(graoResult.toFixed(2));
      setFloresta(florestaResult.toFixed(2));
      setGasCarbonico(gasCarbonicoResult.toFixed(2));
    };

    calculate();
  }, [selectedType, dias, meses, anos]);

  return (
    <div>
      <Header />
      <div className="container">
        <h1
          style={{
            color: "rgb(1, 34, 136)",
            fontWeight: 700,
            fontSize: "25px",
          }}
        >
          Calcule sua economia em um estilo de vida vegetariano ou vegano
        </h1>
        <div className="result"></div>

        <label
          htmlFor="type"
          style={{ fontSize: "17px", fontWeight: 600, color: "rgb(15, 0, 65)" }}
        >
          Selecione seu estilo de vida:
        </label>
        <select
          className="type"
          id="type"
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
        >
          <option value="Vegano">Vegano</option>
          <option value="Vegetariano">Vegetariano</option>
        </select>
        <div style={{ display: "flex", width: "100%" }}>
          <div>
            <h3>Dias</h3>
            <input
              placeholder="0"
              type="number"
              id="dias"
              value={dias}
              onChange={(e) => setDias(parseInt(e.target.value) || 0)}
            />
          </div>
          <div>
            <h3>Meses</h3>
            <input
              placeholder="0"
              type="number"
              id="meses"
              value={meses}
              onChange={(e) => setMeses(parseInt(e.target.value) || 0)}
            />
          </div>
          <div>
            <h3>Anos</h3>
            <input
              placeholder="0"
              type="number"
              id="anos"
              value={anos}
              onChange={(e) => setAnos(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        <h2>Até agora você salvou:</h2>
        <div
          style={{ backgroundColor: "rgb(255, 0, 60)" }}
          className="resultado"
        >
          <h3 id="vidasSalvas">{vidasSalvas}</h3>
          Vida Animal
        </div>
        <div
          style={{ backgroundColor: "rgb(0, 78, 203)" }}
          className="resultado"
        >
          <h3 id="LitrosDeAgua">{litrosDeAgua}</h3>
          Litros de Água
        </div>
        <div
          style={{ backgroundColor: "rgb(255, 153, 0)" }}
          className="resultado"
        >
          <h3 id="Graos">{grao}</h3>
          kg de grão
        </div>
        <div
          style={{ backgroundColor: "rgb(0, 129, 0)" }}
          className="resultado"
        >
          <h3 id="Floresta">{floresta}</h3>
          m² de terreno florestado
        </div>
        <div style={{ backgroundColor: "purple" }} className="resultado">
          <h3 id="gasCarbonico">{gasCarbonico}</h3>
          kg CO2
        </div>
      </div>
    </div>
  );
};
export default Calculator;
