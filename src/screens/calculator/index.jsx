import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Favorite, WaterDrop, Forest, Spa, Cloud } from "@mui/icons-material";
import {
  ResultCard,
  Input,
  ContainerInput,
  Select,
  Option,
  Title,
  ContainerInputs,
  ContainerPage,
  Card,
  TextInput,
  TitleResult,
  ContainerColums,
} from "./styles";

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
    <ContainerPage>
      <Header />
      <Card>
        <Title>
          Calcule sua economia em um estilo de vida vegetariano ou vegano
        </Title>
        <div className="result"></div>

        <ContainerColums>
          <ContainerInputs>
            <h2
              htmlFor="type"
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "rgb(15, 0, 65)",
                textAlign:'center'
              }}
            >
              Selecione seu estilo de vida:
            </h2>
            <Select
              className="type"
              id="type"
              onChange={(e) => setSelectedType(e.target.value)}
              value={selectedType}
            >
              <Option value="Vegano">Vegano</Option>
              <Option value="Vegetariano">Vegetariano</Option>
            </Select>
            <ContainerInput>
              <Input
                placeholder="0"
                type="number"
                id="dias"
                value={dias}
                onChange={(e) => setDias(parseInt(e.target.value) || 0)}
              />
              <TextInput style={{}}>Dias</TextInput>
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="0"
                type="number"
                id="meses"
                value={meses}
                onChange={(e) => setMeses(parseInt(e.target.value) || 0)}
              />
              <TextInput>Meses</TextInput>
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="0"
                type="number"
                id="anos"
                value={anos}
                onChange={(e) => setAnos(parseInt(e.target.value) || 0)}
              />
              <TextInput>Anos</TextInput>
            </ContainerInput>
          </ContainerInputs>

          <div>
            <h2 style={{ textAlign:'center'}}>Até agora você salvou:</h2>
            <ResultCard
              style={{ backgroundColor: "rgb(255, 0, 60)" }}
              className="resultado"
            >
              <Favorite />
              <TitleResult id="vidasSalvas">{vidasSalvas}</TitleResult>
              Vida Animal
            </ResultCard>
            <ResultCard
              style={{ backgroundColor: "rgb(0, 78, 203)" }}
              className="resultado"
            >
              <WaterDrop />
              <TitleResult id="LitrosDeAgua">{litrosDeAgua}</TitleResult>
              Litros de Água
            </ResultCard>
            <ResultCard
              style={{ backgroundColor: "rgb(255, 153, 0)" }}
              className="resultado"
            >
              <Spa />
              <TitleResult id="Graos">{grao}</TitleResult>
              kg de grão
            </ResultCard>
            <ResultCard
              style={{ backgroundColor: "rgb(0, 129, 0)" }}
              className="resultado"
            >
              <Forest color="#f1f1f1" />
              <TitleResult id="Floresta">{floresta}</TitleResult> m² de floresta
            </ResultCard>
            <ResultCard
              style={{ backgroundColor: "purple" }}
              className="resultado"
            >
              <Cloud />
              <TitleResult id="gasCarbonico">{gasCarbonico}</TitleResult>
              kg de CO2
            </ResultCard>
          </div>
        </ContainerColums>
      </Card>
    </ContainerPage>
  );
};
export default Calculator;
