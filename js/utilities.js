var utilities = {};

utilities.parseObject = function(o, indentLevel, parent)
{
	if(!indentLevel)
		indentLevel = 0;

	var s = "", type;
	var indentString = "<dd>";
	var indentStringParent = "<dd>";
	var indentStringClose = "";
	var indentStringParentClose = "";
	for(var i = 0; i < indentLevel; i++)
	{
		indentString += "<blockquote>";
		indentStringClose += "</blockquote>";
	}
	for(var i = 0; i < (indentLevel-1); i++)
	{
		indentStringParent += "<blockquote>";
		indentStringParentClose += "</blockquote>";
	}
	indentStringClose += "</dd>";
	indentStringParentClose += "</dd>";

	for(var prop in o)
	{
		if(o.hasOwnProperty(prop))
		{
			type = Object.prototype.toString.call(o[prop]);
			switch(type)
			{
				case "[object Object]":
					if(indentLevel < 8)
						s += this.parseObject(o[prop], indentLevel + 1, prop);
					else
						s += indentString + "<em>[object Object],</em><i>too many levels</i>" + indentStringClose;
					break;
				case "[object Array]":
					s += this.parseObject(o[prop], indentLevel + 1, prop);
					break;
				default:
					if(prop === "name")
						s += indentString + "<i>" + o[prop] + "</i>" + indentStringClose;
					break;
			}
		}
	}
	return s;
}

