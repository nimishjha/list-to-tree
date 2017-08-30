describe("listToTree", function() {
	var sourceList = [
		{ name: 'Alan', id: 100, manager: 150 },
		{ name: 'Martin', id: 220, manager: 100 },
		{ name: 'Jamie', id: 150, manager: null },
		{ name: 'Alex', id: 275, manager: 100 },
		{ name: 'Steve', id: 400, manager: 150 },
		{ name: 'David', id: 190, manager: 400 }
	];
	var outputTree = [
		{
			"name": "Jamie",
			"id": 150,
			"manager": null,
			"subordinates": [
			{
				"name": "Alan",
				"id": 100,
				"manager": 150,
				"subordinates": [
				{
					"name": "Martin",
					"id": 220,
					"manager": 100,
					"subordinates": []
				},
				{
					"name": "Alex",
					"id": 275,
					"manager": 100,
					"subordinates": []
				}]
			},
			{
				"name": "Steve",
				"id": 400,
				"manager": 150,
				"subordinates": [
				{
					"name": "David",
					"id": 190,
					"manager": 400,
					"subordinates": []
				}]
			}]
		}];

	it("should convert list to tree", function() {
		expect(listToTree(sourceList)).toEqual(outputTree);
	});

});
