<!-- components/BarChart.vue -->
<template>
  <div class="w-full">
    <div class="relative">
      <Bar :data="chartData" :options="chartOptions" class="!h-[160px]" />
      <Bar
        :data="chartData2"
        :options="chartOptions"
        class="!h-[160px] absolute z-10 top-0 -left-0 w-full"
      />
    </div>
    <div class="grid grid-cols-12 w-full">
      <p
        v-for="(item, index) in labels"
        :key="index"
        class="text-[10px] font-medium leading-[14px] text-center text-gray-600"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'

const labels = ref([
  'Ya.',
  'Fe.',
  'Ma.',
  'Ap.',
  'May',
  'In.',
  'Il.',
  'Av.',
  'Se.',
  'Ok.',
  'No.',
  'De.',
])

const chartData = ref({
  labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Max value',
      data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], // 100% fon (och rangda)
      backgroundColor: '#f1f5f9', // Orqa fon rangi
      borderRadius: 50, // yumaloqlik
      barThickness: 8,
    },
  ],
})
const chartData2 = ref({
  labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Sof foyda',
      data: [3.5, 2.1, 4.2, 3.9, 3.7, 2.8, 4.6, 2.5, 3.4, 2.6, 3.8, 3.2],
      backgroundColor: '#3B82F6', // Ko'k rang
      borderRadius: {
        topLeft: 0,
        topRight: 0,
        bottomLeft: 50,
        bottomRight: 50,
      },
      barThickness: 8,
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  borderSkipped: 'middle',
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      position: 'nearest',
      callbacks: {
        label: (context: any) => `${context.raw} mln so’m`,
      },
      bodyFont: { size: 14, weight: 'semibold', color: '#64748B' },
      titleFont: { size: 14, weight: 'semibold', color: '#64748B' },
      backgroundColor: '#fff', // Tooltipning fon rangi
      titleColor: '#64748B', // Sarlavhaning matn rangi
      bodyColor: '#64748B',
      borderColor: '#E2E8F0', // Tooltipning chegarasi rangi
      borderWidth: 1,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
})
</script>
