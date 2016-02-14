c=document.getElementsByTagName("div")

function createLabelByDiv(my_class,div_id,div_class_name) {
	// return '<span class="'+my_class+'">&lt;div id="'+div_id+'" classname="'+div_class_name+'"&gt;</span>'
	span=document.createElement("span")
	span.className=my_class
	span.textContent="div"
	if(div_id) {
	     span.textContent+=' id='+div_id
	}
	if(my_class=="label1") {
		span.style="top:0;left:0;padding:0 3px 3px 0;;position:absolute;background-color:#6AC5AC;color:#414142;line-height:1em;"
	}
	if(my_class=="endlabel1") {
		span.style="right:0;bottom:0;padding:3px 0 0 3px;position:absolute;background-color:#6AC5AC;color:#414142;line-height:1em;"
	}
	if(div_class_name) {
		span.textContent+= ' classname='+div_class_name
	}
	return span
}

for(i=0;i<c.length;i++) {
	my_div=c[i]
	start_label=createLabelByDiv("label1",my_div.id,my_div.className)
	end_label=createLabelByDiv("endlabel1",my_div.id,my_div.className)

	my_div.insertBefore(start_label,my_div.firstChild)
	my_div.appendChild(end_label)
}

