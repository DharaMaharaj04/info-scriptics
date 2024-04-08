!function(e){e.fn.countTo=function(a){a=a||{};return e(this).each(function(){
	var t=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),
	refreshInterval:e(this).data("refresh-interval"),
	decimals:e(this).data("decimals")},a),
	n=Math.ceil(t.speed/t.refreshInterval),o=(t.to-t.from)/n,
	r=this,s=e(this),c=0,l=t.from,d=s.data("countTo")||{};s.data("countTo",d),
	d.interval&&(clearInterval(d.interval)),
	d.interval=setInterval(function(){l+=o,c++,function(e){
		var a=t.formatter.call(r,e,t);s.html(a)}(l),c>=n&&(s.removeData("countTo"),
		clearInterval(d.interval),l=t.to,void 0!==t.onComplete&&t.onComplete.call(r,l))},t.refreshInterval),
		function(e){
			var a=t.formatter.call(r,e,t);s.html(a)}(l)}
	)},
	e.fn.countTo.defaults={from:0,to:0,speed:1e3,
		refreshInterval:100,decimals:0,
			formatter:function(e,a){return e.toFixed(a.decimals)}}
	}
		(jQuery),jQuery(function(e){
			e(".count-number").data("countToOptions",
			    {formatter:function(e,a){return e.toFixed(a.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),
				e(".timer").each(function(){var a=e(this);a.countTo(a.data("countToOptions"))
			})
	    });
