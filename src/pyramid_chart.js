import {
    Chart,
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    SubTitle,
    Tooltip,
} from 'chart.js'

Chart.register(
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    SubTitle,
    Tooltip,
);

(async function () {
    const labels = [
        '100歳以上',
        '99歳',
        '98歳',
        '97歳',
        '96歳',
        '95歳',
        '94歳',
        '93歳',
        '92歳',
        '91歳',
        '90歳',
        '89歳',
        '88歳',
        '87歳',
        '86歳',
        '85歳',
        '84歳',
        '83歳',
        '82歳',
        '81歳',
        '80歳',
        '79歳',
        '78歳',
        '77歳',
        '76歳',
        '75歳',
        '74歳',
        '73歳',
        '72歳',
        '71歳',
        '70歳',
        '69歳',
        '68歳',
        '67歳',
        '66歳',
        '65歳',
        '64歳',
        '63歳',
        '62歳',
        '61歳',
        '60歳',
        '59歳',
        '58歳',
        '57歳',
        '56歳',
        '55歳',
        '54歳',
        '53歳',
        '52歳',
        '51歳',
        '50歳',
        '49歳',
        '48歳',
        '47歳',
        '46歳',
        '45歳',
        '44歳',
        '43歳',
        '42歳',
        '41歳',
        '40歳',
        '39歳',
        '38歳',
        '37歳',
        '36歳',
        '35歳',
        '34歳',
        '33歳',
        '32歳',
        '31歳',
        '30歳',
        '29歳',
        '28歳',
        '27歳',
        '26歳',
        '25歳',
        '24歳',
        '23歳',
        '22歳',
        '21歳',
        '20歳',
        '19歳',
        '18歳',
        '17歳',
        '16歳',
        '15歳',
        '14歳',
        '13歳',
        '12歳',
        '11歳',
        '10歳',
        '9歳',
        '8歳',
        '7歳',
        '6歳',
        '5歳',
        '4歳',
        '3歳',
        '2歳',
        '1歳',
        '0歳',
    ];

    let maleDataset = [
        {population: 10, voterRate: 59.46, },
        {population: 7, voterRate: 59.46, },
        {population: 11, voterRate: 59.46, },
        {population: 18, voterRate: 59.46, },
        {population: 28, voterRate: 59.46, },
        {population: 41, voterRate: 59.46, },
        {population: 56, voterRate: 59.46, },
        {population: 80, voterRate: 59.46, },
        {population: 103, voterRate: 59.46, },
        {population: 129, voterRate: 59.46, },
        {population: 163, voterRate: 59.46, },
        {population: 200, voterRate: 59.46, },
        {population: 236, voterRate: 59.46, },
        {population: 268, voterRate: 59.46, },
        {population: 316, voterRate: 59.46, },
        {population: 368, voterRate: 59.46, },
        {population: 398, voterRate: 59.46, },
        {population: 415, voterRate: 59.46, },
        {population: 415, voterRate: 59.46, },
        {population: 503, voterRate: 59.46, },
        {population: 580, voterRate: 59.46, },
        {population: 619, voterRate: 72.15, },
        {population: 621, voterRate: 73.21, },
        {population: 660, voterRate: 73.91, },
        {population: 555, voterRate: 73.79, },
        {population: 535, voterRate: 74.19, },
        {population: 885, voterRate: 73.61, },
        {population: 948, voterRate: 75.44, },
        {population: 975, voterRate: 73.88, },
        {population: 902, voterRate: 73.69, },
        {population: 854, voterRate: 73.68, },
        {population: 816, voterRate: 72.56, },
        {population: 781, voterRate: 72.94, },
        {population: 744, voterRate: 73.13, },
        {population: 751, voterRate: 73.14, },
        {population: 732, voterRate: 72.83, },
        {population: 701, voterRate: 71.10, },
        {population: 724, voterRate: 69.81, },
        {population: 750, voterRate: 70.17, },
        {population: 739, voterRate: 68.31, },
        {population: 739, voterRate: 68.86, },
        {population: 757, voterRate: 66.62, },
        {population: 784, voterRate: 65.75, },
        {population: 806, voterRate: 65.31, },
        {population: 862, voterRate: 64.01, },
        {population: 700, voterRate: 62.82, },
        {population: 901, voterRate: 61.80, },
        {population: 905, voterRate: 60.18, },
        {population: 929, voterRate: 60.30, },
        {population: 946, voterRate: 58.16, },
        {population: 978, voterRate: 58.10, },
        {population: 1009, voterRate: 57.08, },
        {population: 1027, voterRate: 56.26, },
        {population: 1012, voterRate: 56.15, },
        {population: 958, voterRate: 56.06, },
        {population: 921, voterRate: 54.70, },
        {population: 880, voterRate: 53.61, },
        {population: 857, voterRate: 53.62, },
        {population: 827, voterRate: 52.70, },
        {population: 807, voterRate: 51.59, },
        {population: 773, voterRate: 49.84, },
        {population: 766, voterRate: 47.62, },
        {population: 766, voterRate: 48.99, },
        {population: 758, voterRate: 47.19, },
        {population: 734, voterRate: 47.28, },
        {population: 711, voterRate: 45.54, },
        {population: 702, voterRate: 45.28, },
        {population: 685, voterRate: 43.38, },
        {population: 665, voterRate: 43.55, },
        {population: 655, voterRate: 42.24, },
        {population: 644, voterRate: 41.50, },
        {population: 650, voterRate: 38.49, },
        {population: 646, voterRate: 39.42, },
        {population: 661, voterRate: 36.80, },
        {population: 664, voterRate: 35.32, },
        {population: 656, voterRate: 33.02, },
        {population: 654, voterRate: 32.69, },
        {population: 652, voterRate: 33.13, },
        {population: 637, voterRate: 31.82, },
        {population: 638, voterRate: 29.89, },
        {population: 624, voterRate: 31.58, },
        {population: 604, voterRate: 34.12, },
        {population: 582, voterRate: 47.64, },
        {population: 575, voterRate: 0.0, },
        {population: 553, voterRate: 0.0, },
        {population: 550, voterRate: 0.0, },
        {population: 555, voterRate: 0.0, },
        {population: 558, voterRate: 0.0, },
        {population: 548, voterRate: 0.0, },
        {population: 545, voterRate: 0.0, },
        {population: 540, voterRate: 0.0, },
        {population: 527, voterRate: 0.0, },
        {population: 525, voterRate: 0.0, },
        {population: 514, voterRate: 0.0, },
        {population: 514, voterRate: 0.0, },
        {population: 502, voterRate: 0.0, },
        {population: 480, voterRate: 0.0, },
        {population: 468, voterRate: 0.0, },
        {population: 446, voterRate: 0.0, },
        {population: 427, voterRate: 0.0, },
        {population: 425, voterRate: 0.0, },
    ];

    let femaleDataset = [
        {population: 75, voterRate: 42.49, },
        {population: 42, voterRate: 42.49, },
        {population: 58, voterRate: 42.49, },
        {population: 79, voterRate: 42.49, },
        {population: 109, voterRate: 42.49, },
        {population: 145, voterRate: 42.49, },
        {population: 179, voterRate: 42.49, },
        {population: 234, voterRate: 42.49, },
        {population: 275, voterRate: 42.49, },
        {population: 316, voterRate: 42.49, },
        {population: 369, voterRate: 42.49, },
        {population: 415, voterRate: 42.49, },
        {population: 459, voterRate: 42.49, },
        {population: 485, voterRate: 42.49, },
        {population: 538, voterRate: 42.49, },
        {population: 587, voterRate: 42.49, },
        {population: 607, voterRate: 42.49, },
        {population: 609, voterRate: 42.49, },
        {population: 584, voterRate: 42.49, },
        {population: 686, voterRate: 42.49, },
        {population: 766, voterRate: 42.49, },
        {population: 801, voterRate: 66.83, },
        {population: 788, voterRate: 67.77, },
        {population: 823, voterRate: 68.74, },
        {population: 678, voterRate: 69.74, },
        {population: 632, voterRate: 71.09, },
        {population: 1014, voterRate: 72.86, },
        {population: 1075, voterRate: 72.72, },
        {population: 1089, voterRate: 71.78, },
        {population: 998, voterRate: 72.73, },
        {population: 930, voterRate: 72.68, },
        {population: 880, voterRate: 72.02, },
        {population: 834, voterRate: 72.88, },
        {population: 785, voterRate: 71.16, },
        {population: 784, voterRate: 72.17, },
        {population: 762, voterRate: 71.45, },
        {population: 725, voterRate: 71.99, },
        {population: 746, voterRate: 71.42, },
        {population: 766, voterRate: 70.23, },
        {population: 753, voterRate: 71.31, },
        {population: 747, voterRate: 69.77, },
        {population: 762, voterRate: 68.04, },
        {population: 787, voterRate: 66.61, },
        {population: 807, voterRate: 66.98, },
        {population: 861, voterRate: 65.49, },
        {population: 700, voterRate: 64.08, },
        {population: 893, voterRate: 64.83, },
        {population: 895, voterRate: 62.51, },
        {population: 917, voterRate: 63.12, },
        {population: 930, voterRate: 60.36, },
        {population: 959, voterRate: 58.56, },
        {population: 986, voterRate: 58.80, },
        {population: 1006, voterRate: 59.41, },
        {population: 985, voterRate: 58.37, },
        {population: 933, voterRate: 57.97, },
        {population: 895, voterRate: 57.80, },
        {population: 855, voterRate: 57.55, },
        {population: 834, voterRate: 55.34, },
        {population: 803, voterRate: 54.24, },
        {population: 785, voterRate: 54.29, },
        {population: 751, voterRate: 52.10, },
        {population: 746, voterRate: 53.07, },
        {population: 745, voterRate: 50.16, },
        {population: 735, voterRate: 50.42, },
        {population: 710, voterRate: 49.55, },
        {population: 682, voterRate: 49.63, },
        {population: 674, voterRate: 46.74, },
        {population: 655, voterRate: 47.71, },
        {population: 637, voterRate: 48.57, },
        {population: 626, voterRate: 45.88, },
        {population: 613, voterRate: 45.14, },
        {population: 616, voterRate: 46.25, },
        {population: 610, voterRate: 43.36, },
        {population: 625, voterRate: 42.65, },
        {population: 629, voterRate: 39.44, },
        {population: 622, voterRate: 39.55, },
        {population: 623, voterRate: 38.87, },
        {population: 622, voterRate: 36.32, },
        {population: 610, voterRate: 34.38, },
        {population: 607, voterRate: 34.09, },
        {population: 597, voterRate: 34.66, },
        {population: 574, voterRate: 38.00, },
        {population: 549, voterRate: 53.20, },
        {population: 545, voterRate: 0.0, },
        {population: 524, voterRate: 0.0, },
        {population: 524, voterRate: 0.0, },
        {population: 527, voterRate: 0.0, },
        {population: 531, voterRate: 0.0, },
        {population: 521, voterRate: 0.0, },
        {population: 518, voterRate: 0.0, },
        {population: 514, voterRate: 0.0, },
        {population: 503, voterRate: 0.0, },
        {population: 501, voterRate: 0.0, },
        {population: 488, voterRate: 0.0, },
        {population: 489, voterRate: 0.0, },
        {population: 477, voterRate: 0.0, },
        {population: 458, voterRate: 0.0, },
        {population: 446, voterRate: 0.0, },
        {population: 425, voterRate: 0.0, },
        {population: 408, voterRate: 0.0, },
        {population: 405, voterRate: 0.0, },
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: '人口（男）',
                data: maleDataset.map(row => -1 * row.population),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 1
            },

            {
                label: '投票者数（男）',
                data: maleDataset.map(row => -1 * row.population * row.voterRate / 100.0),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 1
            },

            {
                label: '人口（女）',
                data: femaleDataset.map(row => row.population),
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 26, 104)',
                ],
                borderWidth: 1
            },

            {
                label: '投票者数（女）',
                data: femaleDataset.map(row => row.population * row.voterRate / 100.0),
                backgroundColor: [
                    'rgba(255, 26, 104, 0.8)',
                ],
                borderColor: [
                    'rgb(255, 26, 104)',
                ],
                borderWidth: 1
            },
        ]
    };

    const centerScale = {
        id: 'centerScale',
        afterDatasetsDraw: (chart, args, plugins) => {
            const {ctx, data, scales: {x, y}} = chart;

            // background box
            data.labels.forEach((label, index) => {
                const textWidth = ctx.measureText(label).width + 2;
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
                ctx.roundRect(x.getPixelForValue(0) - textWidth / 2, y.getPixelForValue(index) - 5, textWidth, 10, 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.stroke();
            });

            // label
            data.labels.forEach((label, index) => {
                ctx.font = '8px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(label, x.getPixelForValue(0), y.getPixelForValue(index));
            });
        }
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            aspectRatio: 1,
            barPercentage: 0.8,
            categoryPercentage: 1.0,
            borderSkipped: false,
            indexAxis: 'y',
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "千人",
                    },
                    beginAtZero: true,
                    stacked: false,
                    ticks: {
                        count: 13,
                        callback: (value, index, ticks) => {
                            return Math.abs(value);
                        }
                    },
                    max: 1200,
                    min: -1200,
                },
                y: {
                    display: false,
                    stacked: true,
                    grid: {
                        drawTicks: false,
                    },
                    border: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                        align: 'center',
                        crossAlign: 'center',
                        color: 'white',
                        font: {
                            weight: 'bold',
                            size: 15,
                        },
                        showLabelBackdrop: true,
                        backdropColor: 'grey',
                        backdropPadding: 6,
                        z: 1,
                    },
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '日本の年齢別人口と投票者数'
                },
                subtitle: {
                    display: true,
                    text: '人口出典：総務省統計局人口推計（2021年）、投票率出典：総務省第49回衆議院銀総選挙年齢別投票率調、投票者数=人口×投票率'
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: (context) => {
                            const label = context.dataset.label;
                            const datapoint = Math.abs(context.raw);
                            return `${label}: ${datapoint}`;
                        }
                    }
                }
            },
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
        },
        plugins: [centerScale]
    };

    new Chart(
        document.getElementById('pyramid_chart'),
        config
    );
})();
