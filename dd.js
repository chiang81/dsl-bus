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

    //JSON table
    var myList = {
	"row": [{
	    "trip": [{
		"line_name": "12_3",
		"start_time": 600,
		"end_time": 740
	    }, {
		"line_name": "R3_15",
		"start_time": 815,
		"end_time": 1018
	    }, {
		"line_name": "12_18",
		"start_time": 1105,
		"end_time": 1115
	    }, {
		"line_name": "12_24",
		"start_time": 1435,
		"end_time": 1535
	    }]
	}, {
	    "trip": [{
		"line_name": "12_1",
		"start_time": 545,
		"end_time": 715
	    }, {
		"line_name": "12_9",
		"start_time": 740,
		"end_time": 940
	    }, {
		"line_name": "12_16",
		"start_time": 1015,
		"end_time": 1215
	    }, {
		"line_name": "12_22",
		"start_time": 1245,
		"end_time": 1445
	    }]
	}, {
	    "trip": [{
		"line_name": "12_2",
		"start_time": 600,
		"end_time": 738
	    }, {
		"line_name": "R8_10",
		"start_time": 800,
		"end_time": 945
	    }, {
		"line_name": "12_17",
		"start_time": 1040,
		"end_time": 1240
	    }, {
		"line_name": "12_23",
		"start_time": 1310,
		"end_time": 1510
	    }, {
		"line_name": "DLP_5",
		"start_time": 1720,
		"end_time": 1810
	    }, {
		"line_name": "DLP_7",
		"start_time": 1810,
		"end_time": 1900
	    }]
	}, {
	    "trip": [{
		"line_name": "12_4",
		"start_time": 620,
		"end_time": 825
	    }, {
		"line_name": "12_12",
		"start_time": 840,
		"end_time": 1040
	    }, {
		"line_name": "12_19",
		"start_time": 1130,
		"end_time": 1330
	    }, {
		"line_name": "12_35",
		"start_time": 1740,
		"end_time": 1940
	    }]
	}, {
	    "trip": [{
		"line_name": "12_6",
		"start_time": 835,
		"end_time": 905
	    }, {
		"line_name": "12_15",
		"start_time": 950,
		"end_time": 1150
	    }, {
		"line_name": "12_21",
		"start_time": 1220,
		"end_time": 1420
	    }, {
		"line_name": "R8_20",
		"start_time": 1545,
		"end_time": 1715
	    }, {
		"line_name": "DLP_6",
		"start_time": 1740,
		"end_time": 1810
	    }, {
		"line_name": "DLP_8",
		"start_time": 1815,
		"end_time": 1920
	    }]
	}]
    };
    var table = document.getElementById("table1");
    var totwork = new Array(myList.row.length);
    var realwork = new Array(myList.row.length);
    var allwork = 0;
    var all_realwork = 0;
    var maxnum_cells = 0;
    //use to trip pool
    var poolList={"trip": []};
    /*var poolList={"trip": [ {
		"line_name": "TEST_1",
		"start_time": 1300,
		"end_time": 1500
	    }, {
		"line_name": "TEST_2",
		"start_time": 815,
		"end_time": 1000
	    }, {
		"line_name": "TEST_3",
		"start_time": 1230,
		"end_time": 1400
	    }, {
		"line_name": "TEST_4",
		"start_time": 2200,
		"end_time": 2330
	    }, {
		"line_name": "TEST_5",
		"start_time": 1200,
		"end_time": 1430
	    }
	    ]};*/
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

    display_table();
    display_pool();

    //definition of functions
    function store(Cell,i) {
	//A->TEMP
	row_of_temp = Cell.parentNode.rowIndex;
	cell_of_temp = Cell.cellIndex; //table index
	color_of_temp = Cell.style.backgroundColor;

	table_mark = i;
    }

    function examine(row, col) {
	var oldCell, oldCell_pre, oldCell_next;
	var thisCell, thisCell_pre, thisCell_next;

	var new_col = (col-3)/2;	//json index
	var new_cell_of_temp;		//json index

	if(table_mark==0)	//cell from table
	{
		new_cell_of_temp = (cell_of_temp-3)/2;
		if(new_cell_of_temp==0){
		    oldCell = myList.row[row_of_temp].trip[new_cell_of_temp];
		    oldCell_pre = {"end_time": 0};
		    oldCell_next = myList.row[row_of_temp].trip[new_cell_of_temp+1];
		} else if (new_cell_of_temp==myList.row[row_of_temp].trip.length-1){
		    oldCell = myList.row[row_of_temp].trip[new_cell_of_temp];
		    oldCell_pre = myList.row[row_of_temp].trip[new_cell_of_temp-1];
		    oldCell_next = {"start_time": 9999};
		} else{
		    oldCell = myList.row[row_of_temp].trip[new_cell_of_temp];
		    oldCell_pre = myList.row[row_of_temp].trip[new_cell_of_temp-1];
		    oldCell_next = myList.row[row_of_temp].trip[new_cell_of_temp+1];
		}
	}
	else if(table_mark==1)	//cell from pool
	{
		oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
		oldCell_pre = {"end_time": 0};
		oldCell_next = {"start_time": 9999};
	}

	if(new_col==0){
	    thisCell = myList.row[row].trip[new_col];
	    thisCell_pre = {"end_time": 0};
	    thisCell_next = myList.row[row].trip[new_col+1];
	} else if (new_col==myList.row[row].trip.length-1) {
	    thisCell = myList.row[row].trip[new_col];
	    thisCell_pre = myList.row[row].trip[new_col-1];
	    thisCell_next = {"start_time": 9999};
	} else {
	    thisCell = myList.row[row].trip[new_col];
	    thisCell_pre = myList.row[row].trip[new_col-1];
	    thisCell_next = myList.row[row].trip[new_col+1];
	}

	//examine oldCell origin position time
	if (thisCell.start_time < oldCell_pre.end_time) {
	    return -1;
	}
	if (thisCell.end_time > oldCell_next.start_time) {
	    return -1;
	}
	//examine thisCell origin position time
	if (oldCell.start_time < thisCell_pre.end_time) {
	    return -1;
	}
	if (oldCell.end_time > thisCell_next.start_time) {
	    return -1;
	}
	return 0
    }
    function examine_ins(row,col){
	var oldCell;
	var thisCell_pre,thisCell_next;

	var new_col = (col)/2-1; 			//the right index of the gap
	var new_cell_of_temp = (cell_of_temp-3)/2; 	//the index in json
	
	if(table_mark==0)	//cell from table
	{
		oldCell = myList.row[row_of_temp].trip[new_cell_of_temp];
	}
	else if(table_mark==1)	//cell from pool
	{
		oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
	}

	if(new_col==0)//start of array
	{
	    thisCell_pre = {"end_time": 0};
	    if(myList.row[row].trip.length==0)
	    {
		thisCell_next = {"start_time": 9999};
	    }
	    else
	    {
		thisCell_next = myList.row[row].trip[new_col];
	    }
	} 
	else if (new_col==myList.row[row].trip.length)//end of array
	{
	    thisCell_pre = myList.row[row].trip[new_col-1];
	    thisCell_next = {"start_time": 9999};
	} 
	else
	{
	    thisCell_pre = myList.row[row].trip[new_col-1];
	    thisCell_next = myList.row[row].trip[new_col];
	}

	if(oldCell.start_time < thisCell_pre.end_time){
	    return -1;
	}
	if(oldCell.end_time > thisCell_next.start_time){
	    return -1;
	}
	return 0;
    }
    function exchange(row, col) {
	if(table_mark==0)	//cell from table
		var oldCell = myList.row[row_of_temp].trip[(cell_of_temp-3)/2]; //json index
	else if(table_mark==1)	//cell from pool
		var oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];

	var thisCell = myList.row[row].trip[(col-3)/2];
	var temp;

	//old->TEMP
	temp = oldCell;
	//this->old
	oldCell = thisCell;
	//TEMP->this
	thisCell = temp;

	//reverse input
	if(table_mark==0)	//cell from table
		myList.row[row_of_temp].trip[(cell_of_temp-3)/2] = oldCell; //json index
	else if(table_mark==1)	//cell from pool
		poolList.trip[row_of_temp*trips_per_row +cell_of_temp] = oldCell;
	myList.row[row].trip[(col-3)/2] = thisCell;

	//alert("Exchange Finished!");
    }
    function insert(row,col,topool) { //topool=0: insert into table, topool=1: insert into pool
	//var oldCell = myList.row[row_of_temp].trip[(cell_of_temp-3)/2];
	if(table_mark==0)	//oldcell from table
	{
		if(topool==0)
		{
			var oldCell = myList.row[row_of_temp].trip[(cell_of_temp-3)/2]; //json index
			//add obj after 'col/2-1'
			myList.row[row].trip.splice(col/2-1,0,oldCell);
			//delete obj (delete 1 obj from cell_of_temp/2-1)
			myList.row[row_of_temp].trip.splice((cell_of_temp-3)/2,1);
		}
		else if(topool==1)
		{
			var oldCell = myList.row[row_of_temp].trip[(cell_of_temp-3)/2]; //json index
			//poolList.trip[i*trips_per_row+j];
			//add obj after 'row*trips_per_row+col'
			poolList.trip.splice(row*trips_per_row+col,0,oldCell);
			//delete obj (delete 1 obj from cell_of_temp/2-1)
			myList.row[row_of_temp].trip.splice((cell_of_temp-3)/2,1);
		}
	}
	else if(table_mark==1)	//oldcell from pool
	{
		if(topool==0)
		{
			var oldCell = poolList.trip[row_of_temp*trips_per_row +cell_of_temp];
			//add obj after 'col/2-1'
			myList.row[row].trip.splice(col/2-1,0,oldCell);
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
	    myList.row.splice(row,1);

	    //refresh table
	    for(var q=table.rows.length-1;q>=0;q--)
		    table.deleteRow(q);
	    display_table();
    }

    function display_table() {
	//-----------bus table--------------//
	table = document.getElementById("table1");
	totwork = new Array(myList.row.length);
	realwork = new Array(myList.row.length);
	allwork = 0;
	all_realwork = 0;
	maxnum_cells = 0;

	document.getElementById("btn_new").onclick= function(){
	    add_row();
	};

	//JSON table build
	for (var i = 0, j, k; i < myList.row.length; i++) {
	    table.insertRow();

	    //Serial Number
	    table.rows[i].insertCell(0);
	    table.rows[i].cells[0].innerText = i + 1;
	    
	    //button cell
	    table.rows[i].insertCell(1);
	    //del button
	    var btn_del = document.createElement("button");
	    btn_del.style.width="40px";
	    btn_del.style.height="30px";
	    btn_del.innerHTML="刪除";
	    
	    table.rows[i].cells[1].appendChild(btn_del);
	    table.rows[i].cells[1].align="center";
	    btn_del.onclick= function(){
		    if(myList.row[this.parentNode.parentNode.rowIndex].trip.length ==0) //delete null row
			del_row(this.parentNode.parentNode.rowIndex);
		    else
		    {
			    /*if(myList.row.length > 1)
			    {*/
			    //transport trips
			    while(myList.row[this.parentNode.parentNode.rowIndex].trip.length > 0)
			    {
				var X=myList.row[this.parentNode.parentNode.rowIndex].trip[0];
				//delete 1 obj from 0
				myList.row[this.parentNode.parentNode.rowIndex].trip.splice(0,1);
				//add obj after 'poolList.trip.length'
				poolList.trip.splice(poolList.trip.length,0,X);
			    }
			    //delete null row
			    del_row(this.parentNode.parentNode.rowIndex);
			    /*}
			    else
				    alert("You can't delete anymore. Otherwise, there will be no driver!!");*/
			    //refresh pool
			    for(var q=pool.rows.length-1;q>=0;q--)
				    pool.deleteRow(q);
			    display_pool();
			    //isread reset
			    isread_tb   = false;
			    isread_pool = false;
		    }
	    };
	    btn_del.style.width=btn_del.parentNode.width;

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
		var timestring_sta, timestring_end;
		var hr,min;
		hr=Math.floor(Trip.start_time / 100);
		min=Trip.start_time % 100;
		timestring_sta= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
		hr=Math.floor(Trip.end_time / 100);
		min=Trip.end_time % 100;
		timestring_end= ((hr<10)?"0":"") + hr + ":" + ((min<10)?"0":"") + min;
		table.rows[i].cells[k+1].innerText = Trip.line_name + " \n(" + timestring_sta + "-" + timestring_end + ")";
		realwork[i] += (Math.floor(Trip.end_time / 100) - Math.floor(Trip.start_time / 100)) * 60 + (Trip.end_time % 100 - Trip.start_time % 100);
	    }
	    if (maxnum_cells < myList.row[i].trip.length*2 + 2)
		{maxnum_cells = myList.row[i].trip.length*2 + 2;}
	}

	//total worktime per driver
	for (var i = 0, j; i < myList.row.length; i++) {
	    //add cell to 'maxnum_cells' & add the rightest cell
	    for (j = myList.row[i].trip.length*2 + 2; j < maxnum_cells ; j++) {
		table.rows[i].insertCell(j);
	    }

	    //last insert cell
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].style.width = '20px';

	    //sum cell
	    j++;
	    table.rows[i].insertCell(j);
	    table.rows[i].cells[j].innerText = totwork[i] + "分";
	    allwork += totwork[i];
	    all_realwork += realwork[i];
	}
	//實際司機數
	var num_drivers = 0;
	for (var i = 0; i < myList.row.length; i++)
	{
		if(myList.row[i].trip.length > 0)
		{
			num_drivers++;
		}
	}
	//工作時間檢查
	for (var i = 0; i < myList.row.length; i++)
	{
		if(totwork[i] > 900)
		{
			 for (j = 0; j < table.rows[i].cells.length; j++)
			 {
				 table.rows[i].cells[j].style.backgroundColor = "#FFFF00";
			 }
		}
	}
	//休息超過１小時次數計算
	var over_1hr=0;
	for (var i = 0; i < myList.row.length; i++)
	{
		for (var j = 0; j < myList.row[i].trip.length-1; j++)
		{
			//myList.row[i].trip[j+1].start_time - myList.row[i].trip[j].end_time > 60 ?
			var hr=Math.floor(myList.row[i].trip[j+1].start_time / 100) - Math.floor(myList.row[i].trip[j].end_time / 100);
			var min=(myList.row[i].trip[j+1].start_time % 100) - (myList.row[i].trip[j].end_time % 100);
			if( (hr*60 + min) > 60)
				over_1hr++;
		}
	}
	//num of drivers & avg worktime
	document.getElementById("driver").innerHTML = num_drivers + "人";
	document.getElementById("avgwork").innerHTML = Math.round(allwork / num_drivers) + "分";
	document.getElementById("avgreturn").innerHTML = Math.round((allwork - all_realwork) / num_drivers) + "分"; //中退=總工作-實際工作
	document.getElementById("over1hr").innerHTML = over_1hr + "次";
	document.getElementById("avgrealwork").innerHTML = Math.round(all_realwork / num_drivers) + "分";

	//事件設定
	if (table != null) {
		for (var i = 0; i < table.rows.length; i++)
		{
			//data cells are draggable
			for (var k = 0; k < myList.row[i].trip.length ; k++)//json index
			{
				var j = k*2 + 3;	//table index
				table.rows[i].cells[j].draggable=true;
				table.rows[i].cells[j].ondragstart = function(event){
					//document.getElementById("demo1").innerHTML = this.parentNode.rowIndex +","+ this.cellIndex;
					store(this,0);
					this.style.backgroundColor = "#FF931E";

					//data of this cell 
					row_of_under	= this.parentNode.rowIndex;
					cell_of_under	= this.cellIndex;
					color_of_under	= this.style.backgroundColor;
					 
					event.dataTransfer.setData("Text", event.target.id);
				};
				table.rows[i].cells[j].onclick =function(){
					//read data color change
					if(!isread_tb && !isread_pool)
					{
						row_read_tb  = this.parentNode.rowIndex;
						cell_read_tb = this.cellIndex;
    						color_read_tb= this.style.backgroundColor;
						table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#00FF00";
						isread_tb = true;
					}
					else if(!isread_tb && isread_pool)
					{
						//close pool color-change
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
						isread_pool = false;

						//open table color-change
						row_read_tb  = this.parentNode.rowIndex;
						cell_read_tb = this.cellIndex;
    						color_read_tb= this.style.backgroundColor;
						table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#00FF00";
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
						}
						else
						{
							table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = color_read_tb;
							row_read_tb  = this.parentNode.rowIndex;
							cell_read_tb = this.cellIndex;
    							color_read_tb= this.style.backgroundColor;
							table.rows[row_read_tb].cells[cell_read_tb].style.backgroundColor = "#00FF00";
							isread_tb = true;
						}
					}

					var thisrow = this.parentNode.rowIndex;
					var thiscel = (this.cellIndex-3)/2;
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
						if(this.cellIndex <= myList.row[this.parentNode.rowIndex].trip.length*2+2 && this.cellIndex >= 2)//邊界防呆
							this.style.backgroundColor = "#808080";	//gray
					}
					//document.getElementById("demo2").innerHTML = this.parentNode.rowIndex +"-"+ this.cellIndex;
					//document.getElementById("demo2").innerHTML = row_of_under +"-"+ cell_of_under;
					event.preventDefault();
				};
				table.rows[i].cells[j].ondragend = function(event){
					//refresh table
					for(var q=table.rows.length-1;q>=0;q--)
						table.deleteRow(q);
					display_table();
					//refresh pool
					for(var q=pool.rows.length-1;q>=0;q--)
						pool.deleteRow(q);
					display_pool();
				};
				table.rows[i].cells[j].ondrop =function(event){
					event.preventDefault();
					//document.getElementById("demo3").innerHTML = this.parentNode.rowIndex +"."+ this.cellIndex;
					if(this.cellIndex <= myList.row[this.parentNode.rowIndex].trip.length*2+2 && this.cellIndex >= 2)//邊界防呆-移入邊界外無效
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
						}
					}
					if(table_mark==0)
						table.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
					else if(table_mark==1)
						pool.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
					table.rows[this.parentNode.rowIndex].cells[this.cellIndex].style.backgroundColor = color_of_under;
					
					//refresh table
					for(var q=table.rows.length-1;q>=0;q--)
						table.deleteRow(q);
					display_table();
					//refresh pool
					for(var q=pool.rows.length-1;q>=0;q--)
						pool.deleteRow(q);
					display_pool();
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
	    for (var j = 0 ; j < trips_per_row && num >= 0 ; j++, num--) {
		var Trip = poolList.trip[i*trips_per_row+j];
		pool.rows[i].insertCell(j);
		pool.rows[i].cells[j].style.width = "100px";
		pool.rows[i].cells[j].style.height = "50px";

		if(Trip)
		{
			pool.rows[i].cells[j].align="center";	
			pool.rows[i].cells[j].innerText = Trip.line_name + " \n(" + Trip.start_time + "-" + Trip.end_time + ")";
			pool.rows[i].cells[j].draggable=true;
			//events
			pool.rows[i].cells[j].ondragstart = function(event){
				//document.getElementById("demo1").innerHTML = this.parentNode.rowIndex +","+ this.cellIndex;
				store(this,1);
				this.style.backgroundColor = "#FF931E";
				
				//default left-up
				row_of_under	= 0;
				cell_of_under	= 0;
				color_of_under	= table.rows[0].cells[0].style.backgroundColor;
				
				event.dataTransfer.setData("Text", event.target.id);
			};
			pool.rows[i].cells[j].ondragend = function(event){
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
				//read data color change
				var row_pool  = this.parentNode.rowIndex;
				var cell_pool = this.cellIndex;
				if(!isread_tb && !isread_pool)
				{
					row_read_pool  = this.parentNode.rowIndex;
					cell_read_pool = this.cellIndex;
    					color_read_pool= this.style.backgroundColor;
					pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#00FF00";
					isread_pool = true;
				}
				else if(!isread_tb && isread_pool)
				{
					if((row_read_pool == this.parentNode.rowIndex) && (cell_read_pool == this.cellIndex))
					//reclick the same cell
					{
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
						isread_pool = false;
						document.getElementById("data1").innerHTML ="";
						document.getElementById("data2").innerHTML ="";
						document.getElementById("data3").innerHTML ="";
					}
					else
					{
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = color_read_pool;
						row_read_pool  = this.parentNode.rowIndex;
						cell_read_pool = this.cellIndex;
    						color_read_pool= this.style.backgroundColor;
						pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#00FF00";
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
					pool.rows[row_read_pool].cells[cell_read_pool].style.backgroundColor = "#00FF00";
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
			};
		}
	    }
	}

	//insert event of lastcell of pool
	var lastrows_pool = pool.rows.length-1;				//table index
	var lastcell_pool = pool.rows[lastrows_pool].cells.length-1;	//table index
	pool.rows[lastrows_pool].cells[lastcell_pool].ondragover =function(event){
		event.preventDefault();
		//old 'overed'
		table.rows[row_of_under].cells[cell_of_under].style.backgroundColor = color_of_under;
		row_of_under	= -1;	//-: isinpool
		cell_of_under	= this.cellIndex;		//lastrow & lastcell
		color_of_under	= this.style.backgroundColor;
		this.style.backgroundColor = "#808080";	//gray
	};
	pool.rows[lastrows_pool].cells[lastcell_pool].ondrop =function(event){
		event.preventDefault();
		insert(this.parentNode.rowIndex, this.cellIndex ,1);
		if(table_mark==0)
			table.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
		else if(table_mark==1)
			pool.rows[row_of_temp].cells[cell_of_temp].style.backgroundColor = color_of_temp;
		table.rows[this.parentNode.rowIndex].cells[this.cellIndex].style.backgroundColor = color_of_under;
		//refresh table
		for(var q=table.rows.length-1;q>=0;q--)
			table.deleteRow(q);
		display_table();
		//refresh pool
		for(var q=pool.rows.length-1;q>=0;q--)
			pool.deleteRow(q);
		display_pool();
		//isread reset
		isread_tb   = false;
		isread_pool = false;
	};
    }
}
