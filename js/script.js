let check_open = 0;
let id;
let check_end_game = "matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 0, 0, 0, 1)";

function play(){
	document.getElementById('start').style.cssText = "display:none;";
	for (let s=1; s<=16; s++){
		document.getElementById(`area${s}`).style.cssText = "transform:rotateY(180deg);";
		setTimeout(function(){
			for (let t=1; t<=16; t++){
				document.getElementById(`area${t}`).style.cssText = "transform:rotateY(0deg);";
			}
		}, 3000);
	}
}

function check1(){
	check_open += 1;
	document.getElementById('area1').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area15'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area1'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.display = 'block';
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area1').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area1";

	}
}

function check2(){
	check_open += 1;
	document.getElementById('area2').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area16'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area2'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area2').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area2";

	}
}

function check3(){
	check_open += 1;
	document.getElementById('area3').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area12'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area3'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area3').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area3";

	}
}

function check4(){
	check_open += 1;
	document.getElementById('area4').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area10'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area4'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area4').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area4";

	}
}

function check5(){
	check_open += 1;
	document.getElementById('area5').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area13'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area5'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area5').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area5";

	}
}

function check6(){
	check_open += 1;
	document.getElementById('area6').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area11'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area6'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area6').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area6";

	}
}

function check7(){
	check_open += 1;
	document.getElementById('area7').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area14'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area7'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area7').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area7";

	}
}

function check8(){
	check_open += 1;
	document.getElementById('area8').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area9'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area8'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area8').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area8";

	}
}

function check9(){
	check_open += 1;
	document.getElementById('area9').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area8'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area9'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area8').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area9";

	}
}

function check10(){
	check_open += 1;
	document.getElementById('area10').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area4'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area10'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area10').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area10";

	}
}

function check11(){
	check_open += 1;
	document.getElementById('area11').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area6'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area11'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area11').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area11";

	}
}

function check12(){
	check_open += 1;
	document.getElementById('area12').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area3'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area12'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area12').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area12";

	}
}

function check13(){
	check_open += 1;
	document.getElementById('area13').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area5'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area13'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area13').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area13";

	}
}

function check14(){
	check_open += 1;
	document.getElementById('area14').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area7'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area14'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area14').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area14";

	}
}

function check15(){
	check_open += 1;
	document.getElementById('area15').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area1'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area15'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area15').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area15";

	}
}

function check16(){
	check_open += 1;
	document.getElementById('area16').style.cssText = "transform:rotateY(180deg);";
	if (check_open == 2){
			if (id == 'area2'){
				check_open = 0;
				let b = 1;
				for (let i=1; i<=16; i++){
					let a = `area${i}`;
					if (a!='area16'){
						if (getComputedStyle(document.getElementById(a)).transform == check_end_game){
							b++;
							if (b == 15){
								setTimeout(function(){
									document.getElementById('play_again').style.cssText = "display:block;";
								}, 400);
							}
						}
					}
				}
			}
			else {
				setTimeout(function(){
				document.getElementById('area16').style.cssText = "transform:rotateY(0deg);";
				document.getElementById(`${id}`).style.cssText = "transform:rotateY(0deg);";
				id = 0;
				}, 400);
			}
			check_open = 0;
	}
	else{
		id = "area16";

	}
}

function play_again(){
	for(let i = 1; i<=16; i++){
		document.getElementById(`area${i}`).style.cssText = "transform:rotateY(0deg);";
	}
	document.getElementById('play_again').style.cssText = "display:none;";
}
