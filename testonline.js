function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Manakah yang tidak termasuk golongan tertentu atau mempunyai persamaan tertentu di bawah ini?',
	['Coklat', 'Susu', 'Gula', 'Kopi','Minuman Instan'],
	'4'); 
	var q2 = new Question('sinonim dari PROMOSI?',
	['Hadiah', 'Premi', 'Sumbangan', 'Iklan','Tunjangan'],
	'3');
	var q3 = new Question('antonim dari TUMBUH?',
	['Gede', 'Kecil', 'Hebat', 'Besar','Muncul'],
	'1');
	var q4 = new Question('analogi SAPI : RUMPUT?',
	['MOTOR : BULAN', 'SUAMI : IBU','CACING : IKAN','MACAN : DAGING'],
	'3');
	var q5 = new Question('Kosa(Koatak) Kata | Asah (.....?) Otak',
	['Gademi', 'Nekida', 'Neraki' , 'Garaka' , 'Askato'],
	'4');
    	var q6 = new Question('Ada berapa Program Studi di STIKOM ?',
	['20', '4', '10' , '6' , '1'],
	'1');
    	var q7 = new Question('SEKOLAH TINGGI ILMU KOMPUTER disingkat ?',
	['STIPRAM', 'STIKES', 'STIKOM' , 'IAIN' , 'AMIKOM'],
	'2');
    	

	var questions = [ql, q2, q3, q4, q5,q6,q7];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'EXIT')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};