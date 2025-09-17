"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, PieChart, Pie, Cell,
} from "recharts";

const monthlyData = [
  { name: "JAN", arsip: 25 },
  { name: "FEB", arsip: 30 },
  { name: "MAR", arsip: 35 },
  { name: "APR", arsip: 32 },
  { name: "MEI", arsip: 34 },
  { name: "JUN", arsip: 36 },
  { name: "JUL", arsip: 38 },
  { name: "AUG", arsip: 40 },
  { name: "SEP", arsip: 45 },
  { name: "OCT", arsip: 42 },
  { name: "NOV", arsip: 47 },
  { name: "DES", arsip: 50 },
];

const yearlyData = [
  { year: 2020, total: 150 },
  { year: 2022, total: 220 },
  { year: 2024, total: 280 },
  { year: 2025, total: 370 },
];

const itemArsip = [
  { name: "Dokumen", value: 80 },
  { name: "Foto", value: 40 },
  { name: "Surat", value: 60 },
  { name: "Laporan", value: 70 },
];

const stokBelumDigital = [
  { name: "Digitalisasi", value: 80 },
  { name: "Belum", value: 345 },
];

const perbandingan = [
  { name: "Digital", value: 60 },
  { name: "Fisik", value: 40 },
];

const COLORS = ["#4F46E5", "#F59E0B", "#10B981", "#3B82F6"];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">DASHBOARD KEARSIPAN</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Data Arsip Perbulan */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">DATA ARSIP PERBULAN</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="arsip" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Digitalisasi Pertahun */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">DIGITALISASI PERTAHUN</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Item Arsip Pertahun */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">ITEM ARSIP PERTAHUN</h2>
          {itemArsip.map((d, i) => (
            <div key={i} className="flex items-center mb-2">
              <span className="w-24">{d.name}</span>
              <div className="flex-1 bg-gray-200 rounded h-4">
                <div
                  className="h-4 rounded bg-indigo-500"
                  style={{ width: `${d.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stok Arsip Belum Digitalisasi */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">STOK ARSIP BELUM DIGITAL</h2>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold">345</span>
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie data={stokBelumDigital} dataKey="value" innerRadius={30} outerRadius={50} fill="#8884d8">
                  {stokBelumDigital.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Perbandingan */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">PERBANDINGAN</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={perbandingan} dataKey="value" cx="50%" cy="50%" outerRadius={70} label>
                {perbandingan.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stok Dus Arsip */}
        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
          <h2 className="font-semibold mb-2 text-center">STOK DUS ARSIP DI PALEMBANG</h2>
          <span className="text-4xl font-bold">120</span>
          <div className="mt-2 text-blue-500 text-6xl">📦</div>
        </div>
      </div>
    </div>
  );
}
