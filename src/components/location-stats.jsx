// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export default function LocationStats({ stats = [] }) {
//   const cityCount = stats.reduce((acc, item) => {
//     if (acc[item.city]) {
//       acc[item.city] += 1;
//     } else {
//       acc[item.city] = 1;
//     }
//     return acc;
//   }, {});

//   const cities = Object.entries(cityCount).map(([city, count]) => ({
//     city,
//     count,
//   }));

//   return (
//     <div2
//       className="border-2 border-gray-200 rounded-md pt-2"
//       style={{ width: "100%", height: 300 }}
//     >
//       <ResponsiveContainer>
//         <LineChart width={700} height={300} data={cities.slice(0, 5)}>
//           <XAxis dataKey="city" />
//           <YAxis />
//           <Tooltip labelStyle={{ color: "black" }} />
//           <Legend />
//           <Line type="monotone" dataKey="count" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div2>
//   );
// }

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function LocationStats({ stats = [] }) {
  // Process the API data
  const cityCount = stats.reduce((acc, item) => {
    if (acc[item.city]) {
      acc[item.city] += 1;
    } else {
      acc[item.city] = 1;
    }
    return acc;
  }, {});

  // Transform the data into the format required by the chart
  const cities = Object.entries(cityCount).map(([city, count]) => ({
    city,
    count,
  }));

  const chartConfig = {
    count: {
      label: "City Count",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={3000}>
            <LineChart
              data={cities.slice(0, 5)}
              margin={{
                left: 20,
                right: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="city"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="count"
                type="monotone"
                stroke="red"
                strokeWidth={2}
                dot={{
                  fill: "red",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
