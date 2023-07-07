       let sparol =+ prompt('Пароль')
       let i = 4
       let parol = 7777
       do{
         if(sparol !== parol){
           sparol =+prompt(`У вас ещё ${i} попытки`);
         }
         else if(sparol == parol , i == 4){
           alert('Добро пожаловать')
           }
         i--
       }
       while(i>0 ) 