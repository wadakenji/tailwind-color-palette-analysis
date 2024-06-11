import { FC } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
type Props = {
  data: { brightness: number; saturation: number; number: string }[];
};

export const ColorLineChart: FC<Props> = ({ data }) => {
  return (
    <LineChart width={850} height={300} data={data}>
      <XAxis dataKey="number" />
      <YAxis yAxisId="brightness" domain={[0, 255]} ticks={[0, 127, 255]} />
      <YAxis yAxisId="saturation" orientation="right" domain={[0, 1]} />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line
        yAxisId="brightness"
        type="monotone"
        dataKey="brightness"
        stroke="#8884d8"
      />
      <Line
        yAxisId="saturation"
        type="monotone"
        dataKey="saturation"
        stroke="#82ca9d"
      />
    </LineChart>
  );
};
