var list = [
	{ name: 'Alan', id: 100, manager: 150 },
	{ name: 'Martin', id: 220, manager: 100 },
	{ name: 'Jamie', id: 150, manager: null },
	{ name: 'Alex', id: 275, manager: 100 },
	{ name: 'Steve', id: 400, manager: 150 },
	{ name: 'David', id: 190, manager: 400 }
];

function listToTree(list)
{
	var tree = [];
	var lookup = {};
	var i, ii;

	//	Create a hash table for employees by id,
	//	and add a 'subordinates' array property to each employee
	for (i = 0, ii = list.length; i < ii; i++)
	{
		lookup[list[i].id] = list[i];
		list[i].subordinates = [];
	}

	// 	Populate the subordinates arrays
	for (i = 0, ii = list.length; i < ii; i++)
	{
		if (list[i].manager)
			lookup[list[i].manager].subordinates.push(list[i]);
		else
			tree.push(list[i]);
	}
	return tree;
}

function render(str)
{
	var d = document.createElement("div");
	d.innerHTML = str;
	var outputElement = document.getElementById("output");
	if(outputElement)
		outputElement.appendChild(d);
}

//
//	Program entry point
//
var tree = listToTree(list);
render(utilities.parseObject(tree));

console.log({ tree: tree });

