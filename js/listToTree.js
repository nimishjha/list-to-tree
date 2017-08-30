//
//	ASSUMPTIONS
//
//	- Employees will always have an id
//	- The manager property can be null, to denote the CEO
//	- There is no depth limit to the hierarchy
//
//	NOTES
//
//	- The task description mentions "a manager who is not a valid employee," but doesn't define an invalid employee, so I'm not handling that case
//

var list = [
	{ name: 'Alan', id: 100, manager: 150 },
	{ name: 'Martin', id: 220, manager: 100 },
	{ name: 'Jamie', id: 150, manager: null },
	{ name: 'Alex', id: 275, manager: 100 },
	{ name: 'Alexander the Great', id: 900, manager: 100 },
	{ name: 'Bill', id: 1400, manager: 900 },
	{ name: 'Bob', id: 1500, manager: 900 },
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

