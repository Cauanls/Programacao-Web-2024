function ImprimirOperacao(){
    let a = 2;
    let b = 3;
    console.log("O resultado da soma entre "+ a +" e "+ b +" é = " + (a + b));
}

function Operacoes(a, b, op){
    let c;

    switch(op){
        case'+':
        c = a + b;
        break;
        case'-':
        c = a - b;
        break;
        case'*':
        c = a * b;
        break;
        case'/':
        c = a / b;
        break;
    }

    console.log('O resultado da opecação ' + op + ' entre ' + a + ' e ' + b + ' = ' + c)
}

ImprimirOperacao();
Operacoes(2, 5, '+')