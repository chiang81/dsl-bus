window.onload = function() {
    //alert("F5 over");

    /*
    //show date
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    if (month < 10)
	month = "0" + month;
    var day = today.getDate();
    if (day < 10)
	day = "0" + day;
    document.getElementById("timebox").innerHTML = year + month + day;
    */

    //add combobox time
    var combobox=document.getElementById("empty_start_hr");
    for(var i=0; i < 24 ; i++)
    {
	    var new_opt=document.createElement("option");
	    new_opt.text = ((i<10)?"0":"") + i;
	    combobox.add(new_opt);
    }
    var combobox=document.getElementById("empty_start_min");
    for(var i=0; i < 60 ; i++)
    {
	    var new_opt=document.createElement("option");
	    new_opt.text = ((i<10)?"0":"") + i;
	    combobox.add(new_opt);
    }
    var combobox=document.getElementById("empty_end_hr");
    for(var i=0; i < 24 ; i++)
    {
	    var new_opt=document.createElement("option");
	    new_opt.text = ((i<10)?"0":"") + i;
	    combobox.add(new_opt);
    }
    var combobox=document.getElementById("empty_end_min");
    for(var i=0; i < 60 ; i++)
    {
	    var new_opt=document.createElement("option");
	    new_opt.text = ((i<10)?"0":"") + i;
	    combobox.add(new_opt);
    }

    //JSON table
    var myList = {
	"row": [{
	    "trip": [{
		"line_name": "12_3",
		"start_time": 600,
		"end_time": 740,
		"from_sta": "TN",
		"to_sta": "NZ"
	    }, {
		"line_name": "R3_15",
		"start_time": 815,
		"end_time": 1018,
		"from_sta": "NZ",
		"to_sta": "KS"
	    }, {
		"line_name": "12_18",
		"start_time": 1105,
		"end_time": 1115,
		"from_sta": "KS",
		"to_sta": "GS"
	    }, {
		"line_name": "12_24",
		"start_time": 1435,
		"end_time": 1535,
		"from_sta": "GS",
		"to_sta": "ZI"
	    }]
	}, {
	    "trip": [{
		"line_name": "12_1",
		"start_time": 545,
		"end_time": 715,
		"from_sta": "TN",
		"to_sta": "GS"
	    }, {
		"line_name": "12_9",
		"start_time": 740,
		"end_time": 940,
		"from_sta": "GS",
		"to_sta": "KS"
	    }, {
		"line_name": "12_16",
		"start_time": 1015,
		"end_time": 1215,
		"from_sta": "KS",
		"to_sta": "NZ"
	    }, {
		"line_name": "12_22",
		"start_time": 1245,
		"end_time": 1445,
		"from_sta": "NZ",
		"to_sta": "CC"
	    }]
	}, {
	    "trip": [{
		"line_name": "12_2",
		"start_time": 600,
		"end_time": 738,
		"from_sta": "TN",
		"to_sta": "KS"
	    }, {
		"line_name": "R8_10",
		"start_time": 800,
		"end_time": 945,
		"from_sta": "KS",
		"to_sta": "ZI"
	    }, {
		"line_name": "12_17",
		"start_time": 1040,
		"end_time": 1240,
		"from_sta": "ZI",
		"to_sta": "GS"
	    }, {
		"line_name": "12_23",
		"start_time": 1310,
		"end_time": 1510,
		"from_sta": "GS",
		"to_sta": "TN"
	    }, {
		"line_name": "DLP_5",
		"start_time": 1720,
		"end_time": 1810,
		"from_sta": "TN",
		"to_sta": "GS"
	    }, {
		"line_name": "DLP_7",
		"start_time": 1810,
		"end_time": 1900,
		"from_sta": "GS",
		"to_sta": "KS"
	    }]
	}, {
	    "trip": [{
		"line_name": "12_4",
		"start_time": 620,
		"end_time": 825,
		"from_sta": "TN",
		"to_sta": "GS"
	    }, {
		"line_name": "12_12",
		"start_time": 840,
		"end_time": 1040,
		"from_sta": "GS",
		"to_sta": "KS"
	    }, {
		"line_name": "12_19",
		"start_time": 1130,
		"end_time": 1330,
		"from_sta": "KS",
		"to_sta": "ZI"
	    }, {
		"line_name": "12_35",
		"start_time": 1740,
		"end_time": 1940,
		"from_sta": "ZI",
		"to_sta": "TN"
	    }]
	}, {
	    "trip": [{
		"line_name": "12_6",
		"start_time": 835,
		"end_time": 905,
		"from_sta": "GS",
		"to_sta": "CC"
	    }, {
		"line_name": "12_15",
		"start_time": 950,
		"end_time": 1150,
		"from_sta": "CC",
		"to_sta": "TN"
	    }, {
		"line_name": "12_21",
		"start_time": 1220,
		"end_time": 1420,
		"from_sta": "TN",
		"to_sta": "NZ"
	    }, {
		"line_name": "R8_20",
		"start_time": 1545,
		"end_time": 1715,
		"from_sta": "NZ",
		"to_sta": "ZI"
	    }, {
		"line_name": "DLP_6",
		"start_time": 1740,
		"end_time": 1810,
		"from_sta": "ZI",
		"to_sta": "KS"
	    }, {
		"line_name": "DLP_8",
		"start_time": 1815,
		"end_time": 1920,
		"from_sta": "KS",
		"to_sta": "GS"
	    }]
	}]
    };
    var table = document.getElementById("table1");
    //var totwork = new Array(myList.row.length);
    //var realwork = new Array(myList.row.length);
    //var allwork = 0;
    //var all_realwork = 0;
    //var maxnum_cells = 0;
    //use to trip pool
    var poolList={"trip": []};
    var pool = document.getElementById("tpool");
    var trips_per_row = 5;
    //use to store
    var row_of_temp, cell_of_temp;
    var color_of_temp;
    var table_mark; 	//0:from table, 1:from pool
    //use to drag
    var row_of_under,cell_of_under;
    var color_of_under;
    //use to read data
    var isread_tb = false;
    var isread_pool = false;
    var row_read_tb, cell_read_tb, color_read_tb;
    var row_read_pool, cell_read_pool, color_read_pool;
    //use to alldrag
    var isalldrag = false;
    var cell_start, cell_end;

    display_table();
    display_pool();

    //definition of functions
    function store(Cell,i) {
	if(!isalldrag)	//'alldrag' not start
	{
		//A->TEMP
		row_of_temp = Cell.parentNode.rowIndex;	//table index
		cell_of_temp = Cell.cellIndex; 		//table index
		color_of_temp = Cell.style.backgroundColor;
	}
	else
		row_of_temp = Cell.parentNode.rowIndex;	//table index
	table_mark = i;
    }

    function examine(row, col) {
	var oldCell, oldCell_pre, oldCell_next;
	var thisCell, thisCell_pre, thisCell_next;

	var new_col = (col-3)/2;		//json index
	var new_row = row-1;			//json index
	var new_cell_of_temp;			//json index
	var new_row_of_temp = row_of_temp-1;	//json index

	thisCell = myList.row[new_row].trip[new_col];
	
	if(table_mark==0)	//cell from table
	{
		new_cell_of_temp = (cell_of_temp-3)/2;
		if(isalldrag)
		{
			var new_cell_start=(cell_start-3)/2;	//json index
			var new_cell_end=(cell_end-3)/2;	//json index
			if((new_cell_start==0) && (new_cell_end==myList.row[new_row_of_temp].trip.length-1)) //all of the row
			{
			    oldCell = {
				    "start_time": myList.row[new_row_of_temp].trip[new_cell_start].start_time,
				    "end_time": myList.row[new_row_of_temp].trip[new_cell_end].end_time,
				    "from_sta": myList.row[new_row_of_temp].trip[new_cell_start].from_sta,
				    "to_sta": myList.row[new_row_of_temp].trip[new_cell_end].to_sta
			    };

			    oldCell_pre = {"end_time": 0};
			    oldCell_pre.to_sta = thisCell.from_sta;

			    oldCell_next = {"start_time": 9999};
			    oldCell_next.from_sta = thisCell.to_sta;
			}
			else if(new_cell_start==0)
			{
			    oldCell = {
				    "start_time": myList.row[new_row_of_temp].trip[new_cell_start].start_time,
				    "end_time": myList.row[new_row_of_temp].trip[new_cell_end].end_time,
				    "from_sta": myList.row[new_row_of_temp].trip[new_cell_start].from_sta,
				    "to_sta": myList.row[new_row_of_temp].trip[new_cell_end].to_sta
			    };

			    oldCell_pre = {"end_time": 0};
			    oldCell_pre.to_sta = thisCell.from_sta;

			    oldCell_next = myList.row[new_row_of_temp].trip[new_cell_end+1];
			}
			else if(new_cell_end==myList.row[new_row_of_temp].trip.length-1)
			{
			    oldCell = {
				    "start_time": myList.row[new_row_of_temp].trip[new_cell_start].start_time,
				    "end_time": myList.row[new_row_of_temp].trip[new_cell_end].end_time,
				    "from_sta": myList.row[new_row_of_temp].trip[new_cell_start].from_sta,
				    "to_sta": myList.row[new_row_of_temp].trip[new_cell_end].to_sta
			    };

			    oldCell_pre = myList.row[new_row_of_temp].trip[new_cell_start-1];

			    oldCell_next = {"start_time": 9999};
			    oldCell_next.from_sta = thisCell.to_sta;
			}
			else
			{
			    oldCell = {
				    "start_time": myList.row[new_row_of_temp].trip[new_cell_start].start_time,
				    "end_time": myList.row[new_row_of_temp].trip[new_cell_end].end_time,
				    "from_sta": myList.row[new_row_of_temp].trip[new_cell_start].from_sta,
				    "to_sta": myList.row[new_row_of_temp].trip[new_cell_end].to_sta
			    };

			    oldCell_pre = myList.row[new_row_of_temp].trip[new_cell_start-1];

			    oldCell_next = myList.row[new_row_of_temp].trip[new_cell_end+1];
			}
		}
		else
		{
			if((new_cell_of_temp==0) && (new_cell_of_temp==myList.row[new_row_of_temp].trip.length-1)) //row only 1 obj.
			{
			    oldCell = myList.row[new_row_of_temp].trip[new_cell_of_temp];
			    oldCell_pre = {"end_time": 0};
			    oldCell_pre.to_sta = thisCell.from_sta;
			    oldCell_next = {"start_time": 9999};
			    oldCell_next.from_sta = thisCell.to_sta;
			}
			else if(new_cell_of_temp==0)
			{
			    oldCell = myList.row[new_row_of_temp].trip[new_cell_of_temp];
			    oldCell_pre = {"end_time": 0};
			    oldCell_pre.to_sta = thisCell.from_sta;
			    oldCell_next = myList.row[new_row_of_temp].trip[new_cell_of_temp+1];
			}
			else if (new_cell_of_temp==myList.row[new_row_of_temp].trip.length-1)
			{
			    oldCell = myList.row[new_row_of_temp].trip[new_cell_of_temp];
			    oldCell_pre = myList.row[new_row_of_temp].trip[new_cell_of_temp-1];
			    oldCell_next = {"start_time": 9999};
			    oldCell_next.from_sta = thisCell.to_sta;
			}
			else
			{
			    oldCell = myList.row[new_row_of_temp].trip[new_cell_of_temp];
			    oldCell_pre = myList.row[new_row_of_temp].trip[new_cell_of_temp-1];
			    oldCell_next = myList.row[new_row_of_temp].trip[new_cell_of_temp+1];
			}
		}
	}
	else if(table_mark==1)	//cell from pool
	{
		oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
		oldCell_pre = {"end_time": 0};
		oldCell_pre.to_sta = thisCell.from_sta;
		oldCell_next = {"start_time": 9999};
		oldCell_next.from_sta = thisCell.to_sta;
	}
	if((new_col==0) && (new_col==myList.row[new_row].trip.length-1)) //row only 1 obj.
	{
		thisCell_pre = {"end_time": 0};
		thisCell_pre.to_sta = oldCell.from_sta;

		thisCell_next = {"start_time": 9999};
		thisCell_next.from_sta = oldCell.to_sta;
	}
	else if(new_col==0)
	{
		//thisCell = myList.row[new_row].trip[new_col];
		thisCell_pre = {"end_time": 0};
		thisCell_pre.to_sta = oldCell.from_sta;

		thisCell_next = myList.row[new_row].trip[new_col+1];
	}
	else if (new_col==myList.row[new_row].trip.length-1)
	{
		//thisCell = myList.row[new_row].trip[new_col];
		thisCell_pre = myList.row[new_row].trip[new_col-1];
	    
		thisCell_next = {"start_time": 9999};
		thisCell_next.from_sta = oldCell.to_sta;
	}
	else
	{
		//thisCell = myList.row[new_row].trip[new_col];
		thisCell_pre = myList.row[new_row].trip[new_col-1];
		thisCell_next = myList.row[new_row].trip[new_col+1];
	}

	//examine oldCell origin position time
	if (thisCell.start_time < oldCell_pre.end_time)
	{
		return -1;
	}
	if (thisCell.end_time > oldCell_next.start_time)
	{
		return -1;
	}
	//examine thisCell origin position time
	if (oldCell.start_time < thisCell_pre.end_time)
	{
		return -1;
	}
	if (oldCell.end_time > thisCell_next.start_time)
	{
		return -1;
	}
	//examine O/D station
	if((thisCell.from_sta != oldCell_pre.to_sta) || (thisCell.to_sta != oldCell_next.from_sta))
	{
		return -1;
	}
	if((oldCell.from_sta != thisCell_pre.to_sta) || (oldCell.to_sta != thisCell_next.from_sta))
	{
		return -1;
	}
	return 0
    }
    function examine_ins(row,col){
	var oldCell;
	var thisCell_pre,thisCell_next;

	var new_col = (col)/2-1; 			//the right index of the gap
	var new_row = row-1;				//json index
	var new_cell_of_temp = (cell_of_temp-3)/2; 	//the index in json
	var new_row_of_temp = row_of_temp-1;		//json index
	
	if(table_mark==0)	//cell from table
	{
		if(isalldrag)
		{
			var new_cell_start=(cell_start-3)/2;	//json index
			var new_cell_end=(cell_end-3)/2;	//json index
			oldCell = {
				"start_time": myList.row[new_row_of_temp].trip[new_cell_start].start_time,
				"end_time": myList.row[new_row_of_temp].trip[new_cell_end].end_time,
				"from_sta": myList.row[new_row_of_temp].trip[new_cell_start].from_sta,
				"to_sta": myList.row[new_row_of_temp].trip[new_cell_end].to_sta
			};
		}
		else
			oldCell = myList.row[new_row_of_temp].trip[new_cell_of_temp];
	}
	else if(table_mark==1)	//cell from pool
	{
		oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
	}

	if(new_col==0)//start of array
	{
	    thisCell_pre = {"end_time": 0};
	    thisCell_pre.to_sta = oldCell.from_sta;
	    if(myList.row[new_row].trip.length==0)	//insert to null row
	    {
		thisCell_next = {"start_time": 9999};
		thisCell_next.from_sta = oldCell.to_sta;
	    }
	    else
	    {
		thisCell_next = myList.row[new_row].trip[new_col];
	    }
	} 
	else if (new_col==myList.row[new_row].trip.length)//end of array
	{
	    thisCell_pre = myList.row[new_row].trip[new_col-1];
	    thisCell_next = {"start_time": 9999};
	    thisCell_next.from_sta = oldCell.to_sta;
	} 
	else
	{
	    thisCell_pre = myList.row[new_row].trip[new_col-1];
	    thisCell_next = myList.row[new_row].trip[new_col];
	}
	//examine thisCell origin position time
	if(oldCell.start_time < thisCell_pre.end_time){
	    return -1;
	}
	if(oldCell.end_time > thisCell_next.start_time){
	    return -1;
	}
	//examine O/D station
	if((oldCell.from_sta != thisCell_pre.to_sta) || (oldCell.to_sta != thisCell_next.from_sta))
	{
		return -1;
	}
	return 0;
    }
    function exchange(row, col)
    {
	if(isalldrag)
	{
		var thisCell = myList.row[row-1].trip[(col-3)/2];
		var temp;
		//this->TEMP
		temp=thisCell;

		//old->this
		//del this
		myList.row[row-1].trip.splice((col-3)/2,1);
		var new_cell_start=(cell_start-3)/2;	//json index
		var new_cell_end=(cell_end-3)/2;	//json index
		for(var i=0; i <= (new_cell_end-new_cell_start); i++)
		{
			var X=myList.row[row_of_temp-1].trip[new_cell_start];
			//delete 1 obj from new_cell_start
			myList.row[row_of_temp-1].trip.splice(new_cell_start,1);
			//add obj before '(col-3)/2 + j'
			myList.row[row-1].trip.splice((col-3)/2 + i,0,X);
		}
		
		//TEMP->old
		//add temp before 'new_cell_start'
		myList.row[row_of_temp-1].trip.splice(new_cell_start,0,temp);
	}
	else
	{
		if(table_mark==0)	//cell from table
			var oldCell = myList.row[row_of_temp-1].trip[(cell_of_temp-3)/2]; //json index
		else if(table_mark==1)	//cell from pool
			var oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];

		var thisCell = myList.row[row-1].trip[(col-3)/2];
		var temp;

		//old->TEMP
		temp = oldCell;
		//this->old
		oldCell = thisCell;
		//TEMP->this
		thisCell = temp;

		//reverse input
		if(table_mark==0)	//cell from table
			myList.row[row_of_temp-1].trip[(cell_of_temp-3)/2] = oldCell; //json index
		else if(table_mark==1)	//cell from pool
			poolList.trip[row_of_temp*trips_per_row +cell_of_temp] = oldCell;
		myList.row[row-1].trip[(col-3)/2] = thisCell;
	}
	//alert("Exchange Finished!");
    }
    function insert(row,col,topool) { //topool=0: insert into table, topool=1: insert into pool
	//var oldCell = myList.row[row_of_temp].trip[(cell_of_temp-3)/2];
	if(table_mark==0)	//oldcell from table
	{
		if(topool==0)
		{
			if(isalldrag)
			{
				var new_cell_start=(cell_start-3)/2;	//json index
				var new_cell_end=(cell_end-3)/2;	//json index
				for(var i=0; i <= (new_cell_end-new_cell_start); i++)
				{
					var X=myList.row[row_of_temp-1].trip[new_cell_start];
					//delete 1 obj from new_cell_start
					myList.row[row_of_temp-1].trip.splice(new_cell_start,1);
					//add obj at 'col/2-1 + j'
					myList.row[row-1].trip.splice(col/2-1 + i,0,X);
				}
			}
			else
			{
				var oldCell = myList.row[row_of_temp-1].trip[(cell_of_temp-3)/2]; //json index
				//add obj after 'col/2-1'
				myList.row[row-1].trip.splice(col/2-1,0,oldCell);
				//delete obj (delete 1 obj from (cell_of_temp-3)/2)
				myList.row[row_of_temp-1].trip.splice((cell_of_temp-3)/2,1);
			}
		}
		else if(topool==1)
		{
			if(isalldrag)
			{
				var new_cell_start=(cell_start-3)/2;	//json index
				var new_cell_end=(cell_end-3)/2;	//json index
				for(var i=0; i <= (new_cell_end-new_cell_start); i++)
				{
					var X=myList.row[row_of_temp-1].trip[new_cell_start];
					//delete 1 obj from new_cell_start
					myList.row[row_of_temp-1].trip.splice(new_cell_start,1);
					//add obj at 'row*trips_per_row+col + i'
					poolList.trip.splice(row*trips_per_row+col + i,0,X);
				}
			}
			else
			{
				var oldCell = myList.row[row_of_temp-1].trip[(cell_of_temp-3)/2]; //json index
				//add obj after 'row*trips_per_row+col'
				poolList.trip.splice(row*trips_per_row+col,0,oldCell);
				//delete obj (delete 1 obj from (cell_of_temp-3)/2)
				myList.row[row_of_temp-1].trip.splice((cell_of_temp-3)/2,1);
			}
		}
	}
	else if(table_mark==1)	//oldcell from pool
	{
		if(topool==0)
		{
			var oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
			//add obj after 'col/2-1'
			myList.row[row-1].trip.splice(col/2-1,0,oldCell);
			//delete obj (delete 1 obj from 'row_of_temp*trips_per_row +cell_of_temp')
			poolList.trip.splice( row_of_temp*trips_per_row +cell_of_temp ,1);
		}
		else if(topool==1)
		{
			var oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp]; //json index
			//poolList.trip[i*trips_per_row+j];
			//add obj after 'row*trips_per_row+col'
			poolList.trip.splice( row*trips_per_row+col,0,oldCell);
			//delete obj (delete 1 obj from 'row_of_temp*trips_per_row +cell_of_temp')
			poolList.trip.splice( row_of_temp*trips_per_row +cell_of_temp ,1);
		}
	}
	//alert("Insert Finished!");
    }

    function add_row() {
	    myList.row.splice(myList.row.length,0,{"trip": []});

	    //refresh table
	    for(var q=table.rows.length-1;q>=0;q--)
	    	table.deleteRow(q);
	    display_table();
    }
    
    function del_row(row) {
	    if(isread_tb && row_read_tb==row)
	    {
		    table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = color_read_tb;	//color undo
		    isread_tb = false;	//close switch
	    }

	    //delete obj (delete 1 obj from row)
	    myList.row.splice(row-1,1);

	    //refresh table
	    for(var q=table.rows.length-1;q>=0;q--)
		    table.deleteRow(q);
	    display_table();
    }

    function display_table() {
	//-----------bus table--------------//
	table = document.getElementById("table1");
	var totwork = new Array(myList.row.length);
	var realwork = new Array(myList.row.length);
	var allwork = 0;
	var all_realwork = 0;
	var maxnum_cells = 0;

	document.getElementById("btn_new").onclick= function(){
	    add_row();
	};
	document.getElementById("empty_new").onclick= function(){
	    //var new_trip={"start_time": 0000,"end_time": 0000};
	    var new_trip={};

	    var ele=document.getElementById("empty_start_hr");
	    new_trip.start_time	= ele.options[ele.selectedIndex].text * 100;
	    var ele=document.getElementById("empty_start_min");
	    new_trip.start_time	+=ele.options[ele.selectedIndex].text * 1;
	    var ele=document.getElementById("empty_end_hr");
	    new_trip.end_time	= ele.options[ele.selectedIndex].text * 100;
	    var ele=document.getElementById("empty_end_min");
	    new_trip.end_time	+=ele.options[ele.selectedIndex].text * 1;

	    var ele=document.getElementById("empty_O");
	    new_trip.from_sta	=ele.options[ele.selectedIndex].text;
	    var ele=document.getElementById("empty_D");
	    new_trip.to_sta	=ele.options[ele.selectedIndex].text;
	    //examine
	    if(new_trip.start_time >= new_trip.end_time)
	    {
		    alert("新增失敗，起訖時間不合");
		    return;
	    }
	    else if(new_trip.from_sta==new_trip.to_sta)
	    {
		    alert("新增失敗，起訖點相同");
		    return;
	    }
	    new_trip.line_name	="空車車次";

	    //add 'new_trip' after 'poolList.trip.length'
	    poolList.trip.splice( poolList.trip.length, 0, new_trip);

	    //refresh pool
	    for(var q=pool.rows.length-1;q>=0;q--)
		    pool.deleteRow(q);
	    display_pool();
	};

	//JSON table build
	for (var i = 0, j, k; i < myList.row.length; i++) {
	    table.insertRow();

	    //Serial Number
	    table.rows[i].insertCell(0);
	    table.rows[i].cells[0].align="center";
	    table.rows[i].cells[0].innerText = i + 1;
	    
	    //button cell
	    table.rows[i].insertCell(1);
	    //del button
	    var btn_del = document.createElement("button");
	    btn_del.style.width="100%";
	    btn_del.style.height="100%";
	    btn_del.innerHTML="刪除";
	    table.rows[i].cells[1].className="btn";
	    
	    table.rows[i].cells[1].style.padding="0px";
	    table.rows[i].cells[1].appendChild(btn_del);
	    btn_del.onclick= function(){
		    if(myList.row[this.parentNode.parentNode.rowIndex-1].trip.length ==0) //delete null row
			del_row(this.parentNode.parentNode.rowIndex);
		    else
		    {
			    while(myList.row[this.parentNode.parentNode.rowIndex-1].trip.length > 0)
			    {
				var X=myList.row[this.parentNode.parentNode.rowIndex-1].trip[0];
				//delete 1 obj from 0
				myList.row[this.parentNode.parentNode.rowIndex-1].trip.splice(0,1);
				//add obj after 'poolList.trip.length'
				poolList.trip.splice(poolList.trip.length,0,X);
			    }
			    //delete null row
			    del_row(this.parentNode.parentNode.rowIndex);
			    for(var q=pool.rows.length-1;q>=0;q--)
				    pool.deleteRow(q);
			    display_pool();
			    //isread reset
			    isread_tb   = false;
			    isread_pool = false;
		    }
	    };

	    //set totwork
	    if(myList.row[i].trip.length > 0)
	    {
		    var start_work = myList.row[i].trip[0].start_time;
		    var end_work   = myList.row[i].trip[myList.row[i].trip.length-1].end_time;
		    totwork[i] = (Math.floor(end_work / 100) - Math.floor(start_work / 100)) * 60 + (end_work % 100 - start_work % 100);
	    }
	    else
		    totwork[i] = 0;
	    //add cell to 'myList.row[i].trip.length'
	    for (j = 1,  k = 2, realwork[i] = 0; j < myList.row[i].trip.length + 1; j++, k+=2) {
		var Trip = myList.row[i].trip[j - 1];
		table.rows[i].insertCell(k);
		table.rows[i].cells[k].align="center";
		table.rows[i].cells[k].style.width = "20px";
		
		table.rows[i].insertCell(k+1);
		table.rows[i].cells[k+1].align="center";
		table.rows[i].cells[k+1].style.padding="5px";
		if(Trip.line_name == "空車車次")
		{
			table.rows[i].cells[k+1].style.fontStyle="italic";
			table.rows[i].cells[k+1].style.backgroundColor="#CCCC4D";
			table.rows[i].cells[k+1].ondblclick = function(){
				var dblc=confirm("是否要刪除？");
				if(dblc)
				{
					var row  = this.parentNode.rowIndex-1;	//json index
					var cell = (this.cellIndex - 3)/2;	//json index
					if((myList.row[row].trip.length==1) || ((cell==myList.row[row].trip.length-1) || (cell==0)))
					//row中只有一個或空車在邊上
					{
						//delete obj (delete 1 obj from cell)
						myList.row[row].trip.splice(cell,1);

						//refresh table
						for(var q=table.rows.length-1;q>=0;q--)
							table.deleteRow(q);
						display_table();
					}
					else
					{
						var precell =myList.row[row].trip[cell-1];
						var nextcell=myList.row[row].trip[cell+1];
						if(precell.to_sta==nextcell.from_sta)
						{
							//delete obj (delete 1 obj from cell)
							myList.row[row].trip.splice(cell,1);

							//refresh table
							for(var q=table.rows.length-1;q>=0;q--)
								table.deleteRow(q);
							display_table();
						}
						else
							alert("刪除失敗，起訖點無法接續");
					}
					
				}
			}
		}

		var timestring_sta, timestring_end;
		var hr,min;
		hr=Math.floor(Trip.start_time / 100);
		min=Trip.start_time % 100;
		timestring_sta= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
		hr=Math.floor(Trip.end_time / 100);
		min=Trip.end_time % 100;
		timestring_end= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
		table.rows[i].cells[k+1].innerText = Trip.line_name + " \n(" + timestring_sta + "-" + timestring_end + ")" + "\n" + Trip.from_sta + "->" + Trip.to_sta;
		realwork[i] += (Math.floor(Trip.end_time / 100) - Math.floor(Trip.start_time / 100)) * 60 + (Trip.end_time % 100 - Trip.start_time % 100);
	    }
	    if (maxnum_cells < myList.row[i].trip.length*2 + 2)
		{maxnum_cells = myList.row[i].trip.length*2 + 2;}
	}
	//休息超過１小時次數計算
	var over_1hr = new Array(myList.row.length);
	var allover_1hr = 0;
	for (var i = 0, j; i < myList.row.length; i++)
	{
		for (j = 0, over_1hr[i] = 0; j < myList.row[i].trip.length-1; j++)
		{
			//myList.row[i].trip[j+1].start_time - myList.row[i].trip[j].end_time > 60 ?
			var hr=Math.floor(myList.row[i].trip[j+1].start_time / 100) - Math.floor(myList.row[i].trip[j].end_time / 100);
			var min=(myList.row[i].trip[j+1].start_time % 100) - (myList.row[i].trip[j].end_time % 100);
			if( (hr*60 + min) > 60)
			{
				table.rows[i].cells[j*2+4].style.backgroundColor = "#B0C4DE";
				over_1hr[i]++;
			}
		}
		allover_1hr += over_1hr[i];
	}
	//統計欄位們
	for (var i = 0, j; i < myList.row.length; i++) {
	    //add cell to 'maxnum_cells' & add the rightest cell
	    for (j = myList.row[i].trip.length*2 + 2; j < maxnum_cells ; j++) {
		table.rows[i].insertCell(j);
	    }

	    //last insert cell
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].style.width = '20px';

	    //分勤時間
	    j++;
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].align="center";
	    table.rows[i].cells[j].innerText = realwork[i] + "分";
	    all_realwork += realwork[i];
	    //工作時間
	    j++;
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].align="center";
	    table.rows[i].cells[j].innerText = totwork[i] + "分";
	    allwork += totwork[i];
	    //平均休息時間
	    j++;
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].align="center";
	    table.rows[i].cells[j].innerText = Math.floor((totwork[i] - realwork[i])/(myList.row[i].trip.length - 1)) + "分";
	    //休息超過1小時
	    j++;
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].align="center";
	    table.rows[i].cells[j].innerText = over_1hr[i] + "次";
	}

	//表格標頭
	table.insertRow(0);
	{
		//***序號
		table.rows[0].insertCell(0);
		table.rows[0].cells[0].align="center";
		table.rows[0].cells[0].innerText = "序號";
		//***刪除
		table.rows[0].insertCell(1);
		table.rows[0].cells[1].align="center";
		table.rows[0].cells[1].innerText = "刪除";
		//***車次
		table.rows[0].insertCell(2);
		table.rows[0].cells[2].align="center";
		table.rows[0].cells[2].colSpan= (maxnum_cells-2)+1 ; // -序號 -刪除 +最右插入格
		table.rows[0].cells[2].innerText = "車次";
		//***分勤時間
		table.rows[0].insertCell(3);
		table.rows[0].cells[3].align="center";
		table.rows[0].cells[3].innerText = "分勤時間";
		//***工作時間
		table.rows[0].insertCell(4);
		table.rows[0].cells[4].align="center";
		table.rows[0].cells[4].innerText = "工作時間";
		//***平均休息時間
		table.rows[0].insertCell(5);
		table.rows[0].cells[5].align="center";
		table.rows[0].cells[5].innerText = "平均\n休息時間";
		//***休息超過1小時
		table.rows[0].insertCell(6);
		table.rows[0].cells[6].align="center";
		table.rows[0].cells[6].innerText = "休息超過\n１小時";
	}

	//實際司機數
	var num_drivers = 0;
	for (var i = 0; i < myList.row.length; i++)
		if(myList.row[i].trip.length > 0)
			num_drivers++;
	//工作時間檢查
	for (var i = 0, j; i < myList.row.length; i++)
	{
		if(totwork[i] > 900)
		{
			 for (j = 0; j < table.rows[i+1].cells.length; j++)
			 {
				 table.rows[i+1].cells[j].style.backgroundColor = "#FFFF00";
			 }
			 for (j = 0; j < myList.row[i].trip.length-1; j++)//recolor
			 {
				//myList.row[i].trip[j+1].start_time - myList.row[i].trip[j].end_time > 60 ?
				var hr=Math.floor(myList.row[i].trip[j+1].start_time / 100) - Math.floor(myList.row[i].trip[j].end_time / 100);
				var min=(myList.row[i].trip[j+1].start_time % 100) - (myList.row[i].trip[j].end_time % 100);
				if( (hr*60 + min) > 60)
					table.rows[i+1].cells[j*2+4].style.backgroundColor = "#B0C4DE";
			 }
		}
	}
	//num of drivers & avg worktime
	document.getElementById("driver").innerHTML = num_drivers + "人";
	document.getElementById("avgwork").innerHTML = Math.round(allwork / num_drivers) + "分";
	document.getElementById("avgreturn").innerHTML = Math.round((allwork - all_realwork) / num_drivers) + "分"; //中退=總工作-實際工作
	document.getElementById("over1hr").innerHTML = allover_1hr + "次";
	document.getElementById("avgrealwork").innerHTML = Math.round(all_realwork / num_drivers) + "分";

	//事件設定
	if (table != null) {
		//標頭列事件-群體拖曳
		for (var i = 1; i < table.rows.length; i++)
		{
			table.rows[i].cells[0].onclick =function(){
				//start 'alldrag'
				if((isread_tb && !isread_pool) && (row_read_tb==this.parentNode.rowIndex))
				{
					isalldrag = true;
					//change header color
					table.rows[this.parentNode.rowIndex].cells[this.cellIndex].style.backgroundColor = "#FDB03B";
				}
			}
		}
		//內格事件
		for (var i = 1; i < table.rows.length; i++)
		{
			//data cells are draggable
			for (var k = 0; k < myList.row[i-1].trip.length ; k++)//json index
			{
				var j = k*2 + 3;	//table index
				table.rows[i].cells[j].draggable=true;
				table.rows[i].cells[j].ondragstart = function(event){
					store(this,0);
					this.style.backgroundColor = "#FDB03B";

					//data of this cell 
					row_of_under	= this.parentNode.rowIndex;
					cell_of_under	= this.cellIndex;
					color_of_under	= this.style.backgroundColor;
					
					event.dataTransfer.setData("Text", event.target.id);
				};
				table.rows[i].cells[j].onclick =function(){
					if(isalldrag && (row_read_tb==this.parentNode.rowIndex))	//'alldrag' is start
					{								//and in the same row
						cell_start = (cell_read_tb<=this.cellIndex)? cell_read_tb : this.cellIndex ;	//table index
						cell_end = (cell_read_tb<=this.cellIndex)? this.cellIndex : cell_read_tb ;	//table index
						//change these cells color
						for(var l=cell_start; l <= cell_end; l+=2)
							table.rows[row_read_tb].cells[l].style.backgroundColor = "#FDB03B";
					}
					else if(isalldrag)
					{
						isalldrag = false;
						//refresh table
						for(var q=table.rows.length-1;q>=0;q--)
							table.deleteRow(q);
						display_table();
						//isread reset
						isread_tb   = false;
						isread_pool = false;
					}
					else
					{
						//read data color change
						if(!isread_tb && !isread_pool)
						{
							row_read_tb  = this.parentNode.rowIndex;
							cell_read_tb = this.cellIndex;
    							color_read_tb= this.style.backgroundColor;
							table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#FDB03B";
							isread_tb = true;
						}
						else if(!isread_tb && isread_pool)
						{
							//close pool color-change
							pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
							pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#000000";
							isread_pool = false;

							//open table color-change
							row_read_tb  = this.parentNode.rowIndex;
							cell_read_tb = this.cellIndex;
    							color_read_tb= this.style.backgroundColor;
							table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#FDB03B";
							isread_tb = true;
						}
						else if(isread_tb && !isread_pool)
						{
							if((row_read_tb == this.parentNode.rowIndex) && (cell_read_tb == this.cellIndex))
							//reclick the same cell
							{
								table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = color_read_tb;
								isread_tb = false;
								document.getElementById("data1").innerHTML ="";
								document.getElementById("data2").innerHTML ="";
								document.getElementById("data3").innerHTML ="";
								document.getElementById("data4").innerHTML ="";
								document.getElementById("data5").innerHTML ="";
							}
							else
							{
								table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = color_read_tb;
								row_read_tb  = this.parentNode.rowIndex;
								cell_read_tb = this.cellIndex;
    								color_read_tb= this.style.backgroundColor;
								table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#FDB03B";
								isread_tb = true;
							}
						}

						var thisrow = this.parentNode.rowIndex-1;	//JSON index
						var thiscel = (this.cellIndex-3)/2;		//JSON index
						document.getElementById("data1").innerHTML = myList.row[thisrow].trip[thiscel].line_name;
						//timedata
						var hr,min;
						var timestring;
						//start time
						hr=Math.floor(myList.row[thisrow].trip[thiscel].start_time / 100);
						min=myList.row[thisrow].trip[thiscel].start_time % 100;
						timestring= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min ;
						document.getElementById("data2").innerHTML = timestring;
						timestring="";
						//end time
						hr=Math.floor(myList.row[thisrow].trip[thiscel].end_time / 100);
						min=myList.row[thisrow].trip[thiscel].end_time % 100;
						timestring= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min ;
						document.getElementById("data3").innerHTML = timestring;
						//station data
						document.getElementById("data4").innerHTML = myList.row[thisrow].trip[thiscel].from_sta;
						document.getElementById("data5").innerHTML = myList.row[thisrow].trip[thiscel].to_sta;
					}
				};
				table.rows[i].cells[j].ondragend = function(event){
					isalldrag = false;
					//refresh table
					for(var q=table.rows.length-1;q>=0;q--)
						table.deleteRow(q);
					display_table();
					//refresh pool
					for(var q=pool.rows.length-1;q>=0;q--)
						pool.deleteRow(q);
					display_pool();
				};
			}
			//every(in range) cell's events
			for (var j = 0; j < table.rows[i].cells.length ; j++) 
			{
				table.rows[i].cells[j].ondragover =function(event){
					if(row_of_under != this.parentNode.rowIndex || cell_of_under != this.cellIndex)
					{
						//old 'overed'
						if(row_of_under < 0)//old is in pool
							pool.rows[pool.rows.length-1].cells[cell_of_under].style.backgroundColor = color_of_under;
						else
							table.rows[row_of_under].cells[cell_of_under].style.backgroundColor = color_of_under;
						row_of_under	= this.parentNode.rowIndex;
						cell_of_under	= this.cellIndex;
						color_of_under	= this.style.backgroundColor;
						//new and legal 'overed', then change color
						if(this.cellIndex <= myList.row[this.parentNode.rowIndex-1].trip.length*2+2 && this.cellIndex >= 2)//邊界防呆
						{
							if (this.cellIndex %2 == 0)	 //insert
				    			{
								if (examine_ins(this.parentNode.rowIndex, this.cellIndex) == 0)
									this.style.backgroundColor = "#808080";	//gray
								else
									this.style.backgroundColor = "#C1272D";	//sta. red
								
							}
						    	else				 //exchange
						    	{
								if (examine(this.parentNode.rowIndex, this.cellIndex) == 0)
									this.style.backgroundColor = "#808080";	//gray
								else
									this.style.backgroundColor = "#C1272D";	//sta. red	
							}
							//this.style.backgroundColor = "#808080";	//gray
						}
					}
					//document.getElementById("demo2").innerHTML = this.parentNode.rowIndex +"-"+ this.cellIndex;
					//document.getElementById("demo2").innerHTML = row_of_under +"-"+ cell_of_under;
					event.preventDefault();
				};
				table.rows[i].cells[j].ondrop =function(event){
					event.preventDefault();
					//document.getElementById("demo3").innerHTML = this.parentNode.rowIndex +"."+ this.cellIndex;
					if(this.cellIndex <= myList.row[this.parentNode.rowIndex-1].trip.length*2+2 && this.cellIndex >= 2)//邊界防呆-移入邊界外無效
					{
						if((this.parentNode.rowIndex!=row_of_temp || this.cellIndex!=cell_of_temp) || (table_mark==1))
						//重複防呆-座標完全相同不得進入
						//來源儲存格屬pool則例外
						{
				    			this.style.backgroundColor = "#39B54A";
				    			if (this.cellIndex %2 == 0)	 //insert
				    			{
								if (examine_ins(this.parentNode.rowIndex, this.cellIndex) == 0)
									insert(this.parentNode.rowIndex, this.cellIndex, 0);
								else
									alert("插入失敗，班次無法銜接");
								
							}
						    	else				 //exchange
						    	{
								if (examine(this.parentNode.rowIndex, this.cellIndex) == 0)
									exchange(this.parentNode.rowIndex, this.cellIndex);
								else
									alert("交換失敗，班次無法銜接");	
							}
							table.rows[this.parentNode.rowIndex].cells[this.cellIndex].style.backgroundColor = color_of_under;
						}
					}
					if(table_mark==0)
						table.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
					else if(table_mark==1)
						pool.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
					/*//refresh table
					for(var q=table.rows.length-1;q>=0;q--)
						table.deleteRow(q);
					display_table();
					//refresh pool
					for(var q=pool.rows.length-1;q>=0;q--)
						pool.deleteRow(q);
					display_pool();*/
					//isread reset
					isread_tb   = false;
					isread_pool = false;
				};
			}
		}

	}
    }
    function display_pool()
    {
	//-----------trip pool--------------//
	//trip pool build
	for (var num = poolList.trip.length, i = 0 ; num >= 0; /*num -= trips_per_row,*/ i++ ) {
	    pool.insertRow();

	    //add cell to 'trips_per_row'
	    for (var j = 0 ; j < trips_per_row /*&& num >= 0 */; j++, num--) {
		var Trip = poolList.trip[i*trips_per_row+j];
		pool.rows[i].insertCell(j);
		pool.rows[i].cells[j].style.width = "100px";
		pool.rows[i].cells[j].style.height = "50px";

		if(Trip)
		{
			pool.rows[i].cells[j].align="center";
			if(Trip.line_name == "空車車次")
			{
				pool.rows[i].cells[j].style.fontStyle="italic";
				pool.rows[i].cells[j].ondblclick = function(){
					var dblc=confirm("是否要刪除？");
					if(dblc)
					{
						var row  = this.parentNode.rowIndex;
						var cell = this.cellIndex;
						//alert(row+","+cell);
						//delete obj (delete 1 obj from 'row*trips_per_row +cell')
						poolList.trip.splice( row*trips_per_row +cell ,1);

						//refresh pool
						for(var q=pool.rows.length-1;q>=0;q--)
							pool.deleteRow(q);
						display_pool();
					}
				}
			}
			var timestring_sta, timestring_end;
			var hr,min;
			hr=Math.floor(Trip.start_time / 100);
			min=Trip.start_time % 100;
			timestring_sta= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
			hr=Math.floor(Trip.end_time / 100);
			min=Trip.end_time % 100;
			timestring_end= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
			pool.rows[i].cells[j].innerText = Trip.line_name + " \n(" + timestring_sta + "-" + timestring_end + ")" ;
			pool.rows[i].cells[j].innerText += "\n" + Trip.from_sta + "->" + Trip.to_sta;

			pool.rows[i].cells[j].draggable=true;
			//events
			pool.rows[i].cells[j].ondragstart = function(event){
				//document.getElementById("demo1").innerHTML = this.parentNode.rowIndex +","+ this.cellIndex;
				store(this,1);
				this.style.backgroundColor = "#22B573";
				this.style.color = "#FFFFFF";
				
				//default left-up
				row_of_under	= 0;
				cell_of_under	= 0;
				color_of_under	= table.rows[0].cells[0].style.backgroundColor;
				
				event.dataTransfer.setData("Text", event.target.id);
			};
			pool.rows[i].cells[j].ondragend = function(event){
				pool.rows[row_of_temp].cells[cell_of_temp].style.color = "#FFFFFF";
				//refresh table
				for(var q=table.rows.length-1;q>=0;q--)
					table.deleteRow(q);
				display_table();
				//refresh pool
				for(var q=pool.rows.length-1;q>=0;q--)
					pool.deleteRow(q);
				display_pool();
			};
			pool.rows[i].cells[j].onclick =function(){
				if(isalldrag)
				{
					isalldrag = false;
					//refresh pool
					for(var q=pool.rows.length-1;q>=0;q--)
						pool.deleteRow(q);
					display_pool();
				}
				//read data color change
				var row_pool  = this.parentNode.rowIndex;
				var cell_pool = this.cellIndex;
				if(!isread_tb && !isread_pool)
				{
					row_read_pool  = this.parentNode.rowIndex;
					cell_read_pool = this.cellIndex;
    					color_read_pool= this.style.backgroundColor;
					pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#22B573";
					pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#FFFFFF";
					isread_pool = true;
				}
				else if(!isread_tb && isread_pool)
				{
					if((row_read_pool == this.parentNode.rowIndex) && (cell_read_pool == this.cellIndex))
					//reclick the same cell
					{
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
						pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#000000";
						isread_pool = false;
						document.getElementById("data1").innerHTML ="";
						document.getElementById("data2").innerHTML ="";
						document.getElementById("data3").innerHTML ="";
						document.getElementById("data4").innerHTML ="";
						document.getElementById("data5").innerHTML ="";
					}
					else
					{
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
						pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#000000";
						row_read_pool  = this.parentNode.rowIndex;
						cell_read_pool = this.cellIndex;
    						color_read_pool= this.style.backgroundColor;
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#22B573";
						pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#FFFFFF";
						isread_pool = true;
					}
				}
				else if(isread_tb && !isread_pool)
				{
					//close table color-change
					table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = color_read_tb;
					isread_tb = false;

					//open pool color-change
					row_read_pool  = this.parentNode.rowIndex;
					cell_read_pool = this.cellIndex;
    					color_read_pool= this.style.backgroundColor;
					pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#22B573";
					pool.rows[row_read_pool].cells[cell_read_pool].style.color = "#FFFFFF";
					isread_pool = true;
				}
				document.getElementById("data1").innerHTML = poolList.trip[row_pool*trips_per_row +cell_pool].line_name;
				//timedata
				var hr,min;
				var timestring;
				//start time
				hr=Math.floor(poolList.trip[row_pool*trips_per_row +cell_pool].start_time / 100);
				min=poolList.trip[row_pool*trips_per_row +cell_pool].start_time % 100;
				timestring= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min ;
				document.getElementById("data2").innerHTML = timestring;
				timestring="";
				//end time
				hr=Math.floor(poolList.trip[row_pool*trips_per_row +cell_pool].end_time / 100);
				min=poolList.trip[row_pool*trips_per_row +cell_pool].end_time % 100;
				timestring= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min ;
				document.getElementById("data3").innerHTML = timestring;
				//station data
				document.getElementById("data4").innerHTML = poolList.trip[row_pool*trips_per_row +cell_pool].from_sta;
				document.getElementById("data5").innerHTML = poolList.trip[row_pool*trips_per_row +cell_pool].to_sta;
			};
		}
	    }
	}

	//insert event of lastcell of pool
	//var lastrows_pool = pool.rows.length-1;				//table index
	//var lastcell_pool = pool.rows[lastrows_pool].cells.length-1;	//table index
	var lastrows_pool = Math.floor(poolList.trip.length/trips_per_row);	//table index
	var lastcell_pool = poolList.trip.length%trips_per_row;			//table index
	pool.rows[lastrows_pool].cells[lastcell_pool].ondragover =function(event){
		event.preventDefault();
		//old 'overed'
		table.rows[row_of_under].cells[cell_of_under].style.backgroundColor = color_of_under;
		//new 'overed'
		row_of_under	= -1;	//-: isinpool
		cell_of_under	= this.cellIndex;		//lastrow & lastcell
		color_of_under	= this.style.backgroundColor;
		this.style.backgroundColor = "#808080";	//gray
	};
	pool.rows[lastrows_pool].cells[lastcell_pool].ondrop =function(event){
		event.preventDefault();
			
		//insert(this.parentNode.rowIndex, this.cellIndex ,1);
		if(table_mark==0)
		{
			var row  = row_of_temp-1;		//json index
			var cell = (cell_of_temp - 3)/2;	//json index
			if((myList.row[row].trip.length==1) || ((cell==myList.row[row].trip.length-1) || (cell==0)))
			//被移動之row中只有一個或此車次在邊上
			{
				insert(this.parentNode.rowIndex, this.cellIndex ,1);
			}
			else
			//被移動之車次不在row的邊上
			{
				var precell =myList.row[row].trip[cell-1];
				var nextcell=myList.row[row].trip[cell+1];
				if(precell.to_sta==nextcell.from_sta)
				{
					insert(this.parentNode.rowIndex, this.cellIndex ,1);
				}
				else
					alert("刪除失敗，起訖點無法接續");
			}
			table.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
		}
		else if(table_mark==1)
		{
			insert(this.parentNode.rowIndex, this.cellIndex ,1);
			pool.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
		}
		table.rows[this.parentNode.rowIndex].cells[this.cellIndex].style.backgroundColor = color_of_under;
		/*//refresh table
		for(var q=table.rows.length-1;q>=0;q--)
			table.deleteRow(q);
		display_table();
		//refresh pool
		for(var q=pool.rows.length-1;q>=0;q--)
			pool.deleteRow(q);
		display_pool();*/
		//isread reset
		isread_tb   = false;
		isread_pool = false;
	};
    }
}
