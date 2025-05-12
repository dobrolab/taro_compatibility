function calculateSum() {

		// Получаем значение даты рождения
		var birthdate1 = document.getElementById('birthdate1').value;
		var birthmonth1 = document.getElementById('birthmonth1').value;
		var birthyear1 = document.getElementById('birthyear1').value;

		// Получаем значение даты рождения
		var birthdate2 = document.getElementById('birthdate2').value;
		var birthmonth2 = document.getElementById('birthmonth2').value;
		var birthyear2 = document.getElementById('birthyear2').value;

		let pimg = [];
		pimg[0] = '';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266903dc8ff1c73776b4f_optimized.webp';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b9c327343ef95bf8d_optimized.webp';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226692cbcc01377cb1f9aa_optimized.webp';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266923dc8ff1c73776b6e_optimized.webp';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226699cbcc01377cb1f9e2_optimized.webp';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266939c327343ef95bfc8_optimized.webp';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266958b4abbcdca113a0b_optimized.webp';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226694cbcc01377cb1f9ca_optimized.webp';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b84_optimized.webp';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b8c_optimized.webp';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266869c327343ef95bf5b_optimized.webp';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266878b4abbcdca113999_optimized.webp';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f957_optimized.webp';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266879c327343ef95bf61_optimized.webp';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f94b_optimized.webp';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266862dc243710eb3466e_optimized.webp';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266872dc243710eb34681_optimized.webp';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266928b4abbcdca1139ef_optimized.webp';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668ccbcc01377cb1f980_optimized.webp';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668d3dc8ff1c73776b22_optimized.webp';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b8b4abbcdca1139b6_optimized.webp';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668e2dc243710eb346aa_optimized.webp';


		// =========== USER 1

		// [1] [2] Получаем значения
		u1result01 = parseInt(birthdate1);
		while ( u1result01 > 22 ) { u1result01 = u1result01 - 22 };
		u1result02 = parseInt(birthmonth1);
		while ( u1result02 > 22 ) { u1result02 = u1result02 - 22 };

		// [3]
		var u1yearsum = 0;
		for (var i = 0; i < birthyear1.length; i++) {
			u1yearsum += parseInt(birthyear1[i]);
		}
		u1result03 = u1yearsum;
		while ( u1result03 > 22 ) { u1result03 = u1result03 - 22 };

		// [4]
		u1result04 = u1result01 + u1result02
		if ( u1result04 == 0 ) { u1result04 = 22 };
		while ( u1result04 > 22 ) { u1result04 = u1result04 - 22 };

		// [5]
		u1result05 = u1result02 + u1result03
		if ( u1result05 > 22 ) { u1result05 = u1result05 - 22 };
		if ( u1result05 == 0 ) { u1result05 = 22 };
		while ( u1result05 > 22 ) { u1result05 = u1result05 - 22 };

		// [6]
		u1result06 = u1result04 + u1result05
		if ( u1result06 == 0 ) { u1result06 = 22 };
		while ( u1result06 > 22 ) { u1result06 = u1result06 - 22 };

		// [7]
		u1result07 = u1result01 + u1result05
		if ( u1result07 == 0 ) { u1result07 = 22 };
		while ( u1result07 > 22 ) { u1result07 = u1result07 - 22 };

		// [8]
		u1result08 = u1result02 + u1result06
		if ( u1result08 == 0 ) { u1result08 = 22 };
		while ( u1result08 > 22 ) { u1result08 = u1result08 - 22 };

		// [9]
		u1result09 = u1result07 + u1result08
		if ( u1result09 == 0 ) { u1result09 = 22 };
		while ( u1result09 > 22 ) { u1result09 = u1result09 - 22 };

		// [10]
		u1result10 = u1result01 + u1result04 + u1result06
		if ( u1result10 == 0 ) { u1result10 = 22 };
		while ( u1result10 > 22 ) { u1result10 = u1result10 - 22 };

		// [11]
		u1result11 = u1result03 + u1result05 + u1result06
		if ( u1result11 == 0 ) { u1result11 = 22 };
		while ( u1result11 > 22 ) { u1result11 = u1result11 - 22 };

		// [12]
		u1result12 = u1result01 + u1result02 + u1result03 + u1result04 + u1result05 + u1result06
		if ( u1result12 == 0 ) { u1result12 = 22 };
		while ( u1result12 > 22 ) { u1result12 = u1result12 - 22 };


		// Выводим результат на экран
		document.getElementById('u1rr01').textContent = convertToRoman(u1result01);
			document.getElementById('u1rs01').textContent = convertToSub(u1result01);
			document.getElementById('u1ri01').src = pimg[u1result01];
		document.getElementById('u1rr02').textContent = convertToRoman(u1result02);
			document.getElementById('u1rs02').textContent = convertToSub(u1result02);
			document.getElementById('u1ri02').src = pimg[u1result02];
		document.getElementById('u1rr03').textContent = convertToRoman(u1result03);
			document.getElementById('u1rs03').textContent = convertToSub(u1result03);
			document.getElementById('u1ri03').src = pimg[u1result03];
		document.getElementById('u1rr04').textContent = convertToRoman(u1result04);
			document.getElementById('u1rs04').textContent = convertToSub(u1result04);
			document.getElementById('u1ri04').src = pimg[u1result04];
		document.getElementById('u1rr05').textContent = convertToRoman(u1result05);
			document.getElementById('u1rs05').textContent = convertToSub(u1result05);
			document.getElementById('u1ri05').src = pimg[u1result05];
		document.getElementById('u1rr06').textContent = convertToRoman(u1result06);
			document.getElementById('u1rs06').textContent = convertToSub(u1result06);
			document.getElementById('u1ri06').src = pimg[u1result06];
		document.getElementById('u1rr07').textContent = convertToRoman(u1result07);
			document.getElementById('u1rs07').textContent = convertToSub(u1result07);
			document.getElementById('u1ri07').src = pimg[u1result07];
		document.getElementById('u1rr08').textContent = convertToRoman(u1result08);
			document.getElementById('u1rs08').textContent = convertToSub(u1result08);
			document.getElementById('u1ri08').src = pimg[u1result08];
		document.getElementById('u1rr09').textContent = convertToRoman(u1result09);
			document.getElementById('u1rs09').textContent = convertToSub(u1result09);
			document.getElementById('u1ri09').src = pimg[u1result09];
		document.getElementById('u1rr10').textContent = convertToRoman(u1result10);
			document.getElementById('u1rs10').textContent = convertToSub(u1result10);
			document.getElementById('u1ri10').src = pimg[u1result10];
		document.getElementById('u1rr11').textContent = convertToRoman(u1result11);
			document.getElementById('u1rs11').textContent = convertToSub(u1result11);
			document.getElementById('u1ri11').src = pimg[u1result11];
		document.getElementById('u1rr12').textContent = convertToRoman(u1result12);
			document.getElementById('u1rs12').textContent = convertToSub(u1result12);
			document.getElementById('u1ri12').src = pimg[u1result12];

		// =========== USER 2

		// [1] [2] Получаем значения
		u2result01 = parseInt(birthdate2);
		while ( u2result01 > 22 ) { u2result01 = u2result01 - 22 };
		u2result02 = parseInt(birthmonth2);
		while ( u2result02 > 22 ) { u2result02 = u2result02 - 22 };

		// [3]
		var u2yearsum = 0;
		for (var i = 0; i < birthyear2.length; i++) {
			u2yearsum += parseInt(birthyear2[i]);
		}
		u2result03 = u2yearsum;
		while ( u2result03 > 22 ) { u2result03 = u2result03 - 22 };

		// [4]
		u2result04 = u2result01 + u2result02
		if ( u2result04 == 0 ) { u2result04 = 22 };
		while ( u2result04 > 22 ) { u2result04 = u2result04 - 22 };

		// [5]
		u2result05 = u2result02 + u2result03
		if ( u2result05 > 22 ) { u2result05 = u2result05 - 22 };
		if ( u2result05 == 0 ) { u2result05 = 22 };
		while ( u2result05 > 22 ) { u2result05 = u2result05 - 22 };

		// [6]
		u2result06 = u2result04 + u2result05
		if ( u2result06 == 0 ) { u2result06 = 22 };
		while ( u2result06 > 22 ) { u2result06 = u2result06 - 22 };

		// [7]
		u2result07 = u2result01 + u2result05
		if ( u2result07 == 0 ) { u2result07 = 22 };
		while ( u2result07 > 22 ) { u2result07 = u2result07 - 22 };

		// [8]
		u2result08 = u2result02 + u2result06
		if ( u2result08 == 0 ) { u2result08 = 22 };
		while ( u2result08 > 22 ) { u2result08 = u2result08 - 22 };

		// [9]
		u2result09 = u2result07 + u2result08
		if ( u2result09 == 0 ) { u2result09 = 22 };
		while ( u2result09 > 22 ) { u2result09 = u2result09 - 22 };

		// [10]
		u2result10 = u2result01 + u2result04 + u2result06
		if ( u2result10 == 0 ) { u2result10 = 22 };
		while ( u2result10 > 22 ) { u2result10 = u2result10 - 22 };

		// [11]
		u2result11 = u2result03 + u2result05 + u2result06
		if ( u2result11 == 0 ) { u2result11 = 22 };
		while ( u2result11 > 22 ) { u2result11 = u2result11 - 22 };

		// [12]
		u2result12 = u2result01 + u2result02 + u2result03 + u2result04 + u2result05 + u2result06
		if ( u2result12 == 0 ) { u2result12 = 22 };
		while ( u2result12 > 22 ) { u2result12 = u2result12 - 22 };


		// Выводим результат на экран
		document.getElementById('u2rr01').textContent = convertToRoman(u2result01);
			document.getElementById('u2rs01').textContent = convertToSub(u2result01);
			document.getElementById('u2ri01').src = pimg[u2result01];
		document.getElementById('u2rr02').textContent = convertToRoman(u2result02);
			document.getElementById('u2rs02').textContent = convertToSub(u2result02);
			document.getElementById('u2ri02').src = pimg[u2result02];
		document.getElementById('u2rr03').textContent = convertToRoman(u2result03);
			document.getElementById('u2rs03').textContent = convertToSub(u2result03);
			document.getElementById('u2ri03').src = pimg[u2result03];
		document.getElementById('u2rr04').textContent = convertToRoman(u2result04);
			document.getElementById('u2rs04').textContent = convertToSub(u2result04);
			document.getElementById('u2ri04').src = pimg[u2result04];
		document.getElementById('u2rr05').textContent = convertToRoman(u2result05);
			document.getElementById('u2rs05').textContent = convertToSub(u2result05);
			document.getElementById('u2ri05').src = pimg[u2result05];
		document.getElementById('u2rr06').textContent = convertToRoman(u2result06);
			document.getElementById('u2rs06').textContent = convertToSub(u2result06);
			document.getElementById('u2ri06').src = pimg[u2result06];
		document.getElementById('u2rr07').textContent = convertToRoman(u2result07);
			document.getElementById('u2rs07').textContent = convertToSub(u2result07);
			document.getElementById('u2ri07').src = pimg[u2result07];
		document.getElementById('u2rr08').textContent = convertToRoman(u2result08);
			document.getElementById('u2rs08').textContent = convertToSub(u2result08);
			document.getElementById('u2ri08').src = pimg[u2result08];
		document.getElementById('u2rr09').textContent = convertToRoman(u2result09);
			document.getElementById('u2rs09').textContent = convertToSub(u2result09);
			document.getElementById('u2ri09').src = pimg[u2result09];
		document.getElementById('u2rr10').textContent = convertToRoman(u2result10);
			document.getElementById('u2rs10').textContent = convertToSub(u2result10);
			document.getElementById('u2ri10').src = pimg[u2result10];
		document.getElementById('u2rr11').textContent = convertToRoman(u2result11);
			document.getElementById('u2rs11').textContent = convertToSub(u2result11);
			document.getElementById('u2ri11').src = pimg[u2result11];
		document.getElementById('u2rr12').textContent = convertToRoman(u2result12);
			document.getElementById('u2rs12').textContent = convertToSub(u2result12);
			document.getElementById('u2ri12').src = pimg[u2result12];


		// =========== USER 3

		// [1] 
		u3result01 = u1result01 + u2result01;
		while ( u3result01 > 22 ) { u3result01 = u3result01 - 22 };

		// [2] 
		u3result02 = u1result02 + u2result02;
		while ( u3result02 > 22 ) { u3result02 = u3result02 - 22 };

		// [3]
		u3result03 = u1result03 + u2result03;
		while ( u3result03 > 22 ) { u3result03 = u3result03 - 22 };

		// [4]
		u3result04 = u1result04 + u2result04
		while ( u3result04 > 22 ) { u3result04 = u3result04 - 22 };

		// [5]
		u3result05 = u1result05 + u2result05
		while ( u3result05 > 22 ) { u3result05 = u3result05 - 22 };

		// [6]
		u3result06 = u1result06 + u2result06
		while ( u3result06 > 22 ) { u3result06 = u3result06 - 22 };

		// [7]
		u3result07 = u1result07 + u2result07
		while ( u3result07 > 22 ) { u3result07 = u3result07 - 22 };

		// [8]
		u3result08 = u1result08 + u2result08
		while ( u3result08 > 22 ) { u3result08 = u3result08 - 22 };

		// [9]
		u3result09 = u1result09 + u2result09
		while ( u3result09 > 22 ) { u3result09 = u3result09 - 22 };

		// [10]
		u3result10 = u1result10 + u2result10
		while ( u3result10 > 22 ) { u3result10 = u3result10 - 22 };

		// [11]
		u3result11 = u1result11 + u2result11
		while ( u3result11 > 22 ) { u3result11 = u3result11 - 22 };

		// [12]
		u3result12 = u1result12 + u2result12
		while ( u3result12 > 22 ) { u3result12 = u3result12 - 22 };


		// Выводим результат на экран
		document.getElementById('u3rr01').textContent = convertToRoman(u3result01);
			document.getElementById('u3rs01').textContent = convertToSub(u3result01);
			document.getElementById('u3ri01').src = pimg[u3result01];
		document.getElementById('u3rr02').textContent = convertToRoman(u3result02);
			document.getElementById('u3rs02').textContent = convertToSub(u3result02);
			document.getElementById('u3ri02').src = pimg[u3result02];
		document.getElementById('u3rr03').textContent = convertToRoman(u3result03);
			document.getElementById('u3rs03').textContent = convertToSub(u3result03);
			document.getElementById('u3ri03').src = pimg[u3result03];
		document.getElementById('u3rr04').textContent = convertToRoman(u3result04);
			document.getElementById('u3rs04').textContent = convertToSub(u3result04);
			document.getElementById('u3ri04').src = pimg[u3result04];
		document.getElementById('u3rr05').textContent = convertToRoman(u3result05);
			document.getElementById('u3rs05').textContent = convertToSub(u3result05);
			document.getElementById('u3ri05').src = pimg[u3result05];
		document.getElementById('u3rr06').textContent = convertToRoman(u3result06);
			document.getElementById('u3rs06').textContent = convertToSub(u3result06);
			document.getElementById('u3ri06').src = pimg[u3result06];
		document.getElementById('u3rr07').textContent = convertToRoman(u3result07);
			document.getElementById('u3rs07').textContent = convertToSub(u3result07);
			document.getElementById('u3ri07').src = pimg[u3result07];
		document.getElementById('u3rr08').textContent = convertToRoman(u3result08);
			document.getElementById('u3rs08').textContent = convertToSub(u3result08);
			document.getElementById('u3ri08').src = pimg[u3result08];
		document.getElementById('u3rr09').textContent = convertToRoman(u3result09);
			document.getElementById('u3rs09').textContent = convertToSub(u3result09);
			document.getElementById('u3ri09').src = pimg[u3result09];
		document.getElementById('u3rr10').textContent = convertToRoman(u3result10);
			document.getElementById('u3rs10').textContent = convertToSub(u3result10);
			document.getElementById('u3ri10').src = pimg[u3result10];
		document.getElementById('u3rr11').textContent = convertToRoman(u3result11);
			document.getElementById('u3rs11').textContent = convertToSub(u3result11);
			document.getElementById('u3ri11').src = pimg[u3result11];
		document.getElementById('u3rr12').textContent = convertToRoman(u3result12);
			document.getElementById('u3rs12').textContent = convertToSub(u3result12);
			document.getElementById('u3ri12').src = pimg[u3result12];



}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}


function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}

// document.addEventListener('DOMContentLoaded', function() {

// 	const inputField1 = document.getElementById('persona1');
// 	const resultField1 = document.getElementById('name1');
// 	const resultName1 = document.getElementById('resultname1');

// 	inputField1.addEventListener('input', function() {
// 		resultField1.textContent = this.value;
// 		resultName1.textContent = this.value;
// 	});

// 	const inputField2 = document.getElementById('persona2');
// 	const resultField2 = document.getElementById('name2');
// 	const resultName2 = document.getElementById('resultname2');

// 	inputField2.addEventListener('input', function() {
// 		resultField2.textContent = this.value;
// 		resultName2.textContent = ' и ' + this.value;
// 	});



// });
