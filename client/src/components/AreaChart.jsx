import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const AreaChartSimple = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart responsive data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#161818" fill="#bef8fd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartSimple;
