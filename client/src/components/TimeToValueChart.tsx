import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Month 3', blueAlly: 15, others: 5 },
  { month: 'Month 6', blueAlly: 45, others: 15 },
  { month: 'Month 9', blueAlly: 75, others: 30 },
  { month: 'Month 12', blueAlly: 95, others: 50 },
  { month: 'Month 15', blueAlly: 100, others: 65 },
  { month: 'Month 18', blueAlly: 100, others: 80 },
];

export default function TimeToValueChart() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-xl h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-primary">Time to Value Realization</h3>
        <p className="text-sm text-muted-foreground">Cumulative Value Delivered (%)</p>
      </div>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }}
              unit="%"
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar 
              dataKey="blueAlly" 
              name="BlueAlly Partnership" 
              fill="#02a2fd" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
            <Bar 
              dataKey="others" 
              name="Multi-Vendor Approach" 
              fill="#94a3b8" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
        <div className="flex items-start gap-3">
          <div className="bg-secondary text-white rounded-full p-1 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Accelerated Outcome</p>
            <p className="text-xs text-muted-foreground mt-1">
              BlueAlly clients typically achieve full value realization 6-9 months faster than industry average.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
