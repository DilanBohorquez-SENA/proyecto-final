const ctxVentas = document.getElementById('graficoVentas');
new Chart(ctxVentas,{
    type: 'bar',
    data:{
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
        datasets:[{
            label: 'Ventas en pesos',
            data:[2500000, 3000000, 2800000, 4200000, 3900000, 5200000],
            backgroundColor: '#ac050d'
        }]
    },
    options:{
        responsive: true,
        plugins:{
            legend:{
                displaay:true
            },
            title:{
                display:false
            }
        }
    }
})
const ctsServicios = document.getElementById('graficoServicios');
new Chart (ctsServicios,{
    type: 'doughnut',
    data:{
        labels:['Consulta', 'Vacunación', 'Baño','Peluqueria','Urgencias'],
        datasets:[{
            label: 'Servicios',
            data:[35, 25, 20, 15, 5],
            backgroundColor:[
                '#ff000d',
                '#fff01c',
                '#52ffbd',
                '#0eb6e0',
                '#1139e9',

            ]
        }]
    },
   options:{
        responsive: true,
        cutout: '55',
        plugins:{
            legend:{
                position:'bottom'
            }
        }
      },
      

      
})
const ctxClientes = document.getElementById('graficoAtendidos');
 
new Chart(ctxClientes,{
    type: 'line',
    data:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets:[{
            label: 'Clientes Registrados',
            data:[ 10, 230, 130, 80, 110, 87],
            backgroundColor: '#b2dd3a'
        }]
    },
 
    options:{
        responsive:true,
        plugins:{
            legend:{
                display:true
            },
            title:{
                display:false
            }
        }
    }
 
});