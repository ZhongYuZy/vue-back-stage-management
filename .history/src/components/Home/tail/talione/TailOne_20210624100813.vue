<template>
  <!-- 雷达图 -->
  <div id="laser"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios'

export default {
    name: '',
    props: {},
    data () {
        return {
            option: {
                legend: {
                    data: []
                },
                radar: [
                    {
                        indicator: [
                            { text: 'sales' },
                            { text: 'ministration' },
                            { text: 'technology' },
                            { text: 'marketing' },
                            { text: 'delelopment' }
                        ],
                        center: ['50%', '50%'],
                        radius: 130,
                        startAngle: 90,
                        splitNumber: 5,
                        shape: 'circle',
                        name: {
                            formatter: '【{value}】',
                            textStyle: {
                                color: 'rgb(192,192,192)'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['#fff', '#ddd', '#fff', '#ddd', "#fff"],
                                shadowColor: 'rgb(192,192,192)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(192,192,192)',
                                width: 1,
                                tybe: 'solid'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgb(192,192,192)'
                            }
                        }
                    },

                ],
                series: [
                    {
                        name: '雷达图',
                        type: 'radar',
                        emphasis: {
                            lineStyle: {
                                width: 4
                            }
                        },
                        data: [
                            {
                                value: [],
                                name: ''
                            },
                            {
                                value: [],
                                name: '',
                            },
                            {
                                value: [],
                                name: '',
                            }
                        ]
                    },
                ]
            }
        }
    }