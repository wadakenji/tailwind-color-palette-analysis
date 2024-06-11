import "./App.css";
import { ColorLineChart } from "./components/line-chart";
import { COLORS } from "./constants/color-codes";
import { colorPaletteToDetails } from "./helpers/color";

const colors = Object.entries(COLORS).map(([colorName, colorPalette]) => {
  const colorDetails = colorPaletteToDetails(colorPalette);
  return {
    name: colorName,
    colorDetails,
  };
});

function App() {
  return (
    <>
      <div className="p-8">
        {colors.map(({ name, colorDetails }) => (
          <div className="mb-8" key={name}>
            <h2 className="mb-4">{name}</h2>
            <table className="mb-4">
              <tbody>
                <tr>
                  <th>色</th>
                  {colorDetails.map(({ code, number }) => (
                    <td
                      key={number}
                      style={{
                        backgroundColor: code,
                        textAlign: "center",
                        color: "#888",
                      }}
                    >
                      {number}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>明度</th>
                  {colorDetails.map(({ brightness, number }) => (
                    <td key={number}>{brightness}</td>
                  ))}
                </tr>
                <tr>
                  <th>彩度</th>
                  {colorDetails.map(({ saturation, number }) => (
                    <td key={number}>{saturation}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <ColorLineChart data={colorDetails} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
