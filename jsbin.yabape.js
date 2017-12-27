$(document).ready(function(){
  var questions = [
    {
      title: 'What are the Primary colors?',
      answers: ['Blue, Red, Green','Green, Purple, Orange','Yellow, Green, Pink',' Red, Blue, Yellow'],
      correct: 3
    },
    {
      title: 'What are the Secondary colors?',
      answers: ['Green, Orange, Purple','Red, Blue, Yellow','Blue, Purple, Red','Orange, Yellow, Green'],
      correct: 0
    },
    {
      title: 'What are the Tertiary colors?',
      answers: ['Yellow-orange, red-orange, red-purple, blue-purple, blue-green & yellow-green','Orange-red, Purple-Orange','Blue-green, Purple-Orange, Red-green','Red and Blue'],
      correct: 1
    },
    {
      title: 'Which of these is a warm color?',
      answers: ['Blue','Green','Red','silver'],
      correct: 2
    },
      {
      title: 'Which of these is cool color?',
      answers: ['Orange','Blue','Red','Yellow'],
      correct: 1
     },
      {
      title: 'Which of these is a neutral color?',
      answers: ['Purple', 'Green', 'Red', 'Black'],
      correct: 3
      
    },
      {
      title: 'Complementary colors are also known as ___ colors.',
      answers: ['Analogous', 'Opposite', 'Tertiary', 'Supplementary'],
      correct: 1
      
    },
      {
      title: 'Colors you cannot see through are called ___ colors.',
      answers: ['Transparent','Opaque', 'Clear', 'Matt'],
      correct: 3
      
    },
      {
      title: 'A ___ is a color mixed with the color white.',
      answers: ['Shade', 'Tone', 'Tint', 'Hue'],
      correct: 2
      
    },
      {
      title: 'A___ is a color mixed with the color black.',
      answers: ['Tone','Tint','Shade','Hue'],
      correct: 2
      
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  /* event listeners */
  displayQuestion();
  
  
  $('.startButton').click(function(){
    restartQuiz();
  });
                      
  $('.answers').on('click','li',function(){
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
  
  $('.submit').click(function(){
    if($('li.selected').length > 0){
      var answer = $('li.selected').attr('data-answer');
      checkAnswer(answer);
    } else {
      alert('You must select an answer to proceed!');
    }
  });
  
  $('.restart').click(function(){
    restartQuiz();
  });
  
  
  /* end of event listeners */
  
  
  function displayQuestion(){
    if(currentQuestion < questions.length){
      var question = questions[currentQuestion];
      $('.question h2').text(question.title);
      $('.answers').html('');
      for(var i=0; i<question.answers.length; i++){
        $('.answers').append('<li data-answer="'+i+'">'+question.answers[i]+'</li>');
      }
      updateScore();
      
    } else {
      showSummary();
    }
    
  }
  
  function checkAnswer(answer){
    var question = questions[currentQuestion];
    if(question.correct == answer){
      score++;
    }
    currentQuestion++;
    displayQuestion();
  }
  
  function updateScore(){
    $('.score').text('Score: '+score);
    $('.progress').text('Question '+(currentQuestion+1)+' of '+questions.length);
  }
  
  function showSummary(){
    $('.question').hide();
    $('.information').hide();
    $('.summary').show();
    $('.summary-score').text('You scored '+score+' out of '+questions.length);
    
  }
  
  function restartQuiz(){
    $('.question').show();
    $('.information').show();
    $('.summary').hide();
    $('.startPage').hide();
    
    
    score = 0;
    currentQuestion = 0;
    displayQuestion();
  }
  
  
  
});