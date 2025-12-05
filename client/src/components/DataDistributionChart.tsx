import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Unstructured Data', value: 80, color: '#02a2fd' }, // Cyan
  { name: 'Structured Data', value: 20, color: '#001278' },   // Navy
];

export default function DataDistributionChart() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Corporate Data Volume</h3>
          <div className="text-xs text-blue-200 bg-white/10 px-2 py-1 rounded">2025 Projection</div>
        </div>
        
        <div className="h-64 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#040822', borderColor: '#02a2fd', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl font-bold text-secondary"
            >
              80%
            </motion.span>
            <span className="text-xs text-blue-200 uppercase tracking-wider mt-1">Unstructured</span>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(2,162,253,0.6)]"></div>
              <span className="text-white">Unstructured Data</span>
            </div>
            <span className="font-bold text-secondary">Growing 5x Faster</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-white">Structured Data</span>
            </div>
            <span className="text-blue-200">Traditional BI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
