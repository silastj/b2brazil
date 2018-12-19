   // Load more
    
   function ocultar(id){
    $('#'+ id).hide()
}
   
    
    
    // Função Home


     $(document).on('ready',function (){
      

      $('#homeClick').on('click',function (){

        var clon1 = $('#paragrafo-01').clone();
        $("#quadrado").text(" "); 
        $('#quadrado').append(clon1);

        });
    });



    // Função Profile

    $(document).on('ready',function (){
      

        $('#profileClick').on('click',function (){
  
            var clon1 = $('#paragrafo-01').clone();
            var clon2 = $('#paragrafo-02').clone();
          
          $("#quadrado").text(" ");   
          $('#quadrado').append(clon1,clon2);
  
          });
      });


      // Função Names




      $(document).on('ready',function (){
      

        $('#namesClick').on('click',function (){
  
            var tableBr = $('#table01').clone();
           

            
          $("#quadrado").text(" ");  
          $("#quadrado").append(tableBr);
          $("#table01").slideToggle();
         
          
  
          });
      });

      //  Mascara Telefone
      

    
       
    jQuery("input#telefone")
    .mask("(99) 9999-99999")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length < 10) {  
            element.mask("(99) 99999-9999");  
        } else {  
            element.mask("(99) 9999-99999");  
        }  
    });





 

