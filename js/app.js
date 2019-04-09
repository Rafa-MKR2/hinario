$(document).ready(function(){
    $('#numerosHinos').fadeOut(600) 
    $('#selecaoABC').fadeOut(600) 
    var hinos = $('#hinos').html().toString()
    $('#hinos').fadeOut()
    $('#conteudoSelecionado').html(hinos)

  document.querySelector("#selecionaABC").addEventListener('click', function() {
    $('#hinos').fadeOut(200)
    $('#numerosHinos').fadeOut(600)
    $('#conteudoSelecionado').html('')
    $('#selecaoABC').fadeIn(1200) 
       
  })

  document.querySelector("#seleciona123").addEventListener('click', function() {
    $('#hinos').fadeOut(600)
    $('#selecaoABC').fadeOut(600)
    $('#conteudoSelecionado').html('')

    $('#numerosHinos').fadeIn(1200) 

})

document.querySelector("#titulo").addEventListener('click', function() {
   $('#conteudoSelecionado').html('')
    $('#numerosHinos').fadeOut(600) 
    $('#selecaoABC').fadeOut(600) 

    $('#conteudoSelecionado').html(hinos)
})


// função que controla seleção Alfabetica 
$(function(){ 
    $(".abcButton").click(function(){
        var texto = '#myDIV'+$(this).text().replace(/\s/g,'');

        $('#selecaoABC').fadeOut() 
        $('#conteudoSelecionado').html('')
      $(texto).each(function(){
        $('#conteudoSelecionado').removeClass('naoSelecionavel').html($(this).html());
    
    });
    
    // Função da lista em ordem alfabetica
    $(".hinoBtn").click(function(){
        var seletor = $(this).attr('id')
        $(".bloco").each(function(){
          if(seletor===$(this).children().html()) { 
  
              $('#conteudoSelecionado').html('')
              $('#numerosHinos').fadeOut(600) 
              $('#selecaoABC').fadeOut(600) 
              $('#conteudoSelecionado').html($(this).html())

          }
             
        }); 
    

    })



      }); 
      
    });
  

// função que controla seleção numericos
$(function(){ 
    $(".btnNumber").click(function(){
      var texto = $(this).text().replace(/\s/g,'');


      $(".bloco").each(function(){
          var id= '@'+texto+'@';
        if(id===$(this).children().html()) { 

            $('#conteudoSelecionado').html('')
            $('#numerosHinos').fadeOut(600) 
            $('#selecaoABC').fadeOut(600) 
            $('#conteudoSelecionado').html($(this).html())

        }
           
      }); 
  
    });
  
  });



  // Fim do script
});