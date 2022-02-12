//EVALUACION DE PORCENTAJES


        function porcentaje(name,respuestasPositivas) {
            var positivas = (respuestasPositivas / 100)*100;
            var negativas =100 - positivas;

            if(respuestasPositivas >=90)
            {
               messagge='A';
            }

            else if((respuestasPositivas >=70)&& (respuestasPositivas <=89))
            {
                 messagge='B';
            }

            else if((respuestasPositivas >=45)&&(respuestasPositivas <=65))
            {
                messagge='C';   
            }

            else if(respuestasPositivas <=45){
                 messagge='D';
            }
            return `${name} usted a obtenido una ${messagge}, con un resultado de ${positivas}% positivas y ${negativas}% negativas `;
        }
       
console.log(porcentaje('Adonai',78));