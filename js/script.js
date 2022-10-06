let check_open = 0;
let id;

function play(){
	document.getElementById('start').style.cssText = "display:none;";
}

function check1(){
	check_open += 1;

	document.getElementById('area1').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area15'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area1').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area1";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check2(){
	check_open += 1;

	document.getElementById('area2').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area16'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area2').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area2";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check3(){
	check_open += 1;

	document.getElementById('area3').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area12'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area3').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area3";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check4(){
	check_open += 1;

	document.getElementById('area4').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area10'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area4').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area4";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check5(){
	check_open += 1;

	document.getElementById('area5').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area13'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area5').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area5";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check6(){
	check_open += 1;

	document.getElementById('area6').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area11'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area6').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area6";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check7(){
	check_open += 1;

	document.getElementById('area7').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area14'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area7').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area7";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check8(){
	check_open += 1;

	document.getElementById('area8').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area9'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area8').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area8";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check9(){
	check_open += 1;

	document.getElementById('area9').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area8'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area9').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area9";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check10(){
	check_open += 1;

	document.getElementById('area10').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area4'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area10').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area10";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check11(){
	check_open += 1;

	document.getElementById('area11').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area6'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area11').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area11";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check12(){
	check_open += 1;

	document.getElementById('area12').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area3'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area12').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area12";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check13(){
	check_open += 1;

	document.getElementById('area13').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area5'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area13').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area13";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check14(){
	check_open += 1;

	document.getElementById('area14').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area7'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area14').style.cssText = "transform:rotateY(0deg);";
	console.log(id);
				document.getElementById(id).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},500);
	}
	else{
		id = "area14";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}

function check15(){
	check_open += 1;

	document.getElementById('area15').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area1'){ 
			console.log('congratulations');
			check_open = 0;
			}
			else {
				document.getElementById('area15').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},1000);
	}
	else{
		id = "area15";
		document.getElementById(id).style.cssText = "transform:rotateY(180deg);";
		check_open = 1;
		id = "area15";
	}
}

function check16(){
	check_open += 1;
	document.getElementById('area16').style.cssText = "transform:rotateY(180deg);";

	if (check_open == 2){
		setTimeout(() => {
			if (id == 'area2'){ 
			console.log('congratulations');
			}
			else {
				document.getElementById('area16').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
			}
			check_open = 0;
		},1000);
	}
	else{
		id = "area16";
		document.getElementById('area16').style.cssText = "transform:rotateY(180deg);";
		check_open = 1;

	}
}
