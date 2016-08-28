$(function() {


  //menu click
  $( "#menu" ).click(function() {
		//$("ul#nav li").css('display','block');
		$("ul#nav li").slideToggle("slow");
  });
  
  //scroll effect when clicking menu item
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  //contact submit item
 
  $('.svg-wrapper').hover(function(){
         //$('.svg-wrapper').css('background','none');
		
		
		$('.svg-wrapper #shape').css({
		  'stroke-dasharray': '50 0',
		  'stroke-width': '3px',
		  'stroke-dashoffset':'0',
		  'stroke':'#06D6A0'
		  
		});
		setTimeout(function() {
			//$('.svg-wrapper').css('background','#285d73');
		},3);
		
   });
 
  
  
});//function



//mouse-scrolling
var chartOn=new initialValue(1);
var PsAniOn=new initialValue(1);
var TlineOn=new initialValue(1);
window.onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop; 
	if(chartOn.value==1){
		callChartShow(scroll);
	}
	if(PsAniOn.value==1){
		callPsAni(scroll);
	}
    if(TlineOn.value==1){
		callTimeLine(scroll);
	}
	
	
	
}


//functions
function initialValue(num){
	this.value=num;
	//alert(this.value);
}


function callChartShow(scroll){
	if( scroll >= 400 ) {
	
	   var chart = new CanvasJS.Chart("chart_program", {

			title:{
				text:"Points of Ability",				
				 fontSize: 30
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
				color: "#40c5b4",				
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

		chart.render();
		var chart2 = new CanvasJS.Chart("chart_software", {

		title:{
			text:"Points of Ability",				
			fontSize: 30
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
			color: "#40c5b4",				
			dataPoints: [
			{y: 8, label: "Illustrator"  },
			{y: 10, label: "Photoshop"  },
			{y: 4, label: "Git"  }
			
			]
		}
		
		]
	});

	chart2.render();
	
	var chart3 = new CanvasJS.Chart("chart_language", {

		title:{
			text:"Points of Ability",
			fontSize: 30

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
			color: "#40c5b4",				
			dataPoints: [
			{y: 4, label: "Japanese"  },
			{y: 8, label: "English"  },
			{y: 10, label: "Chinese"  }			
			
			]
		}
		
		]
	});

		chart3.render();
		//stop this event;
		chartOn.value =0;
	
    }//if
}

function callPsAni(scroll){
	//alert("inside funtion");
	if( scroll >= 1250) {
		$('#works .shape').css('display','none').removeClass('fadein2');
		setTimeout(function() {
			$('#works .shape').css('display','block').addClass('fadein2');
		
		},1);

		//stop this event
		PsAniOn.value =0;

	}
}

function callTimeLine(scroll){
	//2550
	if(scroll >= 2000){
		for(i=1;i<=5;i++){
			$('#timeline .timeout0'+i).removeAttr('id').css('opacity','0');
		}
		
		
		if( scroll >= 2550) {
			setTimeout(function() {
					//$('#timeline #dot0'+i).attr("id","dot0"+i);
					$('#timeline .timeline-icon.timeout01').attr('id','dot01');
					$('#timeline .timeline-label.timeout01').attr('id','tlabel01');
			},1);
			setTimeout(function() {
					$('#timeline .timeline-icon.timeout02').attr('id','dot02');
					$('#timeline .timeline-label.timeout02').attr('id','tlabel02');
			},2);
			setTimeout(function() {
					$('#timeline .timeline-icon.timeout03').attr('id','dot03');
					$('#timeline .timeline-label.timeout03').attr('id','tlabel03');
			},3);
			setTimeout(function() {
					$('#timeline .timeline-icon.timeout04').attr('id','dot04');
					$('#timeline .timeline-label.timeout04').attr('id','tlabel04');
			},4);
			setTimeout(function() {
					$('#timeline .timeline-icon.timeout05').attr('id','dot05');
					$('#timeline .timeline-label.timeout05').attr('id','tlabel05');
			},5);
			
			TlineOn.value =0;

		}	
	}//if
}