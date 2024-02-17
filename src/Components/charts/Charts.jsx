import "./charts.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Enero',
        total: 125
    },
    {
        name: 'Febrero',
        total: 355
    },
    {
        name: 'Marzo',
        total: 200
    },
    {
        name: 'Abril',
        total: 130
    },
    {
        name: 'Mayo',
        total: 400
    },
    {
        name: 'Junio',
        total: 126
    },
];
  


const Chart = ({aspect, title}) =>{

    return(
        <div className="chart">
            <div className="title-chart">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <XAxis dataKey="name" stroke="lightgray"/>
                <YAxis stroke="lightgray"/>
                <Tooltip />
                <Area type="monotone" dataKey="total" stackId="1" stroke="#CEA697" fill="#CEA697" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart