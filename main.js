let x = -6;
for (x; x<=6; x+=2){
    if(x < 2){
        document.write('При x < 2 функція = ',  Math.cos(4*x)-5, '<br>');
    }
    if(x === 2){
        document.write('При x = 2 функція = ', Math.abs(Math.pow(Math.tan(x), 3)), '<br>');
    }
    if(x>2){
        document.write('При x > 2 функція = ', 2 + Math.pow(x, 1/3), '<br>');
    }
}