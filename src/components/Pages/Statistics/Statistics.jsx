import useTitle from "../../../Hooks/useTitle";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import getStoredDonationsIds from "../../../Utilities/getStoredDonationsIds";

const Statistics = () => {
  useTitle("Statistics - Donation Campaign");
  const [allDonationsData, setAllDonationsData] = useState([]);

  useEffect(() => {
    fetch("./donation_campaign_data.json")
      .then((res) => res.json())
      .then((data) => {
        const storedDonationsIds = getStoredDonationsIds()
        const myStoredDonations = data.filter(item=> storedDonationsIds.includes(item.id))

        const totalDonation = data.reduce((curr, total) => curr + total.price, 0)
        const myTotalDonation = myStoredDonations.reduce((curr, total)=> curr + total.price, 0)
        console.log(totalDonation, myTotalDonation)
        setAllDonationsData([{name:"Your Donations", value: myTotalDonation}, {name:"Total Donations", value:totalDonation}])
      })
      .catch((error) => console.log(error.message));
  }, []);

  // chart
  const data = allDonationsData;

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <div className="justify-content-center text-center">
          <h1 className="md:text-5xl text-3xl font-bold">Donations Statistics</h1>
          <hr />
          <div className="flex justify-center mb-16">
            <ResponsiveContainer
              width={300}
              height={300}
              className="text-center mt-10"
            >
              <PieChart className="bg-green-100">
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip></Tooltip>
                <Legend layout="vertical" verticalAlign="bottom" align="center" iconType="plainline" iconSize={50}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
