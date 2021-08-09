// Tags for echarts
'use strict';

function echartsMaps(args, content) {
    var options = {};
    if (content.length) {
        var options = content;
    }
    let chart_id = "echarts" + ((Math.random() * 9999) | 0);
    let result = `
        <div id="${chart_id}" style="width: ${args[1] || '100%'};height: ${args[0] || 400}px;margin: 0 auto"></div>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
        <script type="text/javascript">
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('${chart_id}'));
            // 指定图表的配置项和数据
            ${options}
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        </script>
    `;
    return result;
}

hexo.extend.tag.register("echarts", echartsMaps, {
    async: true,
    ends: true,
});

function echartsRemote(args) {
    let chart_id = "echarts" + ((Math.random() * 9999) | 0);
    let result = `
        <div id="${chart_id}" style="width: ${args[2] || '100%'};height: ${args[1] || 400}px;margin: 0 auto"></div>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript">
            var dom = document.getElementById('${chart_id}');
            var myChart = echarts.init(dom, 'dark');

            var app = {};
            var option;

            var posList = [
                'left', 'right', 'top', 'bottom',
                'inside',
                'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
                'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            ];

            app.configParameters = {
                rotate: {
                    min: -90,
                    max: 90
                },
                align: {
                    options: {
                        left: 'left',
                        center: 'center',
                        right: 'right'
                    }
                },
                verticalAlign: {
                    options: {
                        top: 'top',
                        middle: 'middle',
                        bottom: 'bottom'
                    }
                },
                position: {
                    options: posList.reduce(function (map, pos) {
                        map[pos] = pos;
                        return map;
                    },{})
                },
                distance: {
                    min: 0,
                    max: 100
                }
            };

            app.config = {
                rotate: 90,
                align: 'left',
                verticalAlign: 'middle',
                position: 'insideBottom',
                distance: 15,
                onChange: function () {
                    var labelOption = {
                        normal: {
                            rotate: app.config.rotate,
                            align: app.config.align,
                            verticalAlign: app.config.verticalAlign,
                            position: app.config.position,
                            distance: app.config.distance
                        }
                    };
                    myChart.setOption({
                        series: [{
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }, {
                            label: labelOption
                        }]
                    });
                }
            };

            var labelOption = {
                show: true,
                position: app.config.position,
                distance: app.config.distance,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                rotate: app.config.rotate,
                formatter: '{c}  {name|{a}}',
                fontSize: 16,
                rich: {
                    name: {
                    }
                }
            };

            $.get('/data/${args[0]}').done(function (data) {
                //alert(JSON.stringify(data)); 
                myChart.setOption(data);
            });
        </script>
    `;
    return result;
}

hexo.extend.tag.register("ecr", echartsRemote, {
    ends: false,
});
