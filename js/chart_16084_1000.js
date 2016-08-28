//canvas
window.onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop; 
    if( scroll >= 500) {
	   var chart = new CanvasJS.Chart("chart_program", {

			title:{
				text:"Points of Ability"				

			},
						animationEnabled: true,
			axisX:{
				interval:0,
				gridThickness: 0,
				labelFontSize: 15,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode"

			},
			axisY2:{
			
				/*interlacedColor: "rgba(1,77,101,.2)",*/
				gridColor: "rgba(1,77,101,.1)"

			},
			dataPointWidth: 30,
			data: [
			{     
				type: "bar",
				name: "companies",
				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				{y: 4, label: "PHP"  },
				{y: 6, label: "JQuery"  },
				{y: 6, label: "javascript"  },
				{y: 10, label: "CSS"  },
				{y: 10, label: "HTML"  }
				
				
				]
			}
			
			]
		});

		chart.render.();
		var chart2 = new CanvasJS.Chart("chart_software", {

		title:{
			text:"Points of Ability"				

		},
					animationEnabled: true,
		axisX:{
			interval:0,
			gridThickness: 0,
			labelFontSize: 20,
			labelFontStyle: "normal",
			labelFontWeight: "normal",
			labelFontFamily: "Lucida Sans Unicode"

		},
		axisY2:{
		
			/*interlacedColor: "rgba(1,77,101,.2)",*/
			gridColor: "rgba(1,77,101,.1)"

		},
		dataPointWidth: 30,
		data: [
		{     
			type: "bar",
			name: "companies",
			axisYType: "secondary",
			color: "#014D65",				
			dataPoints: [
			{y: 4, label: "Illustrator"  },
			{y: 6, label: "Photoshop"  }
			
			
			]
		}
		
		]
	});

	chart2.render();
	
	var chart3 = new CanvasJS.Chart("chart_language", {

		title:{
			text:"Points of Ability"				

		},
					animationEnabled: true,
		axisX:{
			interval:0,
			gridThickness: 0,
			labelFontSize: 15,
			labelFontStyle: "normal",
			labelFontWeight: "normal",
			labelFontFamily: "Lucida Sans Unicode"

		},
		axisY2:{
		
			/*interlacedColor: "rgba(1,77,101,.2)",*/
			gridColor: "rgba(1,77,101,.1)"

		},
		dataPointWidth: 30,
		data: [
		{     
			type: "bar",
			name: "companies",
			axisYType: "secondary",
			color: "#014D65",				
			dataPoints: [
			{y: 4, label: "Japanese"  },
			{y: 6, label: "English"  },
			{y: 6, label: "Chinese"  }			
			
			]
		}
		
		]
	});

		chart3.render();

		window.onscroll = null;//stop scroll event
	
    }



	
	
	
	
}
