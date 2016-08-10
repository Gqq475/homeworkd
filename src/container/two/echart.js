import React, { PropTypes } from 'react'
import echarts from 'echarts'
class Echart extends React.Component {
  componentDidMount(){
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
    title: {
        text: '学员平均工资高出一般工程师',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    // legend: {
    //     data:['最高气温','最低气温']
    // },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['月薪3K-4.5K可以掌握JS、HTML5、CSS3熟悉页面布局','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
})
  }
  render () {

    let styles={
      width:'600px',
      height:'400px',
      margin:'0 auto'
    }
    return(
      <div id="main" style={styles}></div>
    )
  }
}


export default Echart;