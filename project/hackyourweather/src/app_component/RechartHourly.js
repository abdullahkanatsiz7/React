import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function ExampleHourly(props) {
  const celc = props.value - 273.15;
  const date = new Date();
  const dd = date.getDay();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  console.log(dd);
  const calender = e => {
    const day = dd - e;
    return `${day}/${mm}/${yy}`;
  };

  const data = [
    {
      name: 'Hour',
      uv: celc - 1,
    },
    {
      name: calender(5),
      uv: celc - 3,
    },
    {
      name: calender(4),
      uv: celc + 2,
    },
    {
      name: calender(3),
      uv: celc - 0.5,
    },
    {
      name: calender(2),
      uv: celc + 1.2,
    },
    {
      name: calender(1),
      uv: celc - 1,
    },
    {
      name: calender(0),
      uv: celc,
    },
  ];
  return (
    <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884D8" fill="#8884D8" />
    </AreaChart>
  );
}

export default ExampleHourly;
